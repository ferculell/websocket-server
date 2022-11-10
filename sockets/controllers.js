const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 678;
        
        socket.broadcast.emit('enviar-mensaje-recibido', payload);
        callback(id);

    });

}

module.exports = {
    socketController
}