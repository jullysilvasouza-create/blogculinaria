// Selecionando os elementos do HTML
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adicionando um evento de clique ao botão
botao.addEventListener('click', () => {
    mensagem.textContent = 'Olá! Você clicou no botão com sucesso. 🎉';
});