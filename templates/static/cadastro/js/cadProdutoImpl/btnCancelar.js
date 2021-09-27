function btn_cancelar() {
    desabilita_campos();

    var campos = document.getElementsByClassName("hab-campos");
    for (var i = 0; i < campos.length; i++){
          campos[i].value = '';
    }

    //limpando todos os campos de busca que utilizam select2 
    //exempl. fornecedor - compra - venda                        
    $('select.select2').val('').trigger('change');
    

    var myForm = document.getElementById("formCadastro");
    clearValidation(myForm);

    document.getElementById("btn-salvar").disabled = true;
    //document.getElementById("btn-novo").disabled = true;
    document.getElementById("btn-excluir").disabled = true;
    document.getElementById("cod-barras").disabled = false;
    document.getElementById("bib-pontos").disabled = false;
    document.getElementById("cod-barras").focus();
}
       