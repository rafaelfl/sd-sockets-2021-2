const net = require('net');
const dotenv = require('dotenv');

dotenv.config();

NUM_PORTA = process.env.PORT || 3333;

const bdPizzas = [];

// Criar o objeto servidor e registrar a função principal de manipulação da conexão
const server = net.createServer(connectionListener);

server.listen(NUM_PORTA, "0.0.0.0", () => {
    console.log(`Servidor iniciado! Escutando na porta ${NUM_PORTA}`);
});

function connectionListener(socket) {
    socket.on("data", (data) => {
        const dataString = data.toString().trim();

        const params = dataString.split(" ");

        console.log(params);

        switch (params[0]) {
            case "ADICIONAR":
                bdPizzas.push({
                    id: params[1],
                    nome: params[2],
                    quantidade: params[3],
                });
                socket.write("+OK\n");
                break;

            case "LISTAR":
                let result = "";

                bdPizzas.forEach((pizza) => {
                    result += pizza.id + " " + pizza.nome + " " + pizza.quantidade + "\n";
                });

                socket.write(result);
                break;
            
            case "SAIR":
                console.log("Desconectado");
                socket.end();
                break;

            default:
                socket.write("-ERRO Comando não reconhecido\n");

        }
    });
}