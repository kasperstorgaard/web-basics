function parseMessage(message) {
    try {
        return JSON.parse(message);
    } catch(error) {
        throw new Error("unable to parse provided message.");
    }
}

module.exports = {parseMessage};