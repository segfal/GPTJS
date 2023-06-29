
const getResponse = require('./backend.js');


const cors = require('cors');


const express = require('express');
const app = express();
const port = 8080;
const msgcache = [];
app.use(cors());
app.get('/', (req, res) => {
    //welcome message
    res.send('Hello World!');
});

//with message in the url
app.get('/message/:msg', (req, res) => {
    //get the message from the url
    const msg = req.params.msg;
    //get the response from the bot
    getResponse(msg,msgcache).then((response) => {
        //send the response back to the user
        
        
        msgcache.push({
            role: "assistant",
            content: response.data.choices[0].message.content
        });
        res.send(msgcache);


    }).catch((error) => {
        //send the error back to the user
        res.send(error);
    });
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

