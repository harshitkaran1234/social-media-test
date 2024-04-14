const express = require('express');

const { ServerConfig } = require('./config');
const connectToDB = require('./config/db');
const apiRoutes = require('./routes');

connectToDB();

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
