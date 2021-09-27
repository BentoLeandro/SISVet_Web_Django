
function valida_tipos_unid_comp_vda() {
    var myForm = document.querySelector("#formCadastro");       
    var itipo_unid = myForm.tipoUnidCompVda.value;

    itipo_unid = itipo_unid.toString();
    
    if (itipo_unid == 0) {
        
        $('#unid-compra').val(1); //CAIXA
        $('#unid-venda').val(2); //UNIDADE
        $('#unid-compra').select2().trigger('change'); //função para atualizar o campo
        $('#unid-venda').select2().trigger('change'); //função para atualizar o campo               
        
        //document.getElementById("fator-conversao").disabled = false;  
        myForm.fatorConversao.disabled = false;              
    }
    else if (itipo_unid == "1") {
        $('#unid-compra').val(1); //CAIXA
        $('#unid-venda').val(1) //CAIXA
        $('#unid-compra').select2().trigger('change');
        $('#unid-venda').select2().trigger('change');
        
        //document.getElementById("fator-conversao").disabled = true;
        //document.getElementById("fator-conversao").value = 1;
        myForm.fatorConversao.disabled = true;
        myForm.fatorConversao.value = 1;
    }
    else if (itipo_unid == "2") {
        $('#unid-compra').val(2); //UNIDADE
        $('#unid-venda').val(2); //UNIDADE
        $('#unid-compra').select2().trigger('change');
        $('#unid-venda').select2().trigger('change');
                
        myForm.fatorConversao.disabled = true;
        myForm.fatorConversao.value = 1;
    }                        
}

function valida_campos_unidade() {    
    var myForm = document.querySelector("#formCadastro");
    var sunid_compra = myForm.unidCompra.value;  
    var sunid_venda  = myForm.unidVenda.value; 
    
    if (sunid_compra == '' || sunid_compra == null) 
        $('#container-unid-compra').addClass('field-error');            
    else {
        $('#unid-compra').removeClass('is-invalid');
        $('#container-unid-compra').removeClass('field-error');
    }

    if (sunid_venda == '' || sunid_venda == null)
        $('#container-unid-venda').addClass('field-error');
    else {
        $('#unid-venda').removeClass('is-invalid');
        $('#container-unid-venda').removeClass('field-error');
    }
}

function valida_tipo_cadastro() {
    var myForm = document.querySelector("#formCadastro"); 
    var stipo_cadastro = myForm.tipoCadastro.value; 
    
    if (stipo_cadastro == 'P'){
        verifica_cod_barras();
        myForm.fatorConversao.placeholder = "Obrigatório";
    }else if (stipo_cadastro == 'S') {                                
        $('.hab-campos-prod').prop('disabled', true);
        $('.hab-campos-prod').val('');
        $('.hab-campos-serv').prop('disabled', false);

        //limpando todos os campos de busca que utilizam select2 
        //exempl. fornecedor - compra - venda                        
        $('select.select2').val('').trigger('change');
    
        clearValidation(myForm);
                
        myForm.fatorConversao.placeholder = "";       
    }      
    myForm.descricao.focus();             
}

function valida_fornecedor() {
    var fornec = document.getElementById("fornecedor").value;    

    fornec = fornec.toString();
    fornec = fornec.trim();
                
    if (fornec == ""){
        $('#container-fornec').addClass("field-error");                
    }            
    else{                                    
        $('#fornecedor').removeClass('is-invalid');
        $('#container-fornec').removeClass("field-error");                
    }                
}