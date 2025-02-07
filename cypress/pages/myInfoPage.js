class MyInfoPage {
    selectorList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            generacField: ".oxd-input--active",
            submitButton: "[type='submit']",
            genericCombobox: "[tabindex='0']",
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetatails(employeeId, othersId, driversLicense){
        cy.get(this.selectorList().generacField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().generacField).eq(4).clear().type(othersId)
        cy.get(this.selectorList().generacField).eq(5).clear().type(driversLicense)

    }

    fillStatus(){
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(':nth-child(6) > span').click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click({force: true}) 
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }    
}

export default MyInfoPage