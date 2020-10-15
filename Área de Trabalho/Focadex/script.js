noturno = false;

function alterar_modo(){
    if(noturno){
        modo_diurno();
        noturno = false;
    } else{
        modo_noturno();
        noturno = true;
    }
}

function modo_noturno(){
    icone = document.getElementById("dark-mode");
    icone.src = "./images/lua-2.png";

    document.body.style.backgroundColor = "#36393E";
    menu = document.getElementsByClassName("cor-texto");
    for(i = 0; i < menu.length; i++){
        if(i == 1){
            menu[i].style.color = "rgb(168, 168, 168)";
        } else
            menu[i].style.color = "white";
    }
    document.getElementsByClassName("nome-dev")[0].style.color = "rgb(168, 168, 168)";
    document.getElementsByClassName("pesquisa")[0].style.filter = "invert(1)";
    estrelas = document.getElementsByClassName("favorito");
    for(i = 0; i < estrelas.length; i++){
        estrelas[i].style.filter = "invert(1)";
    }
}

function modo_diurno(){
    icone = document.getElementById("dark-mode");
    icone.src = "./images/lua-1.png";

    document.body.style.backgroundColor = "white";

    menu = document.getElementsByClassName("cor-texto");
    for(i = 0; i < menu.length; i++){
        if(i == 1){
            menu[i].style.color = "rgb(204, 0, 0)";
        } else
            menu[i].style.color = "black";
    }
    document.getElementsByClassName("nome-dev")[0].style.color = "rgb(204, 0, 0)";
    document.getElementsByClassName("pesquisa")[0].style.filter = "invert(0)";
    estrelas = document.getElementsByClassName("favorito");
    for(i = 0; i < estrelas.length; i++){
        estrelas[i].style.filter = "invert(0)";
    }
    
}

function acende_estrela(i){
    id = "estrela"+i.toString();
    estrela = document.getElementById(id);
    estrela.src = "./images/estrela-2.png";
}

function apaga_estrela(i){
    id = "estrela"+i.toString();
    estrela = document.getElementById(id);
    estrela.src = "./images/estrela-1.png";
}

estados = [false, false, false, false, false, false]

function favoritar(i){
    if(estados[i]){
        estados[i] = false;
        apaga_estrela(i);
    } else{
        estados[i] = true;
        acende_estrela(i);
    }
}