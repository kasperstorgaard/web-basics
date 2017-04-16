function parseMessage(message) {
    try {
        return JSON.parse(message);
    } catch(error) {
        return {error: 'unable to parse provided message'};
    }
}

module.exports = {parseMessage};