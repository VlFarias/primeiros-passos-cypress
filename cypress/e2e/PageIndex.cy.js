import userData from '../fixtures/user-data.json'

describe('Page Test', () => {

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
    generacField: ".oxd-input--active",
    submitButton: "[type='submit']",
    selectText: "[tabindex='0']",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
    cy.get(selectorsList.firstNameField).clear().type('First Name')
    cy.get(selectorsList.lastNameField).clear().type('Last Name')
    cy.get(selectorsList.generacField).eq(3).clear().type('Nickname')
    cy.get(selectorsList.generacField).eq(4).clear().type('EmplId')
    cy.get(selectorsList.generacField).eq(5).clear().type('Others Id')
    cy.get(selectorsList.selectText).eq(0).click()
    cy.get(':nth-child(6) > span').click()
    cy.get(selectorsList.selectText).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})
