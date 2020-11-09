let randomNum = Math.random().toString(36).substr(1,4);
let randomString = Math.random().toString(26).substring(7);

//Se importa como un objeto
let data = {
    //Datos para crear una cuenta válida
    email: 'dummy' + randomNum + '@mailinator.com',
    firstName : "Liliana",
    lastName : "Gutierrez",
    password : "12345",
    pbox : "PO Box 123",
    city : "Los Angeles",
    state : "California",
    zipCode : "62985",
    mobilePhone : "333-999-8888",
    alias : "Mi Casa",
    //Datos para crear una cuenta con datos no válidos
    invalidEmail : "account.com",
    //Datos para iniciar sesión con usuario existente
    email01: 'tester02@gmail.com', 
    password01: 'abc123',
    firstName01: 'Tester',
    lastName01: 'Gutierrez',
    address01: 'Apple Ave.',
    city01: 'Portland',
    state01: 'Oregon',
    zipCode01: '45678',
    newAlias: "Mi Casa " +randomString,
    //Datos para compra de 1 producto
    dressName : 'Printed Dress',
    dressSize : 'M',
    Comment01 : "Prueba para compra de 1 producto",
    //Datos para compra de 2 productos
    blouseName : 'Blouse',
    blouseSize : 'L',
    tshirtName : 'Faded Short Sleeve T-shirts',
    tshirtSize : 'M',
    Comment01 : "Prueba para compra de 2 productos",
    //Datos para búsqueda de productos
    validItem : "Dress",
    invalidItem: "invalid"
}

export {data}