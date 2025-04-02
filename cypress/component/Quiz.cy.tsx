import Quiz from "../../client/src/components/Quiz";
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';
import React from 'react';

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', (req) => {
      req.reply({
        fixture: "questions.json",
        statusCode: 200,
      });
    }).as("getQuestions");
  });
  
  it("should start the quiz and display the first question", () => {
    
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('exist').and('not.be.empty');
  });

  it("should answer questions and complete the quiz", () => {

    mount(<Quiz />);

    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('4').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');

    
  });

  it("should restart the quiz after completion", () => {
    
    mount(<Quiz />);

    cy.get('button').contains('Start Quiz').click();
    
    const questionCount = 3;
    for (let i = 0; i < questionCount; i++) {
      cy.get('h2').should('exist').and('not.be.empty');
      cy.get('button').contains('1').click();
    }

    cy.get('button').contains('Take New Quiz').click();
    cy.get('h2').should('exist').and('not.be.empty');
  });
});
