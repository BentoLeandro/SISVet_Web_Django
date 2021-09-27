function verifica_cod_barras() { 
    var myForm = document.querySelector("#formCadastro");            
    var codbarras = myForm.codBarras.value;
    var bcod_barras_produto = true;

    codbarras = codbarras.toString();
    codbarras = codbarras.trim();
    
    if (codbarras == "") {
        $('#cod-barras').valid();
        myForm.codBarras.focus();
        return false;
    }        
    
    //verifica si a variavel possui texto
    if (isNaN(codbarras) == false) {            
        bcod_barras_produto = true;
        //alert('o codigo de barras é numero');
        //return false;
    }    
    else{
        //alert('o codigo de barras é numero');
        bcod_barras_produto = false;
        //return false;
    }
        
    if (bcod_barras_produto == true) {                
        if (codbarras.length < 12 ){
            //alert('o codigo de barras é menor que 12');
            $('#cod-barras').valid();
            myForm.codBarras.focus(); 
            return false;
        } 

        myForm.tipoCadastro.value = 'P'; 
        myForm.ctrlLote.value = 'S';
        $('#tipo-unid-comp-vda').val(0);
        valida_tipos_unid_comp_vda();               

        if (codbarras.length == 12)                           
            codbarras = '0' + codbarras;                
        myForm.codBarras.value = codbarras;
        habilita_campos();
    }
    else {
        myForm.tipoCadastro.value = 'S'; //document.getElementById("tipo-cadastro").value = 'S';
        myForm.ctrlLote.value = 'N'; //document.getElementById("ctrl-lote").value = 'N';
        valida_tipo_cadastro();
    }
        
    myForm.codBarras.disabled = true;
    myForm.bibPontos.disabled = true;
    myForm.btnSalvar.disabled = false;
}