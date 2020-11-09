import PageHeader from '../pages/header.js';
import HomePage from '../pages/homePage.js';
import FiltersPage from '../pages/filtersPage.js';

fixture('Pruebas - Home Page')
    .page('http://automationpractice.com');
 
    test ('TC_HOME01 - Validar los elementos en la pagina de Home', async t =>{
        await t
            .maximizeWindow()
            .expect(PageHeader.contactUs_link.exists).ok('Home Page - El link de "Contact us" no fue mostrado')
            .expect(PageHeader.signIn_link.exists).ok('Home Page - El link de "Sign in" no fue mostrado')
            .expect(PageHeader.header_logo.exists).ok('Home Page - El logo de la página no fue mostrado')
            .expect(PageHeader.search_input.exists).ok('Home Page - El campo de búsqueda de productos no fue mostrado')
            .expect(PageHeader.submitSearch_btn.exists).ok('Home Page - El botón para la búsqueda de productos no fue mostrado')
            .expect(PageHeader.topMenu.exists).ok('Home Page - El menú superior no fue mostrado')
            .expect(HomePage.pageSlider.exists).ok('Home Page - La sección de page slider no fue mostrada')
            .expect(HomePage.productList.exists).ok('Home Page - La sección del listado de productos no fue mostrada')
            .expect(HomePage.facebookSection.exists).ok('Home Page - La sección de Facebook no fue mostrada')
            .expect(HomePage.cmsInfoSection.exists).ok('Home Page - La sección de CMS Info no fue mostrada')
            .expect(HomePage.editorialInfoSection.exists).ok('Home Page - La sección de information de Editorial no fue mostrada')
    });

    test ('TC_HOME02 - Validar que las opciones del menú redireccionen a la página correcta', async t =>{
        await t
            .maximizeWindow()
            .click(PageHeader.topMenuOption.nth(0))
            .expect(FiltersPage.categoryImg.innerText).eql('Women')
            .click(FiltersPage.backHomeLink)
        
        await t
            .click(PageHeader.topMenuOption.nth(1))
            .expect(FiltersPage.categoryImg.innerText).eql('Dresses')
            .click(FiltersPage.backHomeLink)

        await t
            .click(PageHeader.topMenuOption.nth(2))
            .expect(FiltersPage.categoryImg.innerText).eql('T-shirts')
            .click(FiltersPage.backHomeLink)
    });
