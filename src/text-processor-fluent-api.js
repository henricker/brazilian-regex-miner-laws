
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
            headers.forEach((header, index) => {
                if(header) {
                   obj[header] = row.split(';')[index];
                }
            })

            return obj
        });

        return this;
    }

    build() {
        return this.content;
    }
}

module.exports = { TextProcessorFluentAPI };