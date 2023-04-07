
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1");
pokemones
 .then(res => {
 return res.json()
 })
 .then(data => {
    //linea de conflicto
 console.log(data.name);
 //linea de conflicto2
 }).catch(error => console.log(error))