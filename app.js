function Calcular() {
    let prod = document.querySelector("#prod").value;
    let vrl = document.querySelector("#vrl").value;
    let qtd = document.querySelector("#qtd").value;
    let pagamento = document.querySelector("#pagamento").value;
  
    let total = qtd*vrl;

   
document.querySelector("#vrlprod").innerHTML= `O valor total é: ${total} o produto desejado foi: ${prod} O formato de pagamento foi: ${pagamento}`

    //  switch (Produto) {
    // case "Debito":
    //     console.log("o pagamento é em debito");
    //     break;

    // case "Credito":
    //     console.log("o pagamento é credito");
    //     break;

    // case "Pix":
    //     console.log("o pagamento é em pix");
    //     break;

    // default:
    //     console.log("não temos essa forma de pagamento");
    //     break;
    //  }
        
    }
