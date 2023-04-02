describe("nav", () => {
  it("导航", () => {
    /**
     * 必须返回html的文档。
     * 如果返回的是json格式的，visit无法获取。
     */
    cy.visit("http://testingpai.com/");
    cy.visit("http://testingpai.com/login");
    // 后腿
    cy.go("back");
    // 前进
    cy.go("forward");
    // 有缓存的刷新
    cy.reload();
    // 不使用缓存的刷新
    // cy.reload(true);

    // console.log(cy.url());
    cy.url();

    console.log(cy.title());
  });
});
