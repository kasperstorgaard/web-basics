function login(data) {
    console.log('login:', data);
}

function start() {
    return {
        'LOGIN': login
    };
}

module.exports = start;