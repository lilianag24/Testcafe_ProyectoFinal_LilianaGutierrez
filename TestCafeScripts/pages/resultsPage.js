import {Selector} from 'testcafe';

class resultsPage{
    constructor(){
        //Selectores para listado de productos
        this.searchTitle = Selector('#center_column > h1 > span.lighter');
        this.itemName = Selector('.product-container a.product-name');
        this.addCart_button = Selector('.product-container a[title="Add to cart"]');
        this.alertError = Selector('p.alert-warning');

        //Selectores para Detalles del Producto
        this.itemName_details = Selector('[itemprop="name"]'); 
        this.itemPrice_details = Selector('#our_price_display');
        this.addCart_detailsButton = Selector('#add_to_cart');
        this.itemQuantity_input = Selector('#quantity_wanted');
        this.itemSize_select = Selector('#group_1');
        this.itemSize_option = Selector('#group_1 > option');

        //Selectores para producto agregado
        this.successMessage = Selector('.layer_cart_product h2');
        this.closeIcon = Selector('#layer_cart .cross');
        this.itemName_layer = Selector('#layer_cart_product_title');
        this.itemTotal_layer = Selector('#layer_cart_product_price');
        this.continueShoppin_button = Selector('[title="Continue shopping"]');
        this.checkout_button = Selector('.button-container [href$="controller=order"]');
    }

}

export default new resultsPage();