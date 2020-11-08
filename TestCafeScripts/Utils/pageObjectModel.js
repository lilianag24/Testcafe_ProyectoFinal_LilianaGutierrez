import {Selector} from 'testcafe';

class page{
    constructor (){
        //Header Container Selectors
        this.signIn_link = Selector('a').withText('Sign in');
        this.search_input = Selector('#search_query_top');
        this.search_btn = Selector('#searchbox > button');
        this.women_menuOption = Selector('#block_top_menu > ul').withText('Women');
        this.dresses_menuOption = Selector('#block_top_menu > ul').withText('Dresses');
        this.tshirts_menuOption = Selector('#block_top_menu > ul').withText('T-shirts');

        //Home Page Selectors
        this.homePageSlider = Selector('#homepage-slider');
        this.homePageTabs = Selector('#home-page-tabs');
        this.homePageProductList = Selector('#homefeatured');
        this.homePageItems = Selector('#htmlcontent_home');
        this.homePageFacebookContent = Selector('#facebook_block');
        this.homePageCmsInfo = Selector('#cmsinfo_block');
        this.homePageEditorialInfo = Selector('#editorial_block_center');

        //Create Account Selectors
        this.email_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
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
        this.submitCreate_btn = Selector('#submitAccount');

        //SignIn Selectors
        this.userEmail_input = Selector('#email');
        this.userPassword_input = Selector('#passwd');
        this.submitLogin_btn = Selector('#SubmitLogin');

        //My Account Selectors
        this.oders_link = Selector('a[title="Orders"');
        this.creditSlips_link = Selector('a[title="Credit slips"');
        this.myAddress_link = Selector('a[title="Addresses"');
        this.myInfo_link = Selector('a[title="Information"');
        this.myWishList_link = Selector('a[title="My wishlists"');
        this.home_link = Selector('a[title="Home');

        
    }
}

export default new Page();