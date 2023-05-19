const listaB = document.querySelectorAll('.btn'); // Botões de cada cor (classList[0])

const quadrado = document.getElementById('quadrado'); // Quadrado no centro da tela

const cores = ['#4d4dff', '#ff4d4d', '#ffff4d', '#5cd65c', 'black', 'white']; // Cores CSS

const cores2 = ['azul', 'red', 'yellow', 'green', 'black']; // Cores da classlist[1] no HTML


for (let i = 0; i < listaB.length; i++) {
    const botoes = listaB[i];
    const htmlCores = cores[i]
    const jsCores = cores2[i]

    // Variáveis que identificarão o botão clicado e a sua cor relacionada (individualmente)


    botoes.onclick = (evento) => {
        if (evento.target.classList[1] === `botao-${jsCores}`) {
            quadrado.style.background = htmlCores;
        } else {
            quadrado.style.background = 'white'; 
        }
    }

    // Função para identificar o botão clicado e adicionar ao seu background a cor desejada
}

