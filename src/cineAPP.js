// Projeto CineApp
// Autoras: Débora Andrade e Gabriella Ayres

// class Movie {
//     constructor(id, title, gender, year, status, review, synopsis) {
//         this.id = id;
//         this.title = title;
//         this.gender = gender;
//         this.year = year;
//         this.status = status; // Saber que o filme foi visto ou não visto.
//         this.review = review;
//         this.synopsis = synopsis;
//     };
// };

// const moviesList = [
//     new Movie (1, "Titanic", "Romance/Drama", 1997, "Visto", 4, "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912."),
//     new Movie (2, "Esqueceram de Mim", "Comédia/Família", 1990, "Visto", 5, "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal."),
//     new Movie (3, "IT: A Coisa", "Terror/Suspense", 2017, "Visto", 2, "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise."),
//     new Movie (4, "O Batman", "Ação/Crime", 2022, "Não Visto", null, "Bruce Wayne, em sua segunda ano como Batman, enfrenta o Charada, um serial killer que aterroriza Gotham City.")
// ];

// class UserLog {
//     constructor(id, name, password) {
//         this.id = id;
//         this.name = name;
//         this.password = password;
//         this.history = [];
//     };
//     activeUser(inputName, inputPassword) {
//         if (this.name === inputName && this.password === inputPassword) {
//             console.log(`Usuário ${this.name} logado com sucesso!`);
//         }
//     }
//     registerReport(action) {
//         const mensagem = `Usuário ${this.name} realizou a ação: ${action}`;
//         this.history.push(mensagem);
//         console.log(mensagem);
//     }
// };

// const usersList = [
//     new UserLog (1, "Débora Andrade", "debora123"),
//     new UserLog (2, "Gabriella Ayres", "gabriella456"),
//     new UserLog (3, "Admin", "admin789"),
//     new UserLog (4, "Admin2", "admin780"),

// ];

// usersList[0].activeUser("Débora Andrade", "debora123");
// usersList[1].activeUser("Gabriella Ayres", "gabriella456");
// usersList[2].activeUser("Admin", "admin789");


// A Coleção de Filmes (Dados iniciais para teste)
let cineApp = [
    { id: 1, title: "Titanic", gender: "Romance/Drama", year: 1997, status: "Visto", review: 4, synopsis: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912." },
    { id: 2, title: "Esqueceram de Mim", gender: "Comédia/Família", year: 1990, status: "Visto", review: 5, synopsis: "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal." },
    { id: 3, title: "IT: A Coisa", gender: "Terror/Suspense", year: 2017, status: "Visto", review: 2, synopsis: "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise." },
    { id: 4, title: "O Batman", gender: "Ação/Crime", year: 2022, status: "Não Visto", review: null, synopsis: "Bruce Wayne, em sua segunda ano como Batman, enfrenta o Charada, um serial killer que aterroriza Gotham City." }
];

// O Log de Atividades (Registo cronológico)
const activityLog = [];

// Função auxiliar para registar no Log (D.R.Y. - Don't Repeat Yourself)
function registarLog(acao) {
    const data = new Date().toLocaleString();
    const entrada = `[${data}] - ${acao}`;
    activityLog.push(entrada);
    console.log(`LOG: ${entrada}`);
}

registarLog("Aplicação CineApp iniciada.");

// 1. Adicionar Filme
function adicionarFilme(id, title, gender, year, status, review, synopsis) {
    // Validação de duplicados (pelo título ou ID)
    const existe = cineApp.some(f => f.title.toLowerCase() === title.toLowerCase() || f.id === id);

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
    console.log(`Sucesso: "${title}" adicionado.`);
}

adicionarFilme(5, "O Senhor dos Anéis", "Fantasia/Aventura", 2001, "Não Visto", null, "Um hobbit embarca em uma jornada épica para destruir um anel poderoso.");

// 2. Marcar como Visto
function marcarComoVisto(id, review) {
    const filme = cineApp.find(f => f.id === id);

    if (!filme) {
        console.error("Erro: Filme não encontrado.");
        return;
    }

    filme.status = true;
    filme.review = review; // Atribuir nota
    registarLog(`Filme visto: "${filme.title}" (Nota: ${review})`);
    console.log(`Sucesso: "${filme.title}" marcado como visto.`);
}

marcarComoVisto(4, 5);



// 3. Listar Pendentes
function listarPendentes() {
    const pendentes = cineApp.filter(f => !f.status);
    const titulos = pendentes.map(f => f.title);
    
    console.log("--- Filmes Pendentes ---");
    console.log(titulos.length > 0 ? titulos.join(", ") : "Não tens filmes pendentes.");
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
    console.log(`Sucesso: "${removido.title}" foi apagado.`);
}

removerFilme(2);

// 5. Média de Avaliações (Correto)
function calcularMediaAvaliacoes() {
    const filmesVistos = cineApp.filter(f => f.status);
    
    if (filmesVistos.length === 0) return 0;

    const soma = filmesVistos.reduce((acc, filme) => acc + filme.review, 0);
    const media = soma / filmesVistos.length;
    
    console.log(`Média das notas: ${media.toFixed(1)}`);
    return media;
}

calcularMediaAvaliacoes();

// 6. Recomendação Aleatória
function recomendarFilme() {
    const pendentes = cineApp.filter(f => !f.status);
    if (pendentes.length === 0) {
        console.log("Wow! Já viste tudo. Adiciona mais filmes.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * pendentes.length);
    const sugestao = pendentes[indiceAleatorio];

    console.log(`Recomendação do dia: 🎬 "${sugestao.title}" (${sugestao.gender})`);
}

recomendarFilme();

// 7. Contagem por Género
function contarPorGenero(generoAlvo) {
    const contagem = cineApp.filter(f => f.gender.toLowerCase() === generoAlvo.toLowerCase()).length;
    console.log(`Existem ${contagem} filmes do género "${generoAlvo}".`);
    return contagem;
}

contarPorGenero("Terror/Suspense");

// Extra 1: Listar Melhores Filmes (Ranking)
function listarRanking() {
    // Cria uma cópia para não alterar a ordem do array original
    const ranking = [...cineApp]
        .filter(f => f.status)
        .sort((a, b) => b.review - a.review); // Ordem decrescente

    console.log("--- Top Filmes ---");
    ranking.forEach((f, i) => console.log(`${i + 1}º ${f.title} - Nota: ${f.review}`));
}

listarRanking();

// Extra 2: Buscar Filme (Busca inteligente)
function buscarFilme(termo) {
    const resultados = cineApp.filter(f => f.title.toLowerCase().includes(termo.toLowerCase()));
    console.log(`Encontrados ${resultados.length} filmes com "${termo}":`, resultados);
}

buscarFilme("it");

// Extra 3: Editar Título do Filme
function editarTitulo(id, novoTitulo) {
    const filme = cineApp.find(f => f.id === id);
    if(filme) {
        const antigo = filme.title;
        filme.title = novoTitulo;
        registarLog(`Edição: "${antigo}" renomeado para "${novoTitulo}"`);
        console.log("Título atualizado com sucesso.");
    }
}

editarTitulo(3, "It: A Coisa (2017)");

// Extra 4: Mostrar Histórico de Atividades
function mostrarHistorico() {
    console.log("--- Histórico de Atividades ---");
    activityLog.forEach(entrada => console.log(entrada));
}

mostrarHistorico();

