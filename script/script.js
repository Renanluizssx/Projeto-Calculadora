window.alert('Bem vindo ao programa de calculadora de soma');
    let nome = window.prompt('Qual seu nome')
    window.alert(`seu tem ${nome.length} caracteres. E seu nome em maíusculo fica ${nome.toUpperCase()}`)


    function soma() {
        let n1 = Number(document.getElementById('numero1').value)
        let n2 = Number(document.getElementById('numero2').value)
        let soma = n1+n2
        let resultado = document.write(`O resultado de ${n1} e ${n2} é igual a ${soma}`)
        
        
    }