import {Selector} from 'testcafe';

class filtersPage{
    constructor(){
        this.categoryImg = Selector('.cat_desc span');
        this.categoryName = Selector('h1 > span.cat-name');
        this.backHomeLink = Selector('.icon-home');
    }
}

export default new filtersPage();