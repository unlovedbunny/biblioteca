import { inicializarFavoritos } from "./scr/menuFavoritos";

const lista = [ 
    {
        id: 1,
        nome: "Cinder",
        genero: "Fantasia",
        idade: "+14",
        nomeArqImg: "cinder.jpeg",
        autor: "Merissa Meyer",
    }, 
    {
        id: 2,
        nome: "O Hobbit",
        genero: "Fantasia",
        idade: "+12",
        nomeArqImg: "o hobbit.jpeg",
        autor: "J.R.R Tolkien",
    },
    { 
        id: 3,
        nome: "Um Estranho Sonhador",
        genero: "Fantasia",
        idade: "+12",
        nomeArqImg: "um estranho sonhador.jpg",
        autor: "J.R.R Tolkien",
    },
    {
        id: 4,
        nome: "Cien Años de Soledad",
        genero: "Fantasia",
        idade: "+16",
        nomeArqImg: "cien anos de soledad.jpeg",
        autor: "Gabriel García Márquez",
    },
    {
        id: 5,
        nome: "Winter",
        genero: "Fantasia, SCI-FI.",
        idade: "+14",
        nomeArqImg: "winter.jpeg",
        autor: "Merissa Meyer",
    },
    {
        id: 6,
        nome: "A Guerra da Papoula",
        genero: "Fantasia, terror, gore",
        idade: "+18",
        nomeArqImg: "a guerra da papoula.jpeg",
        autor: "R.F Kuang",
    },
    {
        id: 7,
        nome: "Verity",
        genero: "Suspense, terror psicológico.",
        idade: "+18",
        nomeArqImg: "verity.jpeg",
        autor: "Collen Hoover",
    },
    {
        id: 8,
        nome: "Era Uma Vez Um Coração Partido",
        genero: "Fantasia, romance.",
        idade: "+12",
        nomeArqImg: "era uma vez um coracao partido.jpeg",
        autor: "Stephanie Garber",
    },
];

    for(const produtolista of lista){

        const livro = `<div class="border-solid border-2 border-indigo-600 w-48 m-2" id="livro${produtolista.id}">
        <img src="./imgs/${produtolista.nomeArqImg}" 
        alt="Imagem do livro ${produtolista.nome}, ${produtolista.autor}."
        style="height: 285px;"/>
        <p class="nome-livro">${produtolista.nome}</p>
        <p>${produtolista.autor}</p>
        <p>${produtolista.genero}</p>
        <p>${produtolista.idade}</p>
        <button>Ver mais</button>
        </div>`;
    
        document.getElementById("container-livros").innerHTML += livro;
    }
        
    inicializarFavoritos();

    