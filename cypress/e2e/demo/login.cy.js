describe("login", () => {
  /**
   * 简单的元素定位
   */
  it("login failed", () => {
    cy.visit("http://www.testingpai.com/login");
    cy.get("#nameOrEmail").type("yuz");
    /**
     * 跳转鼠标
     */
    cy.get("#loginPassword").focus().type("123");
    cy.get("#loginBtn").click();
    cy.get("#loginTip").should("include.text", "密码错误");
  });
});
