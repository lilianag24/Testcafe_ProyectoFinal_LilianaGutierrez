import {Selector} from 'testcafe';

class myAddressPage{
    constructor(){
        //Selectores MyAddress
        this.page_title = Selector('h1.page-heading');
        this.addressAlias_title = Selector('h3.page-subheading');
        this.updateAddress_button = Selector('a[title="Update"]');
        this.deleteAddress_button = Selector('a[title="Delete"]');
        this.addAddress_button = Selector('a[title="Add an address"]');
        this.backAccount_button = Selector('[href$="controller=my-account"]');

        //Selectores Update Address
        this.updateAddress_title = Selector('h1.page-subheading');
        this.firstName_input = Selector('#firstname');
        this.lastName_input = Selector('#lastname');
        this.addressAlias_input = Selector('#alias');
        this.submitAddres_button = Selector('#submitAddress');
    }
}

export default new myAddressPage();