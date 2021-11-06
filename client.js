const net = require('net');

const socket = new net.Socket();

const delayFunction = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

const connectionListener = async () => {
    console.log("Conectado ao servidor!");

    socket.on("data", (data) => {
        const dataString = data.toString().trim();

        console.log("Resposta do servidor: " + dataString);
    });

    const bufferDelay = 1;

    socket.write("ADICIONAR 1 CALABRESA 5\r\n");
    await delayFunction(bufferDelay);

    socket.write("ADICIONAR 2 CARNE-DE-SOL 2\r\n");
    await delayFunction(bufferDelay);

    socket.write("LISTAR\r\n");
    await delayFunction(bufferDelay);

    socket.write("ADICIONAR 3 MARGUERITA 1\r\n");
    await delayFunction(bufferDelay);

    socket.write("LISTAR\r\n");
    await delayFunction(bufferDelay);

    socket.write("KAJSDJKASNJDS\r\n"); 
    await delayFunction(bufferDelay);

    socket.write("SAIR\r\n");
}

socket.connect(8100, "127.0.0.1", connectionListener);