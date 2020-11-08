import {Selector} from 'testcafe';

class orderHistoryPage{
    constructor(){
        this.pageTitle = Selector('h1')
        this.backAccount_btn = Selector('a').withText('Back to your account.')
    }
}

export default new orderHistoryPage();