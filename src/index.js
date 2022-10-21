const { readFile } = require()
const { join } = require()
const { fileURLToPath } = require('url')

(async () => {

    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const filePath = join(__dirname, '..', 'docs', 'projeto-de-lei.csv');
    const dataBuffer = await readFile(filePath);
    const data = dataBuffer.toString();

    console.log(data);
})()