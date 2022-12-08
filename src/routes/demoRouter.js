import Router from "koa-router";
import demoController from "../api/demoController";

const router = new Router();
// 前缀，所有请求前都加/api才能进来
router.prefix("/api");
router.get("/demo", demoController.demo);

export default router;
