export class HomePage {
    constructor(){
        this.onlineShopLink = "#onlineshoplink"
    }

    clickTodoListLink(){
        cy.get(this.onlineShopLink).click();
    }
}