export class WebSocketManager {
    constructor() {
        this._ws = new WebSocket('ws://localhost:8081');

        this._ws.addEventListener('open', () => console.log('websockets opened'));
        this._ws.addEventListener('closed', () => console.log('websockets closed'));

        this._ws.addEventListener('message', message =>
            console.log('websockets message:', JSON.parse(message.data)));
    }

    send(action, data) {
        const message = JSON.stringify({action, data});
        this._ws.send(message);
    }
}