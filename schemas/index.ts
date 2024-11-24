import { z } from 'zod';

export const DatabaseTagSchema = z.enum([
  'sdk',
  'adb',
  'ddb',
  // 'ldb',
  // 'mdb',
  // 'gddb',
  // 'gsdb',
  // 'sdb',
  // 'sldb',
]);

export type DatabaseTagSchema = z.infer<typeof DatabaseTagSchema>;

/**
 * 数据库配置
 */
export const WdServerConfigSchema = z.object({
  /** 服务器地址 */
  serverHost: z.string().ip(),
  /** 数据库端口 */
  dbPort: z.number().int().min(1).max(65535),
  /** 数据库用户名 */
  dbUsername: z.string().min(1),
  /** 数据库密码 */
  dbPassword: z.string().min(1),
  /** 数据 SDK 库 */
  dbSdk: z.string().min(1),
  /** 数据 SDK 库 */
  dbAdb: z.string().min(1),
  /** 数据 DDB 库 */
  dbDdb: z.string().min(1),
  /** 数据 LDB 库 */
  // dbLdb: z.string().min(1),
  /** 数据 MDB 库 */
  // dbMdb: z.string().min(1),
  /** 数据 GDDB 库 */
  // dbGddb: z.string().min(1),
  /** 数据 GSDB 库 */
  // dbGsdb: z.string().min(1),
  /** 数据 SDB 库 */
  // dbSdb: z.string().min(1),
  /** 数据 SLDB 库 */
  // dbSldb: z.string().min(1),
});

export type WdServerConfigSchema = z.infer<typeof WdServerConfigSchema>;

export const RolesSearchReqSchema = z.object({
  account: z.string().min(1),
  password: z.string().min(1),
});

export type RolesSearchReqSchema = z.infer<typeof RolesSearchReqSchema>;
