/*
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-10 14:00:10
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 14:24:22
 * @FilePath: \time-of-year-server\src\routes\publicRouter.js
 * @Description: Router
 *
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
 */
import Router from "koa-router";
import PublicController from "../api/publicController";

const router = new Router();
// 前缀，所有请求前都加/api才能进来
router.prefix("/api");
router.get("/verifyCodeSvg", PublicController.getVerifyCodeSvg);

export default router;
