// OBJETOS E INTERFACES
// interface Pessoa {
//     //Definindo tipos
//     nome: string,
//     idade: number,
//     // Criando uma propriendade opcional
//     profissao?: string
// }

// const pessoa: Pessoa = {
//     nome: "Monique",
//     idade: 22
// }

// const pessoa2: Pessoa = {
//     nome: "Paula",
//     idade: 25,
//     profissao: 'Pedagoga'
// }
// //TIPAGEM DE ARRAY
// //Maneira 1 de definir valores para o array
// // const arrayPessoa: Pessoa[] = [ // O array só vai aceitar objetos do tipo Pessoa
// //     pessoa, pessoa2
// // ]

// //Maneira 2 de definir valores para o array
// const arrayPessoa: Array<Pessoa> = [ // O array só vai aceitar objetos do tipo Pessoa indicado dentro do operador diamante
//     pessoa, 
//     pessoa2
// ]

// const arrayNum: number[] = [
//     1, 2, 3
// ]

// const arrayString: string[] = [
//     '1', '2', '3'
// ]

// console.log(arrayPessoa);

//DECISÕES E REPETIÇÕES
// const typeUser = {
//     admin: "Seja bem vindo admin",
//     studant: "Você é um estudante",
//     viewer: "Você pode vizualizar"
// }

// function validateUser(user:string){
//     console.log(typeUser[user as keyof typeof typeUser]);// diz que a variavel user é do tipo keyof para o tipo typeUser
    
// }

// const usuario = 'admin'
// validateUser(usuario)
// validateUser('studant')
// validateUser('viewer')


//ESTRUTURA DE REPETIÇÃO
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// let n = 2
// while(n < 6){
//     console.log(n);
//     n++;
// }

//ARRAY
// const array: Array<number> = [
//     1, 2, 3, 4
// ]

// const stringArray: string[] = [
//     'a', 'b','c'
// ]

// //Adicionando elemento novo ao array na ultima posição
// console.log("Array original", array);
// array.push(5)
// console.log('Array com novo elemento', array);

// //Removendo elemento do array na ultima posição
// console.log("Array original", array);
// array.pop()
// console.log('Array retirando o ultimo elemento', array);

// MANIPULANDO ARRAYS
const array: Array<number> = [ 1, 2, 3, 4 ]  

// o método find() recebe como parametro uma função de callback podendo ser feita de forma isolada(a função)
// const buscaNum = array.find(num => num === 4)// chama cada elemento como num e só retorna se o numero retorna 4
// console.log(buscaNum); // retorna apenas o elemento === 4

// const buscaNum = array.find(num => num > 2) // retorna apenas o primeiro elemento que atende a condição
// console.log(buscaNum); 

// array.forEach(num => console.log(num)) // Recebe como parametro uma função de callback

// array.forEach(num => {
//     if (num > 2 && num % 2 === 0) {//  num % 2 === 0 - somente numeros pares 
//         console.log(num * 2);
//     }
// })

//O map() permite o uso de funções assincronas e é mais rápido que o forEach
array.map(num => console.log(num))
