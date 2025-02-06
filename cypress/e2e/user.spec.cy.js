// Para eu executar o cypress, usar o Git bash e o comando (npx cypress open)
/* Commit - 

  "git status" para ver o que foi modificado
  "git add ." Incluir tudo
  "git commit -m Mensagem" Para atulizar e adiconar a mensagem 
  "git push" Enviar arquivos para GitHub - precisa estar na (main)
*/

import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    //nickNameField: ".oxd-input--active", //não teve um atributo unico, foi utulizado esse com 13 posições e chamado a posiçao correspondente
    generacField: ".oxd-input--active", // para poder usar para vários campos, apenas mudando a posição
    submitButton: "[type='submit']",
    selectText: "[tabindex='0']",
  } // utilziar a posição não pe a melhor solição, caso o a posição mude o ideal adicionar identificador para QA

  it.only('User Info Update - Success', () => { //usado only para chamar apenas ess IT
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    //cy.get(selectorsList.myInfoButton).click() //um forma de usar para clicar em um local da paguina
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    cy.get(selectorsList.firstNameField).clear().type('First Name') // Usando clear() para limpar os campos antes de digitar
    cy.get(selectorsList.lastNameField).clear().type('Last Name')
    cy.get(selectorsList.generacField).eq(3).clear().type('Nickname')// Chamado a posicao 4 - O nome colocado dentro do type vai ser preenchido no campo
    cy.get(selectorsList.generacField).eq(4).clear().type('EmplId')
    cy.get(selectorsList.generacField).eq(5).clear().type('Others Id')
    cy.get(selectorsList.selectText).eq(0).click()
    cy.get(':nth-child(6) > span').click()
    cy.get(selectorsList.selectText).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true}) //Chamada para salvar a páguina - O force true dentro do click serve para força o clique mesmo com alguma coisa na frente
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close') //Confirmando que a pagina foi salva
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})
