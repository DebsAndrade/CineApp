// Projeto CineApp
// Autoras: Débora Andrade e Gabriella Ayres

let cineApp = [
    { id: 1, title: "Titanic", gender: "Romance/Drama", year: 1997, status: "Não Visto", review: null, synopsis: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912." },
    { id: 2, title: "Esqueceram de Mim", gender: "Comédia/Família", year: 1990, status: "Visto", review: 5, synopsis: "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal." },
    { id: 3, title: "IT: A Coisa", gender: "Terror/Suspense", year: 2017, status: "Não Visto", review: null, synopsis: "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise." },
    { id: 4, title: "O Batman", gender: "Ação/Crime", year: 2022, status: "Não Visto", review: null, synopsis: "Bruce Wayne, em sua segunda ano como Batman, enfrenta o Charada, um serial killer que aterroriza Gotham City." }
];

const activityLog = [];

function registarLog(acao) {
    const data = new Date().toLocaleString();
    const entrada = `[${data}] - ${acao}`;
    activityLog.push(entrada);
}

registarLog("Aplicação CineApp iniciada.");

function marcarComoVisto(id, review) {
    const filme = cineApp.find(filme => filme.id === id);

    if (!filme) {
        console.error("Erro: Filme não encontrado.");
        return;
    }

    filme.status = "Visto";
    filme.review = review; // Atribuir nota
    registarLog(`Filme visto: "${filme.title}" (Nota: ${review})`);
}

marcarComoVisto(3, 4);

// 1. Adicionar Filme
function adicionarFilme(id, title, gender, year, status, review, synopsis) {
    // Validação de duplicados (pelo título ou ID)
    const existe = cineApp.some(movie => movie.title.toLowerCase() === title.toLowerCase() || movie.id === id);

    if (existe) {
        console.error(`Erro: O filme "${title}" ou ID ${id} já existe.`);
        return;
    }

    cineApp.push({
        id: id,
        title: title,
        gender: gender,
        year: year,
        status: status,
        review: review,
        synopsis: synopsis,
    });

    registarLog(`Filme adicionado: "${title}"`);
}

adicionarFilme(5, "O Senhor dos Anéis", "Fantasia/Aventura", 2001, "Não Visto", null, "Um hobbit embarca em uma jornada épica para destruir um anel poderoso.");



// 3. Listar Pendentes
function listarPendentes() {
    const pendentes = cineApp.filter(f => f.status === "Não Visto");
    const titulos = pendentes.map(f => f.title);
    return titulos;
}

listarPendentes();

// 4. Remover Filme
function removerFilme(id) {
    const index = cineApp.findIndex(f => f.id === id);
    
    if (index === -1) {
        console.error("Erro: Filme não encontrado para remoção.");
        return;
    }

    const removido = cineApp[index];
    cineApp.splice(index, 1); // Remove 1 elemento no index encontrado
    
    registarLog(`Filme removido: "${removido.title}"`);
}

removerFilme(2);

// 5. Média de Avaliações (Correto)
function calcularMediaAvaliacoes() {
    const filmesVistos = cineApp.filter(f => f.status);
    
    if (filmesVistos.length === 0) return 0;

    const soma = filmesVistos.reduce((acc, filme) => acc + filme.review, 0);
    const media = soma / filmesVistos.length;
    return media;
}

calcularMediaAvaliacoes();

// 6. Recomendação Aleatória
function recomendarFilme() {
    const pendentes = cineApp.filter(f => f.status === "Não Visto");
    if (pendentes.length === 0) {
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * pendentes.length);
    const sugestao = pendentes[indiceAleatorio];
    return sugestao;

}

recomendarFilme();

// 7. Contagem por Género
function contarPorGenero(generoAlvo) {
    const contagem = cineApp.filter(f => f.gender.toLowerCase() === generoAlvo.toLowerCase()).length;
    return contagem;
}

contarPorGenero("Terror/Suspense");

// Extra 1: Listar Melhores Filmes (Ranking)
function listarRanking() {
    // Cria uma cópia para não alterar a ordem do array original
    const ranking = [...cineApp]
        .filter(f => f.status === "Visto")
        .sort((a, b) => b.review - a.review); // Ordem decrescente
    ranking.forEach((f, i) => console.log(`${i + 1}º ${f.title} - Nota: ${f.review}`));
    return ranking;
}

listarRanking();

// Extra 2: Buscar Filme (Busca inteligente)
function buscarFilme(termo) {
    const resultados = cineApp.filter(f => f.title.toLowerCase().includes(termo.toLowerCase()));
    return resultados;
}

buscarFilme("it");

// Extra 3: Editar Título do Filme
function editarTitulo(id, novoTitulo) {
    const filme = cineApp.find(f => f.id === id);
    if(filme) {
        const antigo = filme.title;
        filme.title = novoTitulo;
        registarLog(`Edição: "${antigo}" renomeado para "${novoTitulo}"`);
    }
}

editarTitulo(3, "It: A Coisa (2017)");

// Extra 4: Mostrar Histórico de Atividades
function mostrarHistorico() {
    console.log("--- Histórico de Atividades ---");
    activityLog.forEach(entrada => console.log(entrada));
}

mostrarHistorico();

