function Dispatcher () {
    const handlers = {};

    /**
     * Use a set of handlers in the dispatcher.
     */
    function use(actions) {
        // TODO: add name-collision handlers.
        Object.assign(handlers, actions);
        return this;
    }

    /**
     * Dispatch an action with the provided data.
     */
    function dispatch(action, value) {
        const handler = handlers[action];

        if (!handler) {
            throw new Error(`no handler found for action: ${action}.`);
        }

        handler(value);

        return this;
    }

    /**
     * Attaches a stream to dispatch actions when a value comes in.
     */
    function attach(stream) {
        stream.filter(({action}) => !!handlers[action])
            .subscribe(({action, id, data}) => this.dispatch(action, {id, data}));
    }

    this.use = use;
    this.dispatch = dispatch;
    this.attach = attach;
}

module.exports = {Dispatcher};