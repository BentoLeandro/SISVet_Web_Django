function verifica_btn_salvar() {
    var stipo_cadastro = $('#tipo-cadastro').val();

    if (stipo_cadastro == 'P'){
        var sunid_compra = $('#unid-compra').val(); 
        var sunid_venda = $('#unid-venda').val();
        var ifator_conver = $('#fator-conversao').val();

        if (ifator_conver == '' || ifator_conver == null)
            ifator_conver = 0;
        else
            ifator_conver = parseFloat(ifator_conver);

        valida_fornecedor();
        valida_campos_unidade();

        //$('#fator-conversao').valid();
        $("#formCadastro").valid();                

    }              
}