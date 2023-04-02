describe("文本", () => {
  it("contain text", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    /**
     * 对文本的定位，使用 contains 就可以了
     */
    cy.contains("Submit").click();
    cy.get(".well > p").should("have.text", "Your form has been submitted!");
  });
});
