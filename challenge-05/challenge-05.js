/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [null, true, false, 8, 'isa'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
> function myFunction (myArray){
... return myArray;
... }


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction (arr,indice){
	return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mArray = [undefined, 'Isabella', {i=3}, function(){}, [1,2,3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(mArray)[0];
myFunction(mArray)[1];
myFunction(mArray)[2];
myFunction(mArray)[3];
myFunction(mArray)[4];

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nLivro){
var tLivros = {
'O conto da aia':{
quantidadePaginas: 268,
autor:'Atwood,Margaret',
editora:'Rocco',
},
'Carrie a estranha':{
quantidadePaginas: 200,
autor:'King,Stephen',
editora:'Suma De Letras',
},
'Quarto':{
quantidadePaginas: 350,
autor:'Donoghue,Emma',
editora:'Verus',
}
};
return !nLivro ? tLivros : tLivros[nLivro];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nLivro = 'O conto da aia';
console.log('o livro '+ nLivro+' tem'+book(nLivro).quantidadePaginas+' paginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('o autor do livro'+ nLivro+' é'+book(nLivro).autor+'!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log('o livro '+ nLivro+' foi publicado pela editora'+book(nLivro).editora+'!');