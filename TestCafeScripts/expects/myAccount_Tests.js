import Header from '../utils/header.js';
import AuthPage from '../utils/authenticationPage.js';
import CreateAcctPage from '../utils/createAccountPage.js';
import MyAccountPage from '../utils/myAccountPage.js';
import OrderHistoryPage from '../utils/orderHistoryPage.js'
import MyAddressPage from '../utils/myAddressPage.js'
import { data } from '../data/data.js';

fixture('My Account Tests')
    .page('http://automationpractice.com');

test ('Crear una nueva cuenta', async t =>{
    await t
        .maximizeWindow()
        .click(Header.signIn_link)
        .expect(AuthPage.pageTitle.innerText).contains('AUTHENTICATION')
        console.log("Correo: ", data.email)
        console.log("Password; ", data.password)
        console.log("firstName: ", data.firstName)
        console.log("lastName: ", data.lastName)

    await t
        .typeText(AuthPage.newEmail_input, data.email)
        .expect(AuthPage.newEmail_input.value).contains(data.email)
        .click(AuthPage.createAccount_btn)

    await t
        //Validar que el campo de email contenga el valor creado previamente
        .expect(CreateAcctPage.email_form.value).contains(data.email)
        .expect(CreateAcctPage.email_form.hasAttribute('readonly')).notOk()
        //Insertar First name
        .typeText(CreateAcctPage.firstName_input, data.firstName)
        .expect(CreateAcctPage.firstName_input.value).contains(data.firstName)
        //Insertar Last name
        .typeText(CreateAcctPage.lastName_input, data.lastName)
        .expect(CreateAcctPage.lastName_input.value).contains(data.lastName)
        //Insertar Password
        .typeText(CreateAcctPage.password_input, data.password)
        //Insertar Address
        .typeText(CreateAcctPage.address_input, data.pbox)
        .expect(CreateAcctPage.address_input.value).contains(data.pbox)
        //Seleccionar City
        .typeText(CreateAcctPage.city_input, data.city)
        .expect(CreateAcctPage.city_input.value).contains(data.city)
        //Seleccionar State
        .click(CreateAcctPage.state_dropDown)
        .click(CreateAcctPage.stateOption.withText(data.state))
        //Insertar Zip/Postal Code
        .typeText(CreateAcctPage.zipCode_input, data.zipCode)
        .expect(CreateAcctPage.zipCode_input.value).contains(data.zipCode)
        //Insertar Mobile phone
        .typeText(CreateAcctPage.mobilePhone_input, data.mobilePhone)
        .expect(CreateAcctPage.mobilePhone_input.value).contains(data.mobilePhone)
        //Insertar Address Alias
        .typeText(CreateAcctPage.aliasAddress_input, data.alias, {replace: true})
        .expect(CreateAcctPage.aliasAddress_input.value).contains(data.alias)
        //Dar click al boton Register
        .click(CreateAcctPage.register_btn)
        
    await t
        .expect(MyAccountPage.pageTitle.visible).ok()
        .expect(MyAccountPage.pageMessage.innerText).contains('Welcome to your account')
});

test ('Ver la página de Orders History', async t =>{
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
        //Ir a la pagina de Orders History
        .click(MyAccountPage.oders_link)

    await t
        .expect(OrderHistoryPage.pageTitle.innerText).contains('ORDER HISTORY')
        .click(OrderHistoryPage.backAccount_btn)
        .expect(MyAccountPage.pageTitle.visible).ok()
});


test ('Actualizar Mi Dirección', async t =>{
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
        .click(MyAccountPage.myAddress_link)

    await t
        .expect(MyAddressPage.page_title.innerText).contains('MY ADDRESSES')
        .click(MyAddressPage.updateAddress_button)

    await t 
        .expect(MyAddressPage.updateAddress_title.innerText).contains('YOUR ADDRESSES')
        .expect(MyAddressPage.firstName_input.value).contains(data.firstName01)
        .expect(MyAddressPage.lastName_input.value).contains(data.lastName01)

        //Reemplazar el valor de Address Alias con un valor random
        .typeText(MyAddressPage.addressAlias_input, data.newAlias, {replace: true})
        .expect(MyAddressPage.addressAlias_input.value).contains(data.newAlias)

        //Guardar cambios
        .click(MyAddressPage.submitAddres_button)
    
    await t
        //Validar que el Alias de la dirección se cambió correctamente
        .expect(MyAddressPage.addressAlias_title.innerText).eql(data.newAlias.toUpperCase())
        console.log(data.newAlias.toUpperCase())
});