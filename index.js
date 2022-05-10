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

//Crie uma funçao que recebe um array como parâmetro e retorne outro array,
// onde cada elemento desse novo array é igual ao elemento do array do parâmetro mais 5.
function arrayMaisCinco(array){
    let arrayRetornado = []
    for(i=0; i<array.length; i++){
        arrayRetornado.push(array[i]+5 )
    }
    return arrayRetornado
}
console.log(arrayMaisCinco([5,10,15]))

//Crie uma função que recebe um array como parâmetro e calcule a média dos valores contidos nesse array.
// Depois disso, crie outro array e inclua nele apenas os elementos do array do parâmetro que sejam maiores 
//que a média calculada.
function arrayMedias(array){
    let somaValores= 0
    let mediaValores= 0
    let elementosMaioresMedia= []
    for(i=0; i <array.length; i++){
        somaValores= somaValores + array[i]
        
    }
    mediaValores= somaValores/ array.length
    for( i=0; i < array.length; i++){
        if(mediaValores< array[i]){
            elementosMaioresMedia.push(array[i])
        }
    }
        
       return elementosMaioresMedia 
}
console.log(arrayMedias([10, 4, 2, 1]))


//Crie uma função que recebe uma string como parâmetro, 
//e retorna a quantidade de letras ‘a’ que existem nessa string     
function selecionarA(string){
    let quantidadeDeA= 0
    for(i=0; i< string.length; i++){
        if (string[i] == 'a'){
            quantidadeDeA++
        }
    }
    return quantidadeDeA
}
console.log (selecionarA('barata'))

//Crie uma função que recebe um array contendo somente strings, 
//e retorna a soma do comprimento de todas as strings deste array.
function somenteStrings(array){
    let somaComprimento= 0
    for(i=0; i< array.length;i++){
        somaComprimento += array[i].length
    }
    return somaComprimento
}
console.log(somenteStrings(['verde','azul','rosa']))


//Crie uma função que recebe uma frase (uma string) como parâmetro, 
//e retorna um array contendo todas as palavras dessa frase que possuem um comprimento ímpar,
// ou seja, que possuem uma quantidade ímpar de letras.
function recebeFrase(frase){
    let retornoImpares=[]
    let string= frase.split(' ')
    for(i=0; i< string.length; i++){
        if(string[i].length %2 != 0){
            retornoImpares.push(string[i])
        }
    }
    return retornoImpares
}
console.log(recebeFrase('Eu sou feliz'))

//Crie uma função que recebe uma string como parâmetro, 
//e retorna uma string igual à que foi passada por parâmetro, mas com ‘0’ (zeros) no lugar das letras ‘o’.

function recebeString(string){
    let stringResultante=''
    for(i=0; i< string.length;i++){
        if(string[i] == 'o'){
        stringResultante += '0'
    } else{
            stringResultante += string[i]
    }
    }
    return stringResultante
}
console.log(recebeString('Iodo'))

//Crie uma função que recebe uma string como 
//parâmetro e retorna uma string igual à que foi passada por parâmetro,
// mas com todos os ‘p’ (minúsculos) trocados por ‘P’ (maiúsculos).
function recebendoString(string){
    let retornaP= ''
    for( i=0; i< string.length ; i++){
        if( string[i]== 'p'){
            retornaP += 'P'
        } else{
            retornaP += string[i]
        }
    }
    return retornaP
}
console.log( recebendoString('eu gosto do meu pai'))




