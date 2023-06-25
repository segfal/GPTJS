
const getResponse = require('./backend.js');





const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    //welcome message
    res.send('Hello World!');
});

//with message in the url
app.get('/message/:msg', (req, res) => {
    //get the message from the url
    const msg = req.params.msg;
    //get the response from the bot
    getResponse(msg).then((response) => {
        //send the response back to the user
        console.log(msg)
        console.log(response.data.choices);
        console.log(response.data.choices[0].message.content);
        res.send(response.data.choices[0].message.content);
    }).catch((error) => {
        //send the error back to the user
        res.send(error);
    });
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

