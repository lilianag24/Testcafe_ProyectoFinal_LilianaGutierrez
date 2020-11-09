import Header from '../pages/header.js';
import ResultsPage from '../pages/resultsPage.js';
import { data } from '../data/data.js';

fixture('Pruebas - Búsqueda de Productos')
    .page('http://automationpractice.com');

test ('TC_SEARCH01 - Búsqueda de producto válido', async t =>{
    await t
        .maximizeWindow()
        .typeText(Header.search_input, data.validItem, {replace:true})
        .click(Header.submitSearch_btn)
    await t
        .expect(ResultsPage.searchTitle.innerText).contains(data.validItem.toUpperCase())
        const itemsCount = ResultsPage.itemName.count;
    await t
        .expect(itemsCount).gt(0)
    
});

test ('TC_SEARCH02 - Búsqueda de producto NO existente', async t =>{
    await t
        .maximizeWindow()
        .typeText(Header.search_input, data.invalidItem, {replace:true})
        .click(Header.submitSearch_btn)
    await t 
        .expect(ResultsPage.alertError.innerText).contains('No results were found for your search')
        const itemsCount = ResultsPage.itemName.count;
    await t
        .expect(itemsCount).eql(0)
});