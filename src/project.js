const { evaluateRegex } = require("./util");

class Project {
    constructor(data) {
        this.id = data.link.match(evaluateRegex(/(?<=\?id=)(.+)/))[0];
        this.indexadores = data.indexadoresnorma.split(',').filter(item => item).map(item => item.trim());

        const titleData = data['título'].match(evaluateRegex(/(?<=Projeto de lei )(.+)/))[0].split('/');
        
        this.numero = titleData[0];
        this.ano = titleData[1];
        this.url = data.link;

        const authorData = data.autor.split(',').map(item => {
            const itemTrim = item.trim();
            const firstName = itemTrim.match(evaluateRegex(/^[a-zA-Z]+/gm))?.[0];
            const lastName = itemTrim.match(evaluateRegex(/[a-zA-Z]+$/gm))?.[0];

            const nome = firstName + ' ' + lastName;

            return {
                nome,
            }
        });

        this.autores = authorData;
    }
}

module.exports = { Project };