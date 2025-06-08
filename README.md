Projeto Jokenpô 🏓

Este é um projeto web de um jogo de Pedra, Papel e Tesoura (Jokenpô) desenvolvido com HTML, CSS, JavaScript e o framework Bootstrap 5. Ele permite cadastrar jogadores, registrar partidas, exibir rankings e salvar os dados localmente no navegador.

🎮 Funcionalidades

Adicionar jogadores (com armazenamento local).

Registrar partidas entre dois jogadores.

Exibir resultados de cada partida.

Atualizar ranking com base em vitórias, empates e derrotas.

Manter histórico de partidas.

Interface responsiva com Bootstrap.

📄 Tecnologias Utilizadas

HTML5 para estrutura do documento.

CSS3 com uso da fonte "Press Start 2P" para estilo retrô.

Bootstrap 5 para layout responsivo e componentes visuais.

JavaScript puro para lógica do jogo e manipulação do DOM.

Web Storage (localStorage) para persistência de dados.

🌐 Uso do Bootstrap

O projeto utiliza Bootstrap 5 das seguintes maneiras:

Sistema de Grid (.container, .row, .col-md-*) para estruturação.

Componentes como btn, form-control, form-select, alert, list-group-item para interação e exibição.

Classes utilitárias (text-center, bg-white, shadow-sm, rounded, etc.) para estilização leve.

💡 A ideia foi manter o CSS clean e minimalista, usando o Bootstrap como base e aplicando apenas alguns ajustes com CSS personalizado para fontes, sombreamentos e margens mais específicas.

🛠️ Lógica em JavaScript

O script.js contém toda a lógica do jogo:

Funções para adicionar jogadores, evitando duplicatas.

Validação de jogadas e determinação de resultados.

Atualização dinâmica de menus, ranking e histórico.

Exibição do resultado diretamente na página.

📁 Uso do Web Storage

O uso do localStorage permite que:

Os dados dos jogadores sejam salvos localmente no navegador.

As informações persistam mesmo após fechar ou atualizar a página.

Isso elimina a necessidade de um backend e torna o jogo totalmente funcional apenas no frontend.

✨ Como rodar o projeto

Clone este repositório.

Abra o arquivo index.html em qualquer navegador moderno.

Jogue e divirta-se!

