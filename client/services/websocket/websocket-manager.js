export class WebSocketManager {
    constructor() {
        const ws = new WebSocket('ws://localhost:8081');

        ws.addEventListener('open', () => console.log('open...'));
        ws.addEventListener('message', message =>
            console.log(JSON.parse(message.data)));

        setTimeout(() => {
            ws.send(JSON.stringify({action: 'AUTH'}));
        }, 3000);
    }
}