const socket = io();

const online = document.querySelector('#online');
const offline = document.querySelector('#offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on('connect', () => {
    online.style.display = 'inline';
    offline.style.display = 'none';
});

socket.on('disconnect', () => {
    online.style.display = 'none';
    offline.style.display = 'inline';
});

socket.on('enviar-mensaje-recibido', (payload) => {
    console.log(payload.mensaje);
});

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '678',
        fecha: new Date().getTime()
    };
    socket.emit('enviar-mensaje', payload);

});