import {Selector} from 'testcafe';

class createAccountPage {
    constructor (){
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_form = Selector ('#email');
        this.password_input = Selector('#passwd');
        this.firstName_Address = Selector('#firstname');
        this.lastName_Address = Selector('#lastname');
        this.address_input = Selector('#address1')
        this.city_input = Selector('#city');
        this.state_dropDown = Selector('#uniform-id_state');
        this.stateOption = Selector('#id_state > option')
        this.zipCode_input = Selector('#postcode');
        this.mobilePhone_input = Selector('#phone_mobile');
        this.aliasAddress_input = Selector('#alias');
        this.register_btn = Selector('#submitAccount');
    }
}

export default new createAccountPage();