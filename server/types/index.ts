import { WdDb } from '@/lib/wd-db';
// import type { PrismaClient } from '@prisma/client';
import type { Session, User } from 'lucia';

export interface ContextVariables {
  // prisma: PrismaClient;
  user: User | null;
  session: Session | null;
}

export const enum ApiTag {
  AUTH = '认证相关',
  CONFIG = '配置相关',
  WD_SERVER = '游戏服务器',
  WD_ROLE = '角色相关',
  WD_ACCOUNT = '账号相关',
  WD_PET = '宠物',
  WD_WUHUN = '武魂精魄',
  WD_TAIYIN = '太阴之气',
  WD_CONFIG = '游戏配置',
}

export interface WdContextVariables extends ContextVariables {
  wdDb: InstanceType<typeof WdDb>;
}
