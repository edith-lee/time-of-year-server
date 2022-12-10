import Koa from "koa";
import path from "path";
import cors from "@koa/cors";
import { koaBody } from "koa-body";
import jsonUtil from "koa-json";
import helmet from "koa-helmet";
import statics from "koa-static";
import compose from "koa-compose";
import router from "./routes/routes";
import compress from "koa-compress";

const app = new Koa();

const isDevMode =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod"
    ? false
    : true;

// koa-compose 集成中间件
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, "../public")),
  cors(),
  jsonUtil({ pretty: false, param: "pretty" }),
  helmet(),
]);
if (!isDevMode) {
  // 生产模式压缩代码
  app.use(compress());
}
app.use(middleware);

app.use(router());

app.listen(3000);
