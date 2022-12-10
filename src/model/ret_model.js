/*
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-10 14:16:32
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 14:25:28
 * @FilePath: \time-of-year-server\src\model\ret_model.js
 * @Description:
 *
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
 */

import { SUCCESS_RET_CODE } from "../utils/constant";

export class RetModel {
  retCode = "";
  retInfo = "";
  data = null;
  constructor() {}

  success(data) {
    this.retCode = SUCCESS_RET_CODE;
    this.retInfo = "";
    this.data = data;
  }
}
