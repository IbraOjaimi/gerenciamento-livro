const prompt = require('prompt-sync')({sigint:true});

let biblioteca = [];
let inicioId = 1;

getIndice = (id) => {
    const indice = biblioteca.findIndex((el) => el.id == id);
  
    if (indice == -1) {
      console.log("ID inexistente");
    }
    return indice;
  }

modelo = (id) => {
    let titulo = prompt('Digite o titulo do livro: ');
    let autor = prompt('Digite o autor do livro: ');
    let ano = Number(prompt('Digite o ano do livro: '));
    let genero = prompt('Digite o gênero do livro: ');
    while (true){
    let novaVersao = prompt('Exitem versões do livro por ano? (sim/não): ');
    let versoes = [];

    
        if(novaVersao === 'sim'){

            while (true){
                let anoNovaVersao = prompt('Digite os anos das versões ou "fim" para encerrar: ').toLowerCase();
                switch (anoNovaVersao) {
                    case 'fim':
                        console.log('Versões cadastradas com sucesso!', versoes);
                        
                        if(titulo != '' && autor != '' && !isNaN(ano) && genero != ''){
                            if(id === undefined){
                                return {
                                    titulo,
                                    autor,
                                    ano,
                                    genero,
                                    versoes,
                                    id: inicioId++
                                }
                            } else {
                                return {
                                    titulo,
                                    autor,
                                    ano,
                                    genero,
                                    versoes,
                                    id,
                                }
                            }
                        } else {
                            console.log('Dados inválidos!');
                            return undefined;
                        }
                        
                    default:
                        versoes.push(anoNovaVersao);
                        console.log('Adicionado com sucesso!');
                        break;
                }
            }
        } else if (novaVersao === 'não' || novaVersao === 'nao') {
            if(titulo != '' && autor != '' && !isNaN(ano) && genero != ''){
                if(id === undefined){
                    return {
                        titulo,
                        autor,
                        ano,
                        genero,
                        versoes,
                        id: inicioId++
                    }
                } else {
                    return {
                        titulo,
                        autor,
                        ano,
                        genero,
                        versoes,
                        id,
                    }
                }
            } else {
                console.log('Dados inválidos!');
                return undefined;
            }
        } else {
            console.log('Digite uma opção valida!');
            
        }
    } 
}  
console.log(modelo());