const { expect } = require("chai");
const { Project } = require("../../src/project");
const { TextProcessorFluentAPI } = require("../../src/text-processor-fluent-api");
const valid = require('../mocks/valid');


describe('TextProcessorFluentAPI', () => {
    let textProcessorFluentAPI;
    beforeEach(() => {
        textProcessorFluentAPI = new TextProcessorFluentAPI(valid);
    });

    it('Should return content', () => {
        const expected = valid;
        const result = textProcessorFluentAPI.build();
        expect(result).to.be.deep.equal(expected);
    })

    it('Should convert text csv to array of objects', () => {
        const data = textProcessorFluentAPI.convertRowsToObject().build();

        const expected = [
        {
            'título': 'Projeto de lei 584/2016',
            link: 'http://www.al.sp.gov.br/propositura?id=1322563',
            autor: 'Jorge Wilson Xerife do Consumidor',
            etapa: 'PAUTA',
            ementa: 'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
            indexadoresnorma: 'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
        },
        {
            'título': 'Projeto de lei 580/2016',
            link: 'http://www.al.sp.gov.br/propositura?id=1323286',
            autor: 'Marcia Lia',
            etapa: 'PAUTA',
            ementa: 'Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.',
            indexadoresnorma: 'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA'
        },
        {
            'título': 'Projeto de lei 545/2016',
            link: 'http://www.al.sp.gov.br/propositura?id=1322832',
            autor: 'Roberto Morais, Itamar Borges',
            etapa: 'PAUTA',
            ementa: 'Altera a Lei nº 13.550, de 2009, que dispõe sobre a utilização e proteção da vegetação nativa do Bioma Cerrado no Estado de São Paulo.',
            indexadoresnorma: ''
        }
        ]

        expect(data).to.be.deep.equal(expected);
    })

    it('Should convert objects to project object', () => {
          const data = textProcessorFluentAPI.convertRowsToObject().convertToProjectObject().build();
          
          const expected = [
            new Project({
                'título': 'Projeto de lei 584/2016',
                link: 'http://www.al.sp.gov.br/propositura?id=1322563',
                autor: 'Jorge Wilson Xerife do Consumidor',
                indexadoresnorma: 'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO'
            }),
            new Project({
                'título': 'Projeto de lei 580/2016',
                link: 'http://www.al.sp.gov.br/propositura?id=1323286',
                autor: 'Marcia Lia',
                indexadoresnorma: 'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA'
            }),
            new Project({
                'título': 'Projeto de lei 545/2016',
                link: 'http://www.al.sp.gov.br/propositura?id=1322832',
                autor: 'Roberto Morais, Itamar Borges',
                indexadoresnorma: ''
            })
          ]
        
       expect(data).to.be.deep.equal(expected);
    })
});