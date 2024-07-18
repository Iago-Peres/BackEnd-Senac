let tolkienLivros = ["Senhor dos Aneis", "O hobbit", "contos inacabados"];

tolkienLivros.forEach(livro => {
    console.log(`eu ja li ${livro}`);
});

tolkienLivros.forEach(function (livro) {
    console.log(`eu ja li ${livro}`);
});

const arr: string[] = ["carro", "moto", "bicicleta"];

arr.forEach((element, index, array) => {
    console.log(`elemento ${element} no indice ${index}`);
    console.log(`array original:`, array);
});