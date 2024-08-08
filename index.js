const prompt = require('prompt-sync')({sigint:true});

while (true) {

    console.log(`
    GERENCIMANTO DE LIVROS

    1. Criar
    2. Listar
    3. Atulaizar
    4. Remover
    5. Busca avançada
    0. Sair

    `)

    let opcao = prompt('Digite uma opção: ')
    switch (opcao) {
        case '1':
            
            break;
        case '2':

            break;
        case '3':

            break;
        case '4':

            break;
        case '5':

            break;
        case '0':
            console.log('Saindo, até logo!');
            process.exit();

            break;
    
        default:
            console.log('Digite uma opção válida!');
            break;
    }
} 