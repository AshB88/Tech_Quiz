describe("Quiz Component", () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001/');
  });
  
  it("should start the quiz and display the first question", () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('exist').and('not.be.empty');
  });

  it("should answer questions and complete the quiz", () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    const totalQuestions = 10;

    // Iterate through all questions
    for (let i = 0; i < totalQuestions; i++) {
    // Verify the question is displayed
      cy.get('h2').should('exist').and('not.be.empty');

    // Answer the question (e.g., always selecting the first answer)
      cy.get('button').contains('1').click();
    }

    // Verify the quiz completion screen
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    
  });

  it("should restart the quiz after completion", () => {

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    const totalQuestions = 10;
 
     // Iterate through all questions
    for (let i = 0; i < totalQuestions; i++) {
      // Verify the question is displayed
      cy.get('h2').should('exist').and('not.be.empty');
      // Answer the question (e.g., always selecting the first answer)
      cy.get('button').contains('1').click();
      }
 
     // Verify the quiz completion screen
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    

    // Wait for the completion screen to render
    
    cy.get('h2').contains('Quiz Completed').should('exist').and('not.be.empty');

    // Verify that the quiz completion screen is displayed
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Verify that the quiz has restarted
    cy.get('h2').should('exist').and('not.be.empty');
    
  });
});
