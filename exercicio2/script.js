// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const array1 = [2,5,1,9,3,4]
const array2 = ["arroz" , "feijão" , "fubá" , "couve"]
const array3 = [2,5,"arroz", "feijão", true]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log (array1 , array1.length-1)
console.log (array2 , array2.length-1)
console.log (array3 , array3.length-1)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log (array1[0])
console.log (array2[1])
console.log (array3[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma 
//informação booleana falsa 

console.log (`a primeira array inclui "5"? ${array1.includes(5)}`)
console.log (`a primeira array inclui "6"? ${array1.includes(6)}`)

// sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.