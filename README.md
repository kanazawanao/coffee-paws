# Coffee Paws Project

## Overview

Coffee Paws です
https://coffee-paws.web.app/

## How to start

以下のコマンドで実行します

```bash
# .envファイルを生成する
cp .env.defaults .env

git submodule update --init
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v6.6.0 generate -g typescript-axios -i /local/api/openapi/openapi.yml -o /local/src/api/clients

npm install
npm run dev
```

```bash
# clientのコードを自動生成
# README.mdがあるディレクトリから実行する
rm -r .\src\api\clients\*
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v6.6.0 generate -g typescript-axios -i /local/api/openapi/openapi.yml -o /local/src/api/clients
```
