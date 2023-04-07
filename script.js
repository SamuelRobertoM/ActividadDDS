
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1");
pokemones
 .then(res => {
 return res.json()
 })
 .then(data => {
 console.log(data.name);
 }).catch(error => console.log(error))