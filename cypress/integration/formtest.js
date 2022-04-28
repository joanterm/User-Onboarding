// Check for form validation if an input is left empty
describe("App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/")
    })
    const firstNameInput = () => cy.get("input[name=first_name]")
    const lastNameInput = () => cy.get("input[name=last_name]")
    const emailInput = () => cy.get("input[name=email]")
    const passwordInput = () => cy.get("input[name=password]")
    const acceptAgreementInput = () => cy.get("input[name=accept_agreement]")
    const submitButton = () => cy.get("input[type=submit]")

    it("Sanity check", () => {
        expect(1+2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) //passing test bc they are not equal ===
        expect({}).to.eql({}) // passing becasue eql represents ==
    })
    it("Checks if given element exists", () => {
        firstNameInput().should("exist")
        lastNameInput().should("exist")
        emailInput().should("exist")
        passwordInput().should("exist")
        acceptAgreementInput().should("exist")
        submitButton().should("exist")
    })
    it("Submit button can submit form", () => {
        submitButton().should("be.disabled")
        firstNameInput().type("Joanna")
        lastNameInput().type("T")
        emailInput().type("email@email.com")
        passwordInput().type("1234")
        acceptAgreementInput().type("false")
        cy.contains("Submit")
    })
    it("Checks if input is left empty", () => {
        firstNameInput()
        .should("have.value", "")
        .type("Joanna")
        .should("have.value", "Joanna")

        lastNameInput()
        .should("have.value", "")
        .type("T")
        .should("have.value", "T")

        emailInput()
        .should("have.value", "")
        .type("email@email.com")
        .should("have.value", "email@email.com")

        passwordInput()
        .should("have.value", "")
        .type("1234")
        .should("have.value", "1234")
    })
})
 