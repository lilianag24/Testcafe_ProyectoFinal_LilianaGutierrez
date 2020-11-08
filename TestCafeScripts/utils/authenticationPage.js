import {Selector, t} from 'testcafe';

class authenticationPage{
    constructor(){
        this.pageTitle = Selector('#center_column .page-heading')
        this.newEmail_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.userEmail_input = Selector('#email');
        this.userPassword_input = Selector('#passwd');
        this.signIn_btn = Selector('#SubmitLogin');
        this.forgotPass_link = Selector('[href$="controller=password"]');
    }

    //Login with valid creadentials 
    async login(email, password){
        await t
            .typeText(this.userEmail_input,email)
            .typeText(this.userPassword_input, password)
            .click(this.signIn_btn);
    }
}

export default new authenticationPage();