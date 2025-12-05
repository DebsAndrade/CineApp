let cineApp = [
    { id: 1, title: "Titanic", gender: "Romance/Drama", year: 1997, status: "Visto", review: 5, synopsis: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912." },
    { id: 2, title: "Esqueceram de Mim", gender: "Comédia/Família", year: 1990, status: "Visto", review: 5, synopsis: "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal." },
    { id: 3, title: "IT: A Coisa", gender: "Terror/Suspense", year: 2017, status: "Não Visto", review: null, synopsis: "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise." },
    { id: 4, title: "A Origem", gender: "Ficção Científica/Ação", year: 2010, status: "Visto", review: 4, synopsis: "Um ladrão que invade os sonhos das pessoas é contratado para plantar uma ideia na mente de um CEO." },
];

// ❌ FUNÇÃO COM BUG

function calcularMediaBUG() {
    const filmesVistos = cineApp.filter(filme => filme.status === "Visto");
    const soma = filmesVistos.reduce((acc, filme) => acc + filme.review, 0);
    const media = soma / cineApp.length; 
    
    console.log(`Média (BUG): ${media.toFixed(1)}`);
}

console.log(calcularMediaBUG());
