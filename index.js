//Crie uma função que recebe um array como parâmetro e retorna quantos números 
//negativos tem nesse mesmo array.
function negativos(array){
    let numerosNegativos= 0
    for (i=0; i< array.length; i++){
        if(array[i] < 0) numerosNegativos++;{
        }
    }
    return numerosNegativos
}

console.log(negativos ([-15,-13,-71,73,73,-72,-86]))

//Crie uma função que recebe um array como parâmetro 
//e retorna a soma todos os numeros negativos contidos nesse array
function somaArray(array){
    let somaNegativos = 0
    for(i=0;i<array.length;i++){
        if(array[i] < 0){
        somaNegativos= somaNegativos + array[i]
    }
    }
        return somaNegativos
}
console.log(somaArray([-1,6,-2,90,-3,10]))

//Crie uma função que recebe um número como parâmetro e retorne um
//arraycontendo todos os números pares existentes entre 0 e o número passado no parâmetro.
function pares(n){
    let numerosPares=[]
    for(i=0; i <= n ; i++){
        if(i % 2 == 0){
            numerosPares.push(i)
        }
    }
    return numerosPares
}


console.log(pares(4))


//Crie uma função que recebe um array como parâmetro 
//e retorne outro array contendo apenas os valores negativos do array passado por parâmetro.
function arrayNegativos(array){
    let arrayDeNegativos= []
    for(i=0; i < array.length; i++){
        if(array[i] < 0 ){
            arrayDeNegativos.push(array[i])
        }
    }
    return arrayDeNegativos
}
console.log(arrayNegativos([86,-43,-73,-11,79,34,-75]))

//Crie uma funçao que recebe um array como parâmetro e some todos os seus elementos. 
//Feito isso, sua função deve retornar true se essa soma for maior que a quantidade de elementos no array.
//Caso contrário, deve retornar false.
function somaElementos(array){
    let somatudo = 0
    for(i = 0; i < array.length; i++){
            somatudo = somatudo + array[i]
            console.log(somatudo)
    }
    if(somatudo > array.length){
        console.log(somatudo)
        return true
    } 
    else{
        return false
    }
}
console.log(somaElementos([3,1,2]))