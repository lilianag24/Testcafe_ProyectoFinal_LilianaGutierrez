import {Selector} from 'testcafe';

class homePage{
    constructor(){
        this.pageSlider = Selector('#homepage-slider');
        this.popularTab = Selector('[href="#homefeatured"]');
        this.bestSellersTab = Selector('[href="#blockbestsellers"]');
        this.productList = Selector('#homefeatured');
        this.pageItems = Selector('#htmlcontent_home');
        this.facebookSection = Selector('#facebook_block');
        this.cmsInfoSection = Selector('#cmsinfo_block');
        this.editorialInfoSection = Selector('#editorial_block_center');
    }
}

export default new homePage();