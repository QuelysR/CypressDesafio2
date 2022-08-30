/// <reference types="cypress" />
describe('Hooks', () => {
    let datosLogin, datosRegistro, numeroRandom;

    before("Before", () => {
        cy.fixture("loginData").then(datos => {
            datosLogin = datos;
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

    //button[contains(text(), 'continue')]//child::div")
})
