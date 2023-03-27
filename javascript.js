function gerarTabuada(){
    let txtnumero = document.getElementById('txtnumero');

    let tabuada = document.getElementById('tabuada');

    if(txtnumero.value.length == 0){
        
        alert('Por favor, digite um número!');

    }else{
        
        let numero = Number(txtnumero.value);

        tabuada.innerHTML = '';

        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option');
            item.text = `${numero} x ${i} = ${numero*i}`;
            item.value = `tab${i}`;
            tabuada.appendChild(item);
        }
    }
}