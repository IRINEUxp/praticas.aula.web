function mostrarMapa(){
    let estado = document.getElementById('estados').value;

    if (estado === "brasil"){
        let caminho = "mapas/" + estado +".png";
        let imagem = document.getElementById('mapa').src = caminho;    
    }
    else{
        let caminho = "mapas/" + estado +".gif";
        let imagem = document.getElementById('mapa').src = caminho;
    }
    
}