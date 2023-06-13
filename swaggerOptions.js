module.exports = {
    options: {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Library API',
                version: '1.0.0',
                description: 'A simple Express Library API'
            },
            servers: [
                {
                    url: 'http://localhost:3000'
                }
            ]
        },
        apis: ['./routes/*.js']
    }
};
