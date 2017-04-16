function Dispatcher () {
    const handlers = {};

    /**
     * Use a set of handlers in the dispatcher.
     */
    function use (actions) {
        // TODO: add name-collision handlers.
        Object.assign(handlers, actions);
        return this;
    }

    /**
     * Dispatch an action with the provided data.
     */
    function dispatch (action, data) {
        const handler = handlers[action];

        if (!handler) {
            throw new Error(`no handler found for action: ${action}.`);
        }
        handler(data);

        return this;
    }

    this.use = use;
    this.dispatch = dispatch;
}

module.exports = {Dispatcher};