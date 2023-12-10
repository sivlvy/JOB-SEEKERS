import { getCurrentProducts } from '../../services/food-api';

import {onAddButtonClick} from '../../home-content/main-products/main-projects'

function createCartMarkup(products){
   return products.map(({name}) => `<div>${name}</div>`)
}
