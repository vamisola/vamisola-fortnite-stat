const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('build'));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });




app.get('*', cors(), (req, res, next) => {
    res.sendFile(`${__dirname}/build.index.html`);
    res.json({msg: 'This is CORS-enabled for a Single Route'})
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log('server listenign on port: ', port);
});
