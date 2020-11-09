import {Selector, t} from 'testcafe';
import ResultsPage from '../pages/resultsPage.js';

class pageHeader {
    constructor(){
        this.signIn_link = Selector('.login');
        this.contactUs_link = Selector('#contact-link');
        this.header_logo = Selector('#header_logo img');
        this.search_input = Selector('#search_query_top');
        this.submitSearch_btn = Selector('#searchbox > button');
        this.topMenu = Selector('#block_top_menu');
        this.women_menuOption = Selector('a[title="Women"]');
        this.topMenuOption = Selector('#block_top_menu > ul > li');
        this.dresses_menuOption = Selector('#block_top_menu > ul > li:nth-of-type(2');
        this.tshirts_menuOption = Selector('a[title="T-shirts"]');
    }

    //Buscar un producto
    async searchProduct(productName){
        await t
            .typeText(this.search_input, productName, {replace:true})
            .click(this.submitSearch_btn)
        await t
            .expect(ResultsPage.searchTitle.innerText).contains(productName.toUpperCase())
            const itemsCount = ResultsPage.itemName.count;
        await t
            .expect(itemsCount).gt(0)
    }
}

export default new pageHeader();