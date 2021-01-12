const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors({
  origin: '*'
}))

app.use(express.static('./dist/frontend/'));

app.get('/*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile('index.html', {root: 'dist/frontend/'});
}
);

app.listen(process.env.PORT || 8080);
