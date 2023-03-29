function classicoVovo(nome, dataFundacao, bairro, cidade, adversario, dataFundacaoAdversario, pais) {
    this.nome = nome;
    this.dataFundacao = dataFundacao;
    this.bairro = bairro;
    this.cidade = cidade;
    this.pais = pais;
    this.adversario = adversario;
    this.dataFundacaoAdversario = dataFundacaoAdversario;

    console.log(`O ${nome} vai jogar essa semana em casa contra o ${adversario}, em ${bairro}. 
    Esse duelo é chamado de clássico Vovô pelo fato do confronto ser o mais antigo do ${pais} e obviamente de sua cidade,
    ${cidade}. 
    O ${nome} foi fundado em ${dataFundacao} e o ${adversario} em ${dataFundacaoAdversario} `)
}

const classicoVovoBrasil = new classicoVovo("Botafogo FR", "12/08/1904", "Botafogo", "Rio de Janeiro", "Fluminense", "21/07/1902", "Brasil" );
const classicoVovoUruguai = new classicoVovo("Peñarol", "28/09/1891", "Cam. Mangangá", "Montevidéu", "Nacional", "14/05/1899", "Uruguai");


console.log(classicoVovoBrasil);
console.log(classicoVovoUruguai);