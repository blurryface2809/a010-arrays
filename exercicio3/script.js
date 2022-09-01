// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos 
//arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const array1 = [2,5,1,9,3,4]
const array2 = ["arroz" , "feijão" , "fubá" , "couve"]
const array3 = [2,5,"arroz", "feijão", true]

const array1Copia = array1.slice()
const array2Copia = array2.slice()
const array3Copia = array3.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log (array1 , array1Copia.push(6) , array1Copia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

console.log (array2 , array2Copia.pop() , array2Copia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log (array3 , array3Copia.splice(1,1) , array3Copia)

