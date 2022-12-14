/// <reference types="cypress" />
describe('Hooks', () => {
    let datosLogin, datosTareas

    before("Before", () => {
        cy.fixture("loginData").then(datos => {
            datosLogin = datos;
        })
        cy.fixture("tareas").then(datos => {
            datosTareas = datos;
        })
    })
    beforeEach("Before each", () => {
        cy.visit("/")
        cy.get("#registertoggle").dblclick();
        cy.get("#user").type(datosLogin.usuario);
        cy.get("#pass").type(datosLogin.contraseña);
        cy.xpath("//button[contains(text(), 'Log in')]").click();
        cy.get('#todolistlink').click()
    })


    it('Crear Tareas', () => {
        cy.get('#task').type(datosTareas.tarea1).type('{enter}')
        cy.get('#task').type(datosTareas.tarea2).type('{enter}')
        cy.get('#task').type(datosTareas.tarea3).type('{enter}')
        cy.get('#task').type(datosTareas.tarea4).type('{enter}')
        cy.get('#task').type(datosTareas.tarea5).type('{enter}')
    });

    it('Validar si existen botones', () => {
        cy.get('#all').should('exist');
        cy.get('#completed').should('exist');
        cy.get('#active').should('exist');
        cy.get('#removeAll').should('exist');
    });

    it('Crear tarea y Completarla', () => {
        let tarea1 = 'tarea1'
        cy.get('#task').type(`${tarea1}{enter}`)
        cy.get('p').contains(`${tarea1}`).click()
        cy.xpath("//p[contains(text(), 'tarea1')]//following-sibling::button").click()
    });

      
    it('Crear tarea y eliminarla', () => {
        let tarea1 = 'tarea1'
        cy.get('#task').type(`${tarea1}{enter}`)
        cy.xpath("//p[contains(text(), 'tarea1')]//following-sibling::button").click()
    });

    after("After", () => {
        cy.log("After")
    })


})
