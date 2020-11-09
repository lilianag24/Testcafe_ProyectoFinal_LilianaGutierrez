# Testcafe_ProyectoFinal_LilianaGutierrez

Este respositorio contiene el proyecto final del Curso de “TestCafe – QA Minds” realizado en octubre de 2020. 

### Herramientas utilizadas 
- Testcafe
- Node.js
- JavaScript
- Visual Studio Code
- Github 
- Windows 

TestCafe es una herramienta basada en Node.JS, fácil de configurar y que soporta JavaScript y TypeScript. 

### Pre-requisitos para la instalación de TestCafe en Windows: 
Instalar Node.JS desde el sitio oficial [Node.js](https://nodejs.org/)
Verificar que la instalación fue correcta ejecutando desde la terminal el comando: 
```sh
$ node --version
```
Verificar que npm esta instalado utilizando el comando: 
```sh
$ npm --version 
```

### Instalación de Testcafe: 
Desde la terminal ejecutar el comando:
```sh
$ npm install -g testcafe
```
Verificar que la instalación fue correcta utilizando el comando:
```sh
$ testcafe --version
``` 

## Contenido del proyecto:
                
+ e-Commerce_TestPlan_v1.1.docx (Plan de Pruebas)
+ TC_eCommerce_v1.0.xlsx (Archivos de Casos de Prueba)
+ Bugs_report_eCommerce_v1.0.xlsx (Reporte de Defectos)
+ Folder TestCafeScripts (Scripts de Testcafe)

### Documentación sobre el proyecto

Los scripts de Testcafe se realizaron utilizando el patrón de diseño de **Page Model**

#### ¿Que es Page Model?
Page Model es un patrón de automatización de pruebas que permite crear una abstracción de la página(s) a probar y usarla en los tests para hacer referencia a los elementos de la página.
#### ¿Por qué utilizar Page Model?
Page Model permite mantener todos los selectores en un lugar. Sí la página web llega a cambiar, solo se tendrá que modificar el modelo de página y no cada uno de los archivos de pruebas.

### ¿Cómo se crea un Page Model?
Paso 1: declarar una clase page model para cada página
```javascript
class Page {
    constructor () {
    }
}

export default new Page();
```
Paso 2: agregar los elementos de la página al Page Model asignándoles un selector
```javascript
import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.nameInput = Selector('#developer-name');
    }
}

export default new Page();
```
Paso 3: Escribir los archivos de pruebas utilizando el page Model
Debe importarse la instancia del page Model en el archivo de pruebas. Esto permite, utilizar las propiedades para identificar los elementos
```javascript
import page from './page-model';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});
```
### Cómo correr los scripts
Ejecutar alguno de los siguientes comando desde la Terminal en Visual Studio o la consola de Windows. Nota: * los comandos deben ejecutarse dentro del folder TestCafeScripts\ *

Chrome
```sh
testcafe chrome expects\ --reporter html:reports/AllModules_Report_Chrome_20201108.html 
```
Firefox
```sh
testcafe chrome expects\ --reporter html:reports/AllModules_Report_Firefox_20201108.html 
```
