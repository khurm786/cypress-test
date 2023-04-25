describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('loading passes', () => {
  })
  
  it("Doesn't have a name", () => {
    cy.get('input[name="username"]').clear();
    cy.get('.details > span').should('contain',"Type in a name");
  });
  
  it("Updates name on change", () => {
    cy.get('input[name="username"]').type('something');
    cy.get('.details > span').should('contain',"something");
  });
})