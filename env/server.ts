import { createEnv } from '@t3-oss/env-nextjs';
import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

export const serverEnvs = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    DATABASE_URL: z.string(),
    INITIAL_ADMIN_NAME: z.string(),
    INITIAL_ADMIN_EMAIL: z.string(),
    INITIAL_ADMIN_PASSWORD: z.string(),

    // EMAIL_PROVIDER: z.enum(['console', 'smtp', 'resend']).default('console'),

    // // if email provider is smtp
    // SMTP_HOST: z.string().optional(),
    // SMTP_PORT: z.preprocess(Number, z.number()).default(587),
    // SMTP_USERNAME: z.string().optional(),
    // SMTP_PASSWORD: z.string().optional(),
    // SMTP_SECURE: z
    //   .preprocess((v) => v === 'true' || v === '1', z.boolean())
    //   .default(true),

    // // if email provider is resend
    // RESEND_API_KEY: z.string().optional(),

    // // always required regardless of email provider
    // EMAIL_FROM: z.string(),

    // STANDALONE: z.coerce.number().default(0),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export type ServerEnvs = typeof serverEnvs;
