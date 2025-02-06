describe('Orange HRM Tests', () => {
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

  })

})