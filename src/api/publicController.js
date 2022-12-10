/*
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-10 14:00:05
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 16:00:16
 * @FilePath: \time-of-year-server\src\api\publicController.js
 * @Description: public接口
 *
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
 */
import SvgCaptcha from "svg-captcha";
import * as RetModel from "../model/ret_model";
import { SUCCESS_RET_CODE } from "../utils/constant";
class PublicController {
  constructor() {}
  async getVerifyCodeSvg(ctx) {
    const newSvgCaptcha = SvgCaptcha.create({
      color: true,
      size: 4,
      ignoreChars: "0o1il",
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 50,
    });
    ctx.body = {
      retCode: SUCCESS_RET_CODE,
      retInfo: "请求成功",
      data: newSvgCaptcha.data,
    };
  }
}

export default new PublicController();
