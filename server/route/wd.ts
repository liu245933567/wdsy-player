import { RolesSearchReqSchema } from '@/schemas';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { WdContextVariables } from '../types';

export const wdApp = new Hono<{
  Variables: WdContextVariables;
}>()
  .post('/wd/mission/jump', async (c) => {
    return c.json({ success: true });
  })
  .get(
    '/wd/roles',
    zValidator('json', RolesSearchReqSchema),
    async (c) => {
      return c.json({
        success: true,
        data: [
          {
            aa: 1,
          },
        ],
      });
    }
  );
