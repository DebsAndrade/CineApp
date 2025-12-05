# 🎬 CineApp - A Tua Netflix Pessoal

## 📋 Identificação do Projeto
**Unidade Curricular:** Frontend + IA (2025/26) - FCUL/Upskill

**Autoras:**
* Débora Andrade
* Gabriella Ayres

**🔗 Link do Repositório:** [GitHub - CineApp](https://github.com/DebsAndrade/CineApp)

---

## 🍿 O Tema Escolhido

**CineApp** é uma aplicação de gestão de filmes.
Escolhemos este tema para resolver o problema comum da "paralisia da escolha" nos serviços de streaming. A aplicação permite gerir uma coleção pessoal, registar filmes vistos, atribuir notas e obter recomendações aleatórias.

---

## 🛠️ Instruções de Execução

Siga os passos abaixo para correr o projeto na sua máquina local.

### Pré-requisitos
* Node.js instalado
* Git (opcional, para clonar)
* Editor de texto (VS Code recomendado)

### Passos
1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/DebsAndrade/CineApp.git
    ```
2.  **Navegar para a pasta:**
    ```bash
    cd CineApp
    ```
3.  **Executar o ficheiro JavaScript:**
    O ficheiro principal contém uma função `main` que ilustra os casos de uso.
    ```bash
    node cineApp.js
    ```

---

## 🏗️ Estruturas de Dados

Para suportar a lógica do CineApp, utilizámos as seguintes estruturas:

1.  **Array de Objetos (`filmes`):**
    * **Justificação:** O `Array` é a estrutura ideal para armazenar uma lista ordenada e iterável de itens. O uso de `Objetos` dentro do array permite encapsular diversas propriedades de um único filme (id, title, gender, status, review) numa única entidade lógica.
    
2.  **Objetos (para representar o Filme):**
    * **Justificação:** Permite acesso rápido às propriedades através de chaves (ex: `filme.title`) e facilita a expansão de metadados no futuro sem alterar a estrutura do array principal.

---

## ⚙️ Descrição das 3 Operações Principais

Destacamos três funcionalidades que demonstram a manipulação avançada das estruturas de dados:

### 1. 🏆 Hall da Fama (Filttragem Avançada)
* **Descrição:** Filtra e lista apenas os filmes que possuem a nota máxima (5).
* **Justificação da Adequação:** Demonstra o uso eficaz do método `.filter()`, essencial para criar subconjuntos de dados baseados em critérios específicos sem alterar o array original.

### 2. 🎲 Recomendação Aleatória (Lógica Matemática)
* **Descrição:** Sugere um filme da lista de "pendentes" para o utilizador assistir.
* **Justificação da Adequação:** Utiliza `Math.random()` combinado com o comprimento do array. É adequado pois transforma uma lista estática numa funcionalidade interativa, resolvendo o problema real do utilizador (indecisão).

### 3. 🔍 Busca Rápida (Manipulação de Strings)
* **Descrição:** Pesquisa filmes pelo título ou parte dele.
* **Justificação da Adequação:** Utiliza métodos de string (como `.includes()` ou `.toLowerCase()`) para melhorar a experiência do utilizador (UX), permitindo encontrar dados sem saber o termo exato.

> **Outras Operações Implementadas:** Adicionar Filme, Listar Pendentes, Marcar como Visto, Remover Filme, Média de Avaliações e Contagem por Género.

---

#### Fluxogramas de Apoio

*Listar Pendentes:*

![Fluxograma Listar Pendentes](src/assets/fluxogramas/Fluxograma_Mini_Projeto_Listar.jpg)

---

*Média de Avaliações:*

![Fluxograma Média de Avaliações](src/assets/fluxogramas/Fluxograma_Mini_Projeto_Media.jpg)

---

## 🕵️‍♀️ Relatório do Bug (Simulação)

Como parte do desafio académico, identificámos e documentámos um erro de lógica propositado.

### O Bug
Ao calcular a **Média de Avaliações**, o cálculo da soma estava a ser realizado com base no array original (que contém filmes não vistos e sem nota), em vez de utilizar apenas o array filtrado de filmes já avaliados.

### Evidências
![CineApp erro](src/assets/print-bug/Print_Bug_01.jpeg) 

---

![Média undefined](src/assets/print-bug/Print.Bug_02.jpeg)

---

![Resultado incorreto](src/assets/print-bug/Print_Bug.3.jpeg)

---

### Justificação da Relevância
Este é um erro comum em programação funcional: **Scope e Mutabilidade**. Mostra a importância de garantir que estamos a operar sobre o conjunto de dados correto (o subconjunto filtrado) e não sobre a "fonte de verdade" completa, o que gerava resultados `undefined` ou imprecisos.

### Como Solucionar
Para corrigir, deve-se alterar a variável passada para a função de redução (soma). Em vez de iterar sobre `cineApp` que seria todos os filmes, deve-se iterar sobre a variável `filmesVistos`.
