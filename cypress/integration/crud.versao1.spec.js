it('CRUDs a note', () => {
  const faker = require('faker')
  const noteDescription = faker.lorem.words(4)
  let attachFile = false
  // Foi utilizado let em vez de const, pois na linha 33 realizamos uma alteração de false para true
  // false está indicando que não quero realizar o anexo

  cy.intercept('GET', '**/notes').as('getNotes')
  cy.intercept('GET', '**/notes/**').as('getNote')
  cy.login()

  cy.visit('/notes/new')
  cy.get('#content').type(noteDescription)

  if (attachFile) { // Se (if) o atachfile for 'true', encontra o elemento para realizar o upload.
    cy.get('#file').attachFile('example.json') // Neste caso irá pegar o arquivo example.json, que está na pasta fixture.
  }

  cy.contains('button', 'Create').click()

  cy.wait('@getNotes')
  cy.contains('.list-group-item', noteDescription)
    .should('be.visible')
    .click()
  cy.wait('@getNote')

  const updatedNoteDescription = faker.lorem.words(4)

  cy.get('#content')
    .clear()
    .type(updatedNoteDescription) // após o update será anexo o arquivo

  attachFile = true

  if (attachFile) {
    cy.get('#file').attachFile('example.json')
  }

  cy.contains('button', 'Save').click()
  cy.wait('@getNotes')

  cy.contains('.list-group-item', noteDescription).should('not.exist')
  cy.contains('.list-group-item', updatedNoteDescription)
    .should('be.visible')
    .click()
  cy.wait('@getNote')
  cy.contains('button', 'Delete').click()
  cy.wait('@getNotes')

  cy.contains('.list-group-item', updatedNoteDescription).should('not.exist')
})