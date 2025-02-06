// Para eu executar o cypress, usar o Git bash e o comando (npx cypress open)
/* Commit - 

  "git status" para ver o que foi modificado
  "git add ." Incluir tudo
  "git commit -m Mensagem" Para atulizar e adiconar a mensagem 
  "git push" Enviar arquivos para GitHub - precisa estar na (main)
*/

import userData from '../fixtures/user-data.json' // importação do json

describe('Orange HRM Tests', () => {

  const selectorsList = { //criando um objeto usando {} - Dentro do objeto precisa usar virgula para finalizar cada linha
    usernameField: "[name='username']", // criado esse ojeto para facilitar a manutenção do cod, assim não precisa ficar renomendo
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module", // Foi substituida por dashboradGrid (Houve problema com a busca pelo nome)
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  /*
  const userData = { //Obejto passado para o fixture
    userSuccess:{
      username: 'Admin',
      password: 'admin123'
    }, //precisa de virgula

    userFail:{
      username: 'Test',
      password: 'teste123'
    }
  }*/

  it('Login - Success', () => { //usando obejto
    cy.visit('/auth/login') // deixando URL base usando a configuração no cyoress.config.json
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)//Usuário incorreto
    cy.get(selectorsList.passwordField).type(userData.userFail.password)//Senha incorreto
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

/*
  it('Login - Success', () => { //adicionado SKIP (it.skip) para pular o primeiro teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //Paguina de teste
    cy.get("[name='username']").type('Admin') // local de teste, colocado o .type
    cy.get("[name='password']").type('admin123')// local de teste, colocado o .type
    cy.get("[type='submit']").click() // Botão adicionado o click
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //Esse comando confere se estavamos direcioandos para a pagina certa
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')//Usuário incorreto
    cy.get("[name='password']").type('test')//Senha incorreto
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")

  }) */

})