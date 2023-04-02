describe("查找元素", () => {
  it("element location", () => {
    cy.visit("https://example.cypress.io/commands/querying");

    let name_el = cy.get(".query-form").children("input:first");
    name_el.type("this is my username");

    // const pwd_el = name_el.siblings("input:nth-of-type(1)");
    let pwd_el = name_el.siblings("input");
    pwd_el.type("1234");

    /**
     * 哥哥元素
     */
    name_el = pwd_el.prev("input");
    name_el.clear();

    /**
     * 弟弟元素
     */
    pwd_el = name_el.next("input");
    pwd_el.clear();
  });
});
