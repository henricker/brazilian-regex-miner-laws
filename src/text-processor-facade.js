const { TextProcessorFluentAPI } = require("./text-processor-fluent-api");

class TextProcessorFacade {
    constructor(text) {
        this.processorText = new TextProcessorFluentAPI(text);
    }

    getProjectsFromCSV() {
        return this.processorText
            .convertRowsToObject()
            .convertToProjectObject()
            .build();
    }
}

module.exports = { TextProcessorFacade };