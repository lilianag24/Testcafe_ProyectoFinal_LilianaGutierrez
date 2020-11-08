import {Selector} from 'testcafe';

class myAccountPage{
    constructor(){
        this.pageTitle = Selector('h1.page-heading');
        this.pageMessage = Selector('p.info-account')
        this.oders_link = Selector('a[title="Orders"]');
        this.creditSlips_link = Selector('a[title="Credit slips"]');
        this.myAddress_link = Selector('a[title="Addresses"]');
        this.myPersonalInfo_link = Selector('a[title="Information"]');
        this.myWishList_link = Selector('a[title="My wishlists"]');
        this.home_link = Selector('a[title="Home"]');
    }
}

export default new myAccountPage();