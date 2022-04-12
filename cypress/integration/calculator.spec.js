describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  xit('number buttons should update the display', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '123456789')
  })

  xit('should update the display with the running total', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('.display').should('contain', '10');
  })

  xit('should update the display with the running total of arithmetical operation', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10');
  })

  xit('should chain multiple operations together', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
  })

  xit('should allow for negative totals', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  })

  xit('should allow for decimal totals', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.5');
  })

  xit('should allow for float arithmetic', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
  })

  xit('should allow for calculate large totals', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '80000');

  })

  it('should handle multiply by 0', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  })

  //devide by zero should produce an error message not "Infinity"

  it('should handle divide by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');
  })

})