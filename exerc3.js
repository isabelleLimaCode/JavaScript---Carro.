


function Carro(marca, modelo) { //objeto
  this.marca = marca;
  this.modelo = modelo;
}

var meucarro = new Carro("fiat","uno");

function carro(){

  let text = "";
  setInterval(function() {
    console.clear();
    text+="."
    console.log (text +"["+ meucarro.marca +"]"+"["+ meucarro.modelo +"]");
}, 1000);
}
carro();


