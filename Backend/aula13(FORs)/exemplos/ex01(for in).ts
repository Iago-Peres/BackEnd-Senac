let ficcao = {
    //livro     //ficcao[livro]
    "fundacao": "isaac newton",
    "duna": "Frank Merbert"
};

//iterando sobre os livros de ficção e exibindo os autores

//para cada elemento(livro) em ficcao : console.log
for (let livro in ficcao) {
    console.log(`o autor do livro ${livro}: ${ficcao[livro]}`);
}

console.log(Object.keys(ficcao)[0]); // pega "fundacao";