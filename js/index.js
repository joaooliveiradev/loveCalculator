var verificarClick = false;

function love(){
    if(verificarClick == false){
        var resultado = Math.floor(Math.random() * 100) + '%';
        fieldResult.value = resultado;
        verificarClick = true;
    } else if (verificarClick == true){
        alert('Clique no botão limpar e preencha os campos novamente para calcular')
    }

    
}



function clean(){
    if(verificarClick == true){
        fieldOne.value = '';
        fieldTwo.value = '';
        fieldResult.value = '';
        verificarClick = false;
    }
}