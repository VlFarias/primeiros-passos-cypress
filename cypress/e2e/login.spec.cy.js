describe('Orange HRM Tests', () => {

  const selectorsList = { //criando um objeto usando {} - Dentro do objeto precisa usar virgula para finalizar cada linha
    usernameField: "[name='username']", // criado esse ojeto para facilitar a manutenção do cod, assim não precisa ficar renomendo
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => { //usando obejto
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')//Usuário incorreto
    cy.get(selectorsList.passwordField).type('test')//Senha incorreto
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

  // Para eu executar o cypress, usar o Git bash e o comando (npx cypress open)

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