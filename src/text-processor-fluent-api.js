const { Project } = require("./project");

class TextProcessorFluentAPI {
    constructor(text) {
        this.content = text;
    }

    convertRowsToObject() {
        const splitByLine = this.content.split('\n');
        const headers = splitByLine[0].split(';');
        const rows = splitByLine.slice(1);
        this.content = rows.map(row => {
            const obj = {};
            const rowData = row.split(';');
            headers.forEach((header, index) => {
                if(header) {
                   obj[header] = rowData[index];
                }
            })

            return obj
        });

        return this;
    }

    convertToProjectObject() {
        this.content = this.content.map(item => new Project(item));
        return this;
    }

    build() {
        return this.content;
    }
}

module.exports = { TextProcessorFluentAPI };