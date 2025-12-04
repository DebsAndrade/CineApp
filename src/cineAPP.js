// Projeto CineApp
// Autoras: Débora Andrade e Gabriella Ayres

class Movies {
    constructor(id, title, gender, year, status, review, synopsis) {
        this.id = id;
        this.title = title;
        this.gender = gender;
        this.year = year;
        this.status = status; // Saber que o filme foi visto ou não visto.
        this.review = review;
        this.synopsis = synopsis;
    };
};

const moviesList = [
    new Movies (1, "Titanic", "Romance/Drama", 1997, "Visto", 4, "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural do Titanic em 1912."),
    new Movies (2, "Esqueceram de Mim", "Comédia/Família", 1990, "Visto", 5, "Um menino de oito anos é acidentalmente deixado para trás quando sua família viaja para Paris nas férias de Natal."),
    new Movies (3, "IT: A Coisa", "Terror/Suspense", 2017, "Visto", 2, "Um grupo de crianças enfrenta um ser maligno que assume a forma de um palhaço chamado Pennywise."),
    new Movies (4, "O Batman", "Ação/Crime", 2022, "Não Visto", null, "Bruce Wayne, em sua segunda ano como Batman, enfrenta o Charada, um serial killer que aterroriza Gotham City.")
];

class UserLog {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.history = [];
    };
    activeUser(inputName, inputPassword) {
        if (this.name === inputName && this.password === inputPassword) {
            return console.log(`Usuário ${this.name} logado com sucesso!`);
        }
    }
    registerReport(action) {
        const mensagem = `Usuário ${this.name} realizou a ação: ${action}`;
        this.history.push(mensagem);
        console.log(mensagem);
    }
};

const usersList = [
    new UserLog (1, "Débora Andrade", "debora123"),
    new UserLog (2, "Gabriella Ayres", "gabriella456"),
    new UserLog (3, "Admin", "admin789")
];

usersList[0].activeUser("Débora Andrade", "debora123");
usersList[1].activeUser("Gabriella Ayres", "gabriella456");
usersList[2].activeUser("Admin", "admin789");






