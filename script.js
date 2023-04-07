
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1");
pokemones
 .then(res => {
 return res.json()
 })
 .then(data => {
 //linea de conflicto2
 console.log(data.name);
 //linea de conflicto
 }).catch(error => console.log(error))