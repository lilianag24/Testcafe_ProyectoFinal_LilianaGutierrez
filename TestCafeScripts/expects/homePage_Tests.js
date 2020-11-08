import PageHeader from '../utils/header.js';
import HomePage from '../utils/homePage.js';
import FiltersPage from '../utils/filtersPage.js';

fixture('Pruebas Home Page')
    .page('http://automationpractice.com');
 
    test ('Validar los elementos en la pagina de Home', async t =>{
        await t
            .maximizeWindow()
            .expect(PageHeader.contactUs_link.exists).ok('Home Page - Contact us link not displayed')
            .expect(PageHeader.signIn_link.exists).ok('Home Page - Sign in link not displayed')
            .expect(PageHeader.header_logo.exists).ok('Home Page - Page Logo not displayed')
            .expect(PageHeader.search_input.exists).ok('Home Page - Search Button not displayed')
            .expect(PageHeader.submitSearch_btn.exists).ok('Home Page - Search Button not displayed')
            .expect(PageHeader.topMenu.exists).ok('Home Page - Top Menu not displayed')
            .expect(HomePage.pageSlider.exists).ok('Home Page - Page slider section not displayed')
            .expect(HomePage.productList.exists).ok('Home Page - Product List section not displayed')
            .expect(HomePage.facebookSection.exists).ok('Home Page - Facebook section not displayed')
            .expect(HomePage.cmsInfoSection.exists).ok('Home Page - CMS Info section not displayed')
            .expect(HomePage.editorialInfoSection.exists).ok('Home Page - Editorial Info not displayed')
    });

    test ('Validar que las opciones de menú lleven a la pantalla correcta', async t =>{
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
