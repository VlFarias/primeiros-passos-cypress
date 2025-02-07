/* 
Para eu executar o cypress, usar o Git bash e o comando (npx cypress open)
cd C:/Users/Home/Desktop/Development/study/primeiros-passos-cypress

Commit - 

  "git status" para ver o que foi modificado
  "git add ." Incluir tudo
  "git commit -m Mensagem" Para atulizar e adiconar a mensagem 
  "git push" Enviar arquivos para GitHub - precisa estar na (main)
*/

import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    wrongCredentialAlert: "[role='alert']",
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardpage()
    menuPage.acessMyInfo()
    
    myInfoPage.fillPersonalDetails('Joao', 'Da', 'Silva')
    myInfoPage.fillEmployeeDetatails('0147','0258','050205')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    /*menuPage.acessPerformance()
    menuPage.acessRecruitment()
    menuPage.acessTime()
    menuPage.acessLeave()
    menuPage.acessPim()
    menuPage.acessAdim()
    menuPage.acessDashboard()
    menuPage.acessDirectory()
    menuPage.acessClaim()
    menuPage.clickOnSearch()
    menuPage.acessHome()
    menuPage.acessMaintenance()*/
  
  })

  /*it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })*/
})
