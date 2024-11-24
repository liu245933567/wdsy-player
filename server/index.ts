import { WdDb } from '@/lib/wd-db';
import { WdServerConfigSchema } from '@/schemas';
import { WdContextVariables } from '@/server/types';
import type { Context } from 'hono';
import { Hono } from 'hono';
import { z } from 'zod';
import { wdApp } from './route/wd';

const app = new Hono<{ Variables: WdContextVariables }>().basePath('/api');

app.use(async (c, next) => {
  if (!c.req.url.includes('/wd/')) {
    return next();
  }

  const avid = c.req.header('Avid');

  if (!avid) {
    throw new Error('无效的连接参数');
  }

  const config = WdServerConfigSchema.parse({
    serverHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT || 3306),
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbSdk: process.env.DB_SDK,
    dbAdb: process.env.DB_ADB,
    dbDdb: process.env.DB_DDB,
  });

  c.set('wdDb', new WdDb(config));

  return next();
});

function handleError(err: Error, c: Context): Response {
  console.error(err);

  if (err instanceof z.ZodError) {
    const firstError = err.errors[0];

    return c.json(
      {
        success: false,
        code: 422,
        message: `\`${firstError.path}\`: ${firstError.message}`,
      },
      422
    );
  }

  // handle other error, e.g. ApiError

  return c.json(
    {
      success: false,
      code: 500,
      message: err.message || '出了点问题, 请稍后再试。',
    },
    { status: 500 }
  );
}

app.onError(handleError);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/', wdApp);

export type AppType = typeof routes;

export { app };
