describe("Home page", () => {
  it("Home page login", () => {
    // 访问首页
    cy.visit("http://testingpai.com/");
    // 点击登录按钮
    cy.get("#navLogin").click();
    /**
     * 断言
     * url地址中应该包含有 login 这个字符
     */
    cy.url().should("include", "login");
    /**
     * title 中应该包含 登录 这个字符
     */
    cy.title().should("include", "登录");
  });
});
