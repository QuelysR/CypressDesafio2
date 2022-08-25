/// <reference types="cypress" />
describe('Hooks', () => {
    let datosLogin, datosRegistro, numeroRandom;

    before("Before", () => {
        cy.fixture("loginData").then(datos => {
            datosLogin = datos;
        })
        cy.fixture("registrodata").then(datos => {
            datosRegistro = datos;
        })
        numeroRandom = Math.floor(Math.random() * 1000)
    })
    beforeEach("Before each", () => {
        cy.visit("/")
    })


    it("Registro de Usuario", () =>{
        cy.get("#user").type(datosRegistro.PrimerUsuario.usuario + numeroRandom);
        cy.get("#pass").type(datosRegistro.PrimerUsuario.contraseña);
        cy.get(`[value='${datosRegistro.PrimerUsuario.genero}']`).check({force:true})
        cy.xpath("//button[contains(text(), 'Register')]").click();
        cy.get(`[id*='user_${datosRegistro.PrimerUsuario.usuario + numeroRandom}_']`).should("be.visible")
    })

    it('Ingresar al sistema', () => {
        cy.get("#registertoggle").dblclick();
        cy.get("#user").type(datosLogin.usuario + numeroRandom);
        cy.get("#pass").type(datosLogin.contraseña);
        cy.xpath("//button[contains(text(), 'Log in')]").click();
        cy.get(`[id*='user_${datosLogin.usuario + numeroRandom}_']`).should("be.visible")
        cy.get('#todolistlink').click()
        let tarea1 = 'tarea1'
        let tarea2 = 'tarea2'
        let tarea3 = 'tarea3'
        let tarea4 = 'tarea4'
        let tarea5 = 'tarea5'
        cy.get('#task').type(`${tarea1}{enter}`)
        cy.get('#task').type(`${tarea2}{enter}`)
        cy.get('#task').type(`${tarea3}{enter}`)
        cy.get('#task').type(`${tarea4}{enter}`)
        cy.get('#task').type(`${tarea5}{enter}`)
        cy.get('#all').should('exist');
        cy.get('#completed').should('exist');
        cy.get('#active').should('exist');
        cy.get('#removeAll').should('exist');
        cy.get('p').contains(`${tarea1}`).click()
        cy.xpath("//p[contains(text(), 'tarea1')]//following-sibling::button").click()
        cy.xpath("//p[contains(text(), 'tarea2')]//following-sibling::button").click()       
    });
    after("After", () => {
        cy.log("After")
    })
})
