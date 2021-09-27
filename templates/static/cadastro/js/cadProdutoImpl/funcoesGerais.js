function habilita_campos() {
    //document.getElementsByClassName("form-control")[0].disabled = false;
    var campos = document.getElementsByClassName("hab-campos");
    for (var i = 0; i < campos.length; i++){
        campos[i].disabled = false;
    }
}

function desabilita_campos() {
    //document.getElementsByClassName("form-control")[0].disabled = true;
    var campos = document.getElementsByClassName("hab-campos");
    for (var i=0; i < campos.length; i++){
        campos[i].disabled = true;
    }
}

function remove_ponto_vlr(pvalor) {            
    var nvlr = parseFloat(pvalor.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
    return nvlr;
}

function formato_moeda(pvalor, pcampo) {
    if (pcampo == 'S') 
        var nvlr = pvalor.value.replace(/\D/g, '');
    else
        var nvlr = pvalor.replace(/\D/g, '');
            
    nvlr = (nvlr/100).toFixed(2)+'';
    nvlr = nvlr.replace('.', ',');
    nvlr = nvlr.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    nvlr = nvlr.replace(/(\d)(\d{3}),/g, "$1.$2,");

    if (pcampo == 'S')           
        pvalor.value = nvlr;	        
    else            
        return nvlr;                                           
}

function clearValidation(formElement){
    //Internal $.validator is exposed through $(form).validate()
    var validator = $(formElement).validate();
    //Iterate through named elements inside of the form, and mark them as error free
    $('[name]',formElement).each(function(){
        validator.successList.push(this);//mark as error free
        validator.showErrors();//remove error messages if present
    });

    $('.is-invalid').removeClass('is-invalid');
    $('.field-error').removeClass('field-error');

    validator.resetForm();//remove error class on name elements and clear history
    validator.reset();//remove all error and success data
}

$.validator.addMethod("qtde_codbarras", function(value, element){
    if (isNaN(value) == false) {                                           
        if (value.length < 12 ){                    
            return false; //quando o retorno for false será exibido a msg de erro...
        }
        else {
            return true;
        }                            
    }    
    else{
        return true;
    }

}, "O código de barras é menor que 12 caracteres!")

$.validator.addMethod("valor_fator_conversao", function(value, element){
    var sunid_compra = $('#unid-compra').val(); 
    var sunid_venda = $('#unid-venda').val(); 
    var ifator_conver = $('#fator-conversao').val();
            
    if (sunid_compra != sunid_venda) {                
        if (value <= 1){                    
            return false; //quando o retorno for false será exibido a msg de erro...
        }                    
        else
            return true;    
    }        
}, "O Campo deve ser maior do que 1 !")

//validação dos campos
//depois que carregar a pagina será adicionada as validações
//$(function(){        
$("#formCadastro").validate({
    rules: {
        codBarras: {
            required: true,
            qtde_codbarras: true                                               
        },
        tipoCadastro: {
            required: true
        },
        descricao: {
            required: true
        },
        fornecedor: {
            required: true
        },
        fatorConversao: {
            required: true,                       
            valor_fator_conversao : true
        }
    },
    messages: {
        codBarras: {
            required: "O campo Código de Barras é obrigatório!",                  
        },
        tipoCadastro: {
            required: "O campo precisa ser informado!"
        },
        descricao: {
            required: "O campo precisa ser informado!"
        },
        fornecedor: {
            required: "O campo precisa ser informado!"
        },
        fatorConversao: {
            required: "O campo precisa ser informado!",
            number: "Digite somente números inteiros!"
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group-sm').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
})
