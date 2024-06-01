const Calcular = document.getElementById('Calcular');
const Adicionar = document.getElementById('AdicionarAluno');


const Alunos = [];

function AdicionarAluno() {

    const Nome = document.getElementById('Nome').value;
    const Altura = document.getElementById('Altura').value;
    const Peso = document.getElementById('Peso').value;

    Alunos.push({Nome, Altura, Peso});
    //push ele acrescenta novos elementos 

    console.log(`${Nome} adicionado(a), sua altura é de: ${Altura} e seu peso é: ${Peso} `);
}

Adicionar.addEventListener('click', AdicionarAluno);





function IMC() {

    const Nome = document.getElementById('Nome').value;
    const Altura = document.getElementById('Altura').value;
    const Peso = document.getElementById('Peso').value;
    const Resultado = document.getElementById('Resultado');

    if(Nome !=='' && Altura !=='' && Peso !=='') {

        const ValorIMC = (Peso/(Altura*Altura)).toFixed(1);

        let Classificacao = {
            AbaixodoPeso: 0,
            PesoNormal: 0,
            Sobrepeso: 0,
            ObesidadeGrauI: 0,
            ObesidadeGrauII: 0,
            ObesidadeGrauIII: 0
        };

        var Categoria = '';


        for(const Aluno of Alunos) {
            // Fazer algo com Aluno

            if(ValorIMC < 18.5){
                Classificacao.AbaixodoPeso++;
                Categoria = 'Abaixo do peso!'
            }else if(ValorIMC < 25) {
                Classificacao.PesoNormal++;
                Categoria = 'Peso normal'
            }else if(ValorIMC  < 30) {
                Classificacao.Sobrepeso++;
                Categoria = 'Sobrepeso'
            }else if(ValorIMC  < 35) {
                Classificacao.ObesidadeGrauI++;
                Categoria = 'Obessidade garu I'
            }else if(ValorIMC  < 40) {
                Classificacao.ObesidadeGrauII++;
                Categoria = 'Obessidade garu II'
            }else {
                Classificacao.ObesidadeGrauIII++;
                Categoria = 'Obessidade garu III'   
            }

            
        }
        console.log(``);
            console.log(`Categotia | Quantidade`);
            console.log(`Abaixo do peso! | ${Classificacao.AbaixodoPeso}`);
            console.log(`Peso normal | ${Classificacao.PesoNormal}`);
            console.log(`Sobrepeso | ${Classificacao.Sobrepeso}`);
            console.log(`Obessidade garu I | ${Classificacao.ObesidadeGrauI}`);
            console.log(`Obessidade garu II | ${Classificacao.ObesidadeGrauII}`);
            console.log(`Obessidade garu III | ${Classificacao.ObesidadeGrauIII}`);
            console.log(``);

            Resultado.textContent = `${Nome} seu IMC é ${ValorIMC} e sua Classificação é ${Categoria}`;


        

    }else{
        Resultado.textContent = 'Preencha todos os campos!';

    }

    

}

Calcular.addEventListener('click', IMC);


