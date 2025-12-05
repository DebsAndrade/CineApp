// ❌ FUNÇÃO COM BUG

function calcularMediaBUG() {
    const filmesVistos = cineApp.filter(filme => filme.visto);
    const soma = filmesVistos.reduce((acc, filme) => acc + filme.nota, 0);
    const media = soma / cineApp.length; 
    
    console.log(`Média (BUG): ${media.toFixed(1)}`);
}

console.log(calcularMediaBUG());
