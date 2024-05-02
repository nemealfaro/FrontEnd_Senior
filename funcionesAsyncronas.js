//URL del servicio a consumir
const url = 'https://dog.ceo/api/breeds/image/random'

fetch(url)
.then(response => response.json())
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err);
});