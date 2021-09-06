it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false } // O uso do false é para executar o fluxo de login padrão (sem verificar a sessão)
  )

  cy.wait('@getNotes')
})
