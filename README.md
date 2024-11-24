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

- `DB_HOST` 十六位的十六进制字符
- `DB_PASS` 十六位的十六进制字符
- `DB_SDK` SDK 数据库名称
- `DB_ADB` ADB 数据库名称
- `DB_DDB` DDB 数据库名称

`.env` 文件示例

```env
DB_HOST = "192.168.33.134"

DB_PASS = "123456"

DB_SDK = "90sdk"

DB_ADB = "release_adb"

DB_DDB = "release_ddb"
```

## Docker 部署

## 功能介绍
