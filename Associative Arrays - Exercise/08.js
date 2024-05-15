function travelDestination(data) {
    let destinations = {};
 
    for (let i = 0; i < data.length; i++) {
     let [country, town, price] = data[i].split(' > ').filter(e => e !== '');
     price = +price;
     town = town[0].toUpperCase() + town.slice(1);
 
     if (!destinations.hasOwnProperty(country)) {
         destinations[country] = {}
     }
 
     if (!destinations[country].hasOwnProperty(town)) {
         destinations[country][town] = price;
     }
     let oldPrice = destinations[country][town];
 
     if (oldPrice > price) {
         destinations[country][town] = price;
     }
   }
   let orderedCountries = [...Object.keys(destinations)].sort((a, b) => a.localeCompare(b));
   let result = '';
 
   for (country of orderedCountries) {
     result += country + ' -> ';
     let sortedPrice = [...Object.keys(destinations[country])].sort((a, b) => cost(a, b, destinations, country));
 
     for (let town of sortedPrice) {
         result += `${town} -> ${destinations[country][town]} `;
     }
     result += '\n';
   }
   console.log(result);
 
   function cost(townOne, townTwo, destination, country) {
     let priceOne = destination[country][townOne];
     let priceTwo = destination[country][townTwo];
 
     return priceOne - priceTwo;
   }
 }