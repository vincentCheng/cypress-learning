import Button from "./Button";

describe("Button", () => {
  it("mount Button", () => {
    cy.mount(<Button></Button>);
    cy.get("[data-cy=btn]").should("have.text", "0");
  });
});
