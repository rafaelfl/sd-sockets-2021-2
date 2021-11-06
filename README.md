# sd-sockets-2021-2

## Sobre o Node.JS

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Duas versões: LTS (Long Term Support) e Current
- Thread principal para execução do loop Javascript
- Pelo fato de Javascript ser totalmente assíncrono (pelo fato de suas aplicações serem *single-threaded*), esse loop funciona basicamente "enfileirando eventos" para sua aplicação JS

![Loop de eventos JS](https://i2.wp.com/idealwebtutor.com/wp-content/uploads/2021/01/nodejs_architecture3.png?fit=1014%2C409&ssl=1)

## Sobre a Socket API

- Socket é o mecanimo mais básico para comunicação de redes
- Socket cria um "caminho" de comunicação entre as aplicações e o *buffer* da implementação do protocolo de transporte utilizado (TCP ou UDP)
- **Não confunda Socket de rede com Socket.io ou WebSocket, que são protocolos específicos da camada de aplicação, que executam sobre o protocolo HTTP**
- Paradigma Cliente/Servidor:
    - Existe uma hierarquia: Cliente solicita serviços e Servidor fornece os serviços.