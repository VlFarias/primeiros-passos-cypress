class MenuPage {
    selectorList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            daschboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            serchInput: "[placeholder='Search']",
            homeButton: "[href='https://www.orangehrm.com/']",
        }

        return selectors
    }

    acessMyInfo(){
        cy.get(this.selectorList().myInfoButton).click()
    }

    acessPerformance(){
        cy.get(this.selectorList().performanceButton).click()
    }

    acessRecruitment(){
        cy.get(this.selectorList().recruitmentButton).click()
    }

    acessTime(){
        cy.get(this.selectorList().timeButton).click()
    }

    acessLeave(){
        cy.get(this.selectorList().leaveButton).click()
    }

    acessPim(){
        cy.get(this.selectorList().pimButton).click()
    }

    acessAdim(){
        cy.get(this.selectorList().adminButton).click()
    }

    acessDashboard(){
        cy.get(this.selectorList().daschboardButton).click()
    }

    acessDirectory(){
        cy.get(this.selectorList().directoryButton).click()
    }

    acessMaintenance(){
        cy.get(this.selectorList().maintenanceButton).click()
    }

    acessClaim(){
        cy.get(this.selectorList().claimButton).click()
    }

    clickOnSearch(){
        cy.get(this.selectorList().serchInput).click()
    }

    acessHome(){
        cy.get(this.selectorList().homeButton).click()
    }

}

export default MenuPage