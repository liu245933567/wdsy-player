import { DatabaseTagSchema, WdServerConfigSchema } from '@/schemas';
import mysql from 'mysql2/promise';

class DbPool {
  static getDbHash = (config: mysql.PoolOptions) => {
    const { host, port, user, password, database } = config;

    if (!host || !user || !password || !port || !database) {
      throw new Error('请配置数据库连接信息');
    }

    return `${host}-${port}-${user}-${password}-${database}`;
  };

  private poolMap = new Map<string, mysql.Pool>();

  public getPool(config: mysql.PoolOptions) {
    const hash = DbPool.getDbHash(config);

    if (this.poolMap.has(hash)) {
      return this.poolMap.get(hash)!;
    } else {
      const pool = mysql.createPool(config);

      this.poolMap.set(hash, pool);

      return pool;
    }
  }
}

const db = new DbPool();

export class WdDb {
  constructor(config: WdServerConfigSchema) {
    this.dbConfig = {
      host: config.serverHost,
      port: config.dbPort,
      user: config.dbUsername,
      password: config.dbPassword,
    };

    this.databaseMap = {
      sdk: config.dbSdk,
      adb: config.dbAdb,
      ddb: config.dbDdb,
      // ldb: config.dbLdb,
      // mdb: config.dbMdb,
      // gddb: config.dbGddb,
      // gsdb: config.dbGsdb,
      // sdb: config.dbSdb,
      // sldb: config.dbSldb,
    };
  }

  databaseMap: Record<DatabaseTagSchema, string>;

  dbConfig: mysql.PoolOptions;

  public getDatabaseName(databaseTag: DatabaseTagSchema) {
    return this.databaseMap[databaseTag];
  }

  public usePool(databaseTag: DatabaseTagSchema) {
    const { host, port, user, password } = this.dbConfig;

    const database = this.databaseMap[databaseTag];

    return db.getPool({
      host,
      port,
      user,
      password,
      database,
      connectionLimit: 10,
      charset: 'latin1',
    });
  }
}
