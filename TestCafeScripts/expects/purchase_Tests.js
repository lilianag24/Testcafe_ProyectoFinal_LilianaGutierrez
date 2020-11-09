import Header from '../pages/header.js';
import AuthPage from '../pages/authenticationPage.js';
import MyAccountPage from '../pages/myAccountPage.js';
import ResultsPage from '../pages/resultsPage.js';
import ShoppingPage from '../pages/shoppingCartPage.js';
import shoppingCartPage from '../pages/shoppingCartPage.js';
import { data } from '../data/data.js';

fixture('Pruebas - Compra de Productos')
    .page('http://automationpractice.com');

test ('TC_PURCHASE01 - Comprar un producto (Vestido) - Payment Bank wire', async t =>{
    await t
        .maximizeWindow()
        console.log("Correo: ", data.email01)
        console.log("Password: ", data.password01)

    await AuthPage.login(data.email01, data.password01);
    await t
        .expect(MyAccountPage.pageTitle.visible).ok()
        .expect(MyAccountPage.pageMessage.innerText).contains('Welcome to your account')

    await Header.searchProduct('Dress');
    
    await t
        .click(ResultsPage.itemName.withText(data.dressName))
        
    await t
        .expect(ResultsPage.itemName_details.innerText).eql(data.dressName)
        let price = await ResultsPage.itemPrice_details.innerText;
        console.log("Precio Total: " +price)
    await t
        .click(ResultsPage.itemSize_select)
        .click(ResultsPage.itemSize_option.withText(data.dressSize))
        .click(ResultsPage.addCart_detailsButton)

    await t
        .expect(ResultsPage.successMessage.innerText).contains('Product successfully added to your shopping cart')
        .expect(ResultsPage.itemName_layer.innerText).contains(data.dressName)
        .expect(ResultsPage.itemTotal_layer.innerText).eql(price)
        .click(ResultsPage.checkout_button);

    await t
        .expect(ShoppingPage.section_title.innerText).contains('SHOPPING-CART SUMMARY')
        .expect(ShoppingPage.productQuantity.innerText).contains('1')
        .expect(ShoppingPage.totalPrice.innerText).eql(price)
        .click(ShoppingPage.proceedCheckout1_button)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('ADDRESSES')
        .typeText(ShoppingPage.comments_textarea, data.Comment01)
        .expect(ShoppingPage.comments_textarea.value).eql(data.Comment01)
        .click(ShoppingPage.proceedCheckout2_button)

    await t
        .expect(ShoppingPage.shipping_title.innerText).contains('SHIPPING')
        .click(ShoppingPage.termsOfService_checkbox)
        .expect(ShoppingPage.termsOfService_checkbox.checked).ok()
        .click(ShoppingPage.proceedCheckout3_button)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')
        let finalPrice = await ShoppingPage.finalPrice.innerText;
    await t
        .click(ShoppingPage.payBank_link)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('ORDER SUMMARY')
        .expect(ShoppingPage.payment_title.innerText).contains('BANK-WIRE PAYMENT.')
        .expect(ShoppingPage.totalAmount.innerText).contains(finalPrice)
        .click(ShoppingPage.confirmOder_button)       
        
    await t
        .expect(ShoppingPage.section_title.innerText).contains('ORDER CONFIRMATION')
        .expect(ShoppingPage.bankSuccessMessage.innerText).contains('Your order on My Store is complete')
        .click(shoppingCartPage.backToOders_button)
});

test ('TC_PURCHASE02 - Comprar 2 productos (Camiseta y Blusa) - Payment by check', async t =>{
    await t
        .maximizeWindow()
        .click(Header.signIn_link)
        .expect(AuthPage.pageTitle.innerText).contains('AUTHENTICATION')
        console.log("Correo: ", data.email01)
        console.log("Password: ", data.password01)

    await AuthPage.login(data.email01, data.password01);
    await t
        .expect(MyAccountPage.pageTitle.visible).ok()
        .expect(MyAccountPage.pageMessage.innerText).contains('Welcome to your account')

    await Header.searchProduct("blouse");
    await t
        .click(ResultsPage.itemName.withText(data.blouseName))
        
    await t
        .expect(ResultsPage.itemName_details.innerText).eql(data.blouseName)
        let price1 = await ResultsPage.itemPrice_details.innerText;
        console.log("Precio Total: " +price1)
    await t
        .click(ResultsPage.itemSize_select)
        .click(ResultsPage.itemSize_option.withText(data.blouseSize))
        .click(ResultsPage.addCart_detailsButton)

    await t
        .expect(ResultsPage.successMessage.innerText).contains('Product successfully added to your shopping cart')
        .expect(ResultsPage.itemName_layer.innerText).contains(data.blouseName)
        .expect(ResultsPage.itemTotal_layer.innerText).eql(price1)
        .click(ResultsPage.closeIcon);

    //Buscar segundo producto
    await Header.searchProduct("t-shirt");
    await t
        .click(ResultsPage.itemName.withText(data.tshirtName))
        
    await t
        .expect(ResultsPage.itemName_details.innerText).eql(data.tshirtName)
        let price2 = await ResultsPage.itemPrice_details.innerText;
        console.log("Precio Total: " +price2)
    await t
        .click(ResultsPage.itemSize_select)
        .click(ResultsPage.itemSize_option.withText(data.tshirtSize))
        .click(ResultsPage.addCart_detailsButton)

    await t
        .expect(ResultsPage.successMessage.innerText).contains('Product successfully added to your shopping cart')
        .expect(ResultsPage.itemName_layer.innerText).contains(data.tshirtName)
        .expect(ResultsPage.itemTotal_layer.innerText).eql(price2)
        .click(ResultsPage.checkout_button);

    await t
        .expect(ShoppingPage.section_title.innerText).contains('SHOPPING-CART SUMMARY')
        .expect(ShoppingPage.productQuantity.innerText).contains('2')
        .click(ShoppingPage.proceedCheckout1_button)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('ADDRESSES')
        .typeText(ShoppingPage.comments_textarea, data.Comment01)
        .expect(ShoppingPage.comments_textarea.value).eql(data.Comment01)
        .click(ShoppingPage.proceedCheckout2_button)

    await t
        .expect(ShoppingPage.shipping_title.innerText).contains('SHIPPING')
        .click(ShoppingPage.termsOfService_checkbox)
        .expect(ShoppingPage.termsOfService_checkbox.checked).ok()
        .click(ShoppingPage.proceedCheckout3_button)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')
        let finalPrice = await ShoppingPage.finalPrice.innerText;
    await t
        .click(ShoppingPage.payCheck_link)

    await t
        .expect(ShoppingPage.section_title.innerText).contains('ORDER SUMMARY')
        .expect(ShoppingPage.payment_title.innerText).contains('CHECK PAYMENT')
        .expect(ShoppingPage.totalAmount.innerText).contains(finalPrice)
        .click(ShoppingPage.confirmOder_button)       
        
    await t
        .expect(ShoppingPage.section_title.innerText).contains('ORDER CONFIRMATION')
        .expect(ShoppingPage.checkSuccessMessage.innerText).contains('Your order on My Store is complete')
        .click(shoppingCartPage.backToOders_button)
})