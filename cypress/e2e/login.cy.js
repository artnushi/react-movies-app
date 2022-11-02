describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/login");
    cy.findByRole("textbox", { name: /email/i }).type("artnushi@gmail.com");
    cy.findByLabelText(/password/i).type("12345678");
    cy.findByRole("#root > div > div:nth-child(2) > form > div");
  });
});
