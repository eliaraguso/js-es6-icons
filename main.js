// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

const colors = {
    food: "red",
    animal: "green",
    beverage: "yellow"
}


// FUNZIONI


// argomenti: array delle icon e il node html in cui stampare le nostre icone
const printIcons = (arr, container) => {
    // ciclo su ogni icona e compongo il markup html da iniettare
arr.forEach((element) => {

    // attrraverso la destrutturazione tirop fuori le proprietà dall'oggetto sottoforma di variabili
    const {name, family, prefix, color} = element;

    container.innerHTML += 
    `<div class="card">
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="cardText">${name}</div>
    </div>`
  }
  );
}

// PROGRAMMA PRINCIPALE

// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//   Seleziono il contenitore di icone
const containerIcons = document.getElementById("icons");


// Coloriamo le icone per tipo
const iconsColored = icons.map(
    (element) => {
        return {
            name: element.name,
            family : element.family,
            prefix : element.prefix,
            category : element.category,
            color: colors[element.category]
        };
    }
);

console.log(iconsColored);
printIcons(iconsColored, containerIcons); 


//   Milestone 3
//   Creiamo una select con i tipi di icone e usiamola per filtrare le icone
//   Creo una option per ogni categoria
// const iconCategories = [];

// icons.forEach(
//     (elm) => {
//         if (iconCategories.includes(elm.category) == false) {
//             iconCategories.push(elm.category);

//         }        
//     }
// );


