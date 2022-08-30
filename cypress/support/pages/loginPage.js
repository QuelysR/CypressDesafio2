export class LoginPage {

    constructor(){
        this.usernameInput = "#user";
        this.passwordInput = "#pass";
        this.loginButton = "#submitForm"
    }

    login(usuario, contraseña){
        this.escribirUsuario(usuario)
        this.escribirContraseña(contraseña)
        this.clickLoginButon()
    }
}