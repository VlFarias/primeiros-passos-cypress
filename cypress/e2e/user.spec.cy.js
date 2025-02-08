 
//cd C:/Users/Home/Desktop/Development/study/primeiros-passos-cypress

import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInfoPage.fillEmployeeDetatails(chance.age(),chance.age(),chance.age())
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

   /* menuPage.acessPerformance()
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
})
