function gera_preco_venda_caixa() {            
    var nvlr_total_caixa = $('#preco-custo-prod-serv').val();
    var nperc_lucro_caixa = $('#perc-lucro-caixa').val();
                
    if (nvlr_total_caixa == '' || nvlr_total_caixa == null || parseFloat(nvlr_total_caixa) == 0) {
        $('#preco-custo-prod-serv').val(0);
        nvlr_total_caixa = 0;
    }
    else
        nvlr_total_caixa = remove_ponto_vlr(nvlr_total_caixa);
                                                            
    if (nperc_lucro_caixa == '' || nperc_lucro_caixa == null){
        $('#perc-lucro-caixa').val(0);
        nperc_lucro_caixa = 0;
    }                 
    else
        nperc_lucro_caixa = remove_ponto_vlr(nperc_lucro_caixa);    
    
    if ((nvlr_total_caixa > 0) && (nperc_lucro_caixa == 0)) {
        $('#perc-lucro-caixa').val(100);
        nperc_lucro_caixa = 100;
    } 

    if (nperc_lucro_caixa > 0) {                
        nvlr_total_caixa = parseFloat(nvlr_total_caixa) + parseFloat((nvlr_total_caixa/100) *
                                                nperc_lucro_caixa);                
    
        //arredonda o valor para 2 casas decimais e 
        //converte para string
        nvlr_total_caixa = nvlr_total_caixa.toFixed(2); 
                                                    
        //a função formato_moeda precisa receber o valor com formato string. 
        //caso nao seja utilizado toFixed(2) deve passar a variavel+'' para converter.            
        nvlr_total_caixa = formato_moeda(nvlr_total_caixa,'N');            
    }
                
    $('#prc-vda-caixa').val(nvlr_total_caixa);                        
}

function gera_preco_custo_fracionado() {
    var npreco_custo_frac = 0;
    var ifator_conversao = $('#fator-conversao').val();
    var npreco_custo_caixa = $('#preco-custo-prod-serv').val();
    
    if (npreco_custo_caixa == '' || npreco_custo_caixa == null)
        npreco_custo_caixa = 0;                
    else
        npreco_custo_caixa = remove_ponto_vlr(npreco_custo_caixa); 

    if (ifator_conversao > 1 && npreco_custo_caixa > 0) {
                        
        npreco_custo_frac = npreco_custo_caixa / parseInt(ifator_conversao,10);
        
        //arredonda o valor para 2 casas decimais e 
        //converte para string
        npreco_custo_frac = npreco_custo_frac.toFixed(2)
        
        //a função formato_moeda precisa receber o valor com formato string. 
        //caso nao seja utilizado toFixed(2) deve passar a variavel+'' para converter.
        npreco_custo_frac = formato_moeda(npreco_custo_frac,'N');                
    }

    $('#prc-custo-frac').val(npreco_custo_frac);                        
}

function gera_preco_venda_fracionado() {        
    var nvlr_total_frac = $('#prc-custo-frac').val();
    var nperc_lucro_frac = $('#perc-lucro-frac').val();               

    if (nvlr_total_frac == '' || nvlr_total_frac == null || nvlr_total_frac == 0) {
        $('#prc-custo-frac').val(0);
        nvlr_total_frac = 0;
    }
    else
        nvlr_total_frac = remove_ponto_vlr(nvlr_total_frac);              
    
    if (nperc_lucro_frac == '' || nperc_lucro_frac == null){
        $('#perc-lucro-frac').val(0);
        nperc_lucro_frac = 0;
    }                 
    else
        nperc_lucro_frac = remove_ponto_vlr(nperc_lucro_frac);
                          
    if (nvlr_total_frac > 0 && nperc_lucro_frac == 0) {
        $('#perc-lucro-frac').val(100);
        nperc_lucro_frac = 100;
    }
    
    if (nperc_lucro_frac > 0) {             
        nvlr_total_frac = parseFloat(nvlr_total_frac) + parseFloat((nvlr_total_frac/100) *
                                              nperc_lucro_frac);                                      
    
        //arredonda o valor para 2 casas decimais e 
        //converte para string                                  
        nvlr_total_frac = nvlr_total_frac.toFixed(2);            
    
        //a função formato_moeda precisa receber o valor com formato string. 
        //caso nao seja utilizado toFixed(2) deve passar a variavel+'' para converter.                        
        nvlr_total_frac = formato_moeda(nvlr_total_frac,'N');
    }
                                        
    $('#prc-vda-frac').val(nvlr_total_frac);                            
}

function valida_fator_conversao() {
    var ifator_conver = $('#fator-conversao').val();

    //retirando ponto ou virgula do input
    $('#fator-conversao').val("");
    $('#fator-conversao').val(parseInt(ifator_conver));       

    ifator_conver = ifator_conver.toString();

    if (ifator_conver == 1) {
        $('#prc-custo-frac').prop('disabled', true);
        $('#perc-lucro-frac').prop('disabled', true);
        $('#prc-vda-frac').prop('disabled', true);
        
        gera_preco_venda_caixa();
        $('#prc-custo-frac').val('');
        $('#perc-lucro-frac').val('');
        $('#prc-vda-frac').val('');
    }
    else if (ifator_conver > 1) {
        $('#prc-custo-frac').prop('disabled', false);
        $('#perc-lucro-frac').prop('disabled', false);
        $('#prc-vda-frac').prop('disabled', false);    

        gera_preco_venda_caixa();
        gera_preco_custo_fracionado();
        gera_preco_venda_fracionado();
    }                    
}