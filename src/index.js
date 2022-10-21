const { readFile } = require('fs/promises')
const { join } = require('path')
const { TextProcessorFacade } = require('./text-processor-facade')


const filePath = join(__dirname, '..', 'docs', 'projeto-de-lei.csv');
readFile(filePath).then(_data => {
    const data = _data.toString();
    const projectObjects = new TextProcessorFacade(data).getProjectsFromCSV();
    console.log(projectObjects);
})


