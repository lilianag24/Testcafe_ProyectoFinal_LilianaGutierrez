import {Selector} from 'testcafe';

class shoppingCartPage{
    constructor(){
        this.section_title = Selector('#center_column > h1');
        this.productQuantity = Selector('#summary_products_quantity');
        this.totalPrice = Selector('#total_product'); 
        this.proceedCheckout1_button = Selector('[href$="controller=order&step=1"]');
        
        //Selectores para Delivery Address
        this.comments_textarea = Selector('#ordermsg > textarea');
        this.proceedCheckout2_button = Selector('[name="processAddress"]');

        //Selectores para Shipping 
        this.shipping_title = Selector('#carrier_area > h1');
        this.termsOfService_checkbox = Selector('#cgv');
        this.proceedCheckout3_button = Selector('[name="processCarrier"]');

        //Selectores para Payment Method
        this.payBank_link = Selector('a[title="Pay by bank wire"]');
        this.payCheck_link = Selector('a[title="Pay by check."]');
        this.finalPrice = Selector('#total_price_container');

        //Selectores para Order Summary
        this.payment_title = Selector('.page-subheading');
        this.totalAmount = Selector('#amount');
        this.confirmOder_button = Selector('#cart_navigation > button');

        //Selectores para Order Confirmation 
        this.bankSuccessMessage = Selector('#center_column > div > p > strong');
        this.checkSuccessMessage = Selector('#center_column > p.alert.alert-success');
        this.backToOders_button = Selector('[href$="controller=history"]');
    }
}

export default new shoppingCartPage();