import { Configuration, OpenAIApi } from "openai";
import { process } from './env';

const outputImg = document.getElementById('output-img')

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

document.getElementById("submit-btn").addEventListener("click", () => {
    const prompt = document.getElementById("instruction").value;
    generateImage(prompt);
})

async function generateImage(prompt) {
    outputImg.innerHTML = `<img src="${response.data.data[0].url}">`
}