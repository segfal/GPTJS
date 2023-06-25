///import { OpenAIApi } from "openai";

const openapi = require('openai');
//const openai = new OpenAIApi(process.env.OPENAI_API_KEY);


const dotenv = require('dotenv');




const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: dotenv.config().parsed.API_KEY,
});
const openai = new OpenAIApi(configuration);



//asynch function to 
const getResponse = async (msg) => {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: msg}],

      });
    return chatCompletion;


}
//use this function to get the response from the bot if no response then return null
//using fetch



//export the function



module.exports = getResponse;