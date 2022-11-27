function calcular(n1, n2) {
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)

    selector = document.getElementById('selector').value

    switch(selector){
        case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O resultado da soma entre ${n1} e ${n2}  =   ${calculo} `
            break
        
        case '-':
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado da subtração entre ${n1} e ${n2} =  ${calculo}`
            break

        case '*':
            calculo = (n1 * n2)
            document.getElementById('resultado').innerHTML = `O resultado da multiplicação entre ${n1} e ${n2} =  ${calculo} ` 
            break
        
        case '/':
            calculo = (n1 / n2)
            document.getElementById('resultado').innerHTML = `O resultado da divisão entre ${n1} e ${n2} =  ${calculo} ` 
            break
    }


}