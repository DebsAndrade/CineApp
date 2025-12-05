// Projeto CineApp
// Autoras: Débora Andrade (227) e Gabriella Ayres (230)

let cineApp = [
    { id: 1, title: "Titanic", gender: "Romance/Drama", year: 1997, status: "Não Visto", review: null, synopsis: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912." },
    { id: 2, title: "Esqueceram de Mim", gender: "Comédia/Família", year: 1990, status: "Visto", review: 5, synopsis: "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal." },
    { id: 3, title: "IT: A Coisa", gender: "Terror/Suspense", year: 2017, status: "Não Visto", review: null, synopsis: "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise." },
    { id: 4, title: "A Origem", gender: "Ficção Científica/Ação", year: 2010, status: "Visto", review: 4, synopsis: "Um ladrão que invade os sonhos das pessoas é contratado para plantar uma ideia na mente de um CEO." },
];

const activityLog = [];

function registarLog(acao) {
    const data = new Date().toLocaleString();
    const entrada = `[${data}] - ${acao}`;
    activityLog.push(entrada);
}

registarLog("Aplicação CineApp iniciada.");

// 1. Marcar como Visto
function marcarComoVisto(id, review) {
    const filme = cineApp.find(filme => filme.id === id);

    if (!filme) {
        console.error("Erro: Filme não encontrado.");
        return;
    }

    filme.status = "Visto";
    filme.review = review;
    registarLog(`Filme marcado como visto: "${filme.title}" com nota ${review}`);
}

marcarComoVisto(1, 4);

// 2. Adicionar Filme
function adicionarFilme(id, title, gender, year, status, review, synopsis) {
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
    const pendentes = cineApp.filter(filme => filme.status === "Não Visto");
    const titulos = pendentes.map(filme => filme.title);
    return titulos;
}

listarPendentes();

// 4. Remover Filme
function removerFilme(id) {
    const index = cineApp.findIndex(filme => filme.id === id);

    if (index === -1) {
        console.error("Erro: Filme não encontrado para remoção.");
        return;
    }

    const removido = cineApp[index];
    cineApp.splice(index, 1);

    registarLog(`Filme removido: "${removido.title}"`);
}

removerFilme(2);

// 5. Média de Avaliações (Correto)
function calcularMediaAvaliacoes() {
    const filmesVistos = cineApp.filter(filme => filme.status === "Visto");

    if (filmesVistos.length === 0) return 0;

    const soma = filmesVistos.reduce((acc, filme) => acc + filme.review, 0);
    const media = soma / filmesVistos.length;
    return media;
}

calcularMediaAvaliacoes();

// 6. Recomendação Aleatória
function recomendarFilme() {
    const pendentes = cineApp.filter(filme => filme.status === "Não Visto");
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
    const contagem = cineApp.filter(filme => filme.gender.toLowerCase() === generoAlvo.toLowerCase()).length;
    return contagem;
}

contarPorGenero("Terror/Suspense");

// Extra 1: Listar Melhores Filmes (Ranking)
function hallDaFama() {
    const ranking = [...cineApp]
        .filter(filme => filme.status === "Visto")
        .sort((a, b) => b.review - a.review);
    for (let i = 0; i < ranking.length; i++) {
        console.log(`${i + 1}º ${ranking[i].title} - Nota: ${ranking[i].review}`);
    }
    return ranking;
}

// hallDaFama();

// Extra 2: Buscar Filme (Busca inteligente)
function buscarFilme(termo) {
    const resultados = cineApp.filter(filme => filme.title.toLowerCase().includes(termo.toLowerCase()));
    return resultados;
}

buscarFilme("it");

// Extra 3: Editar Título do Filme
function editarTitulo(id, novoTitulo) {
    const filme = cineApp.find(filme => filme.id === id);
    if (filme) {
        const antigo = filme.title;
        filme.title = novoTitulo;
        registarLog(`Edição: "${antigo}" renomeado para "${novoTitulo}"`);
    }
}

editarTitulo(3, "It: A Coisa (2017)");

// Mostrar Histórico de Atividades do LOG
function mostrarHistorico() {
    console.log("--- Histórico de Atividades ---");
    activityLog.forEach(entrada => console.log(entrada));
}

mostrarHistorico();
