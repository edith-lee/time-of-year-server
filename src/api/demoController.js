class DemoController {
  constructor() {}
  async demo(ctx) {
    ctx.body = {
      msg: "body message11",
    };
  }
}

export default new DemoController();
