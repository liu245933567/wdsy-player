# 某道手游玩家自助客户端

## 项目介绍

山有扶苏出品

## 开发环境配置

Node.js 版本要求：18.17.0+

pnpm 版本要求：7.0.0+

项目启动

```bash
pnpm dev
```

## 环境变量配置

环境变量讲解

- `DB_HOST` 数据库地址
- `DB_USER` 数据库用户名
- `DB_PASS` 数据库密码
- `DB_SDK` SDK 数据库名称
- `DB_ADB` ADB 数据库名称
- `DB_DDB` DDB 数据库名称

`.env` 文件示例

```env
DB_HOST = "192.168.33.134"

DB_USER = "root"

DB_PASS = "123456"

DB_SDK = "90sdk"

DB_ADB = "release_adb"

DB_DDB = "release_ddb"
```

## Docker 部署

## 功能介绍
