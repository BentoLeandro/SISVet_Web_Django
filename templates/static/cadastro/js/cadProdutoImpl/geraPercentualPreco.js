function gera_percentual_caixa() {
    var npreco_custo_caixa = $('#preco-custo-prod-serv').val();
    var npreco_vda_caixa   = $('#prc-vda-caixa').val();
    var nvalor_total_caixa = $('#prc-vda-caixa').val();
    var nlucro_caixa = $('#perc-lucro-caixa').val();
    var npercentual_caixa = 0.0;

    if (npreco_custo_caixa == '' || npreco_custo_caixa == null) 
        npreco_custo_caixa = 0;            
    else 
        npreco_custo_caixa = remove_ponto_vlr(npreco_custo_caixa);

    if (npreco_vda_caixa == '' || npreco_vda_caixa == null)
        npreco_vda_caixa = 0;
    else
        npreco_vda_caixa = remove_ponto_vlr(npreco_vda_caixa);

    if (nlucro_caixa == '' || nlucro_caixa == null)
        nlucro_caixa = 0;
    else
        nlucro_caixa = parseFloat(nlucro_caixa);                 

    if (npreco_vda_caixa > npreco_custo_caixa && npreco_custo_caixa > 0) {
        npercentual_caixa = ((npreco_vda_caixa - npreco_custo_caixa) / npreco_custo_caixa) * 100;                    
        npercentual_caixa = npercentual_caixa.toFixed(2);                

        if (parseFloat(npercentual_caixa) == nlucro_caixa)
            $('#perc-lucro-caixa').val(npercentual_caixa);
        else {
            nvalor_total_caixa = nvalor_total_caixa + ((nvalor_total_caixa / 100) * nlucro_caixa);    

            if (nvalor_total_caixa == npreco_vda_caixa)
                $('#perc-lucro-caixa').val(nlucro_caixa);
            else{                        
                npercentual_caixa = npercentual_caixa.replace('.',',');
                $('#perc-lucro-caixa').val(npercentual_caixa+' %');
            }                            
        }                        
    }
    else
        $('#perc-lucro-caixa').val('');                    
}

function gera_percentual_fracionado() {
    var npreco_custo_frac = $('#prc-custo-frac').val();
    var npreco_vda_frac = $('#prc-vda-frac').val();
    var nvalor_total_frac = $('#prc-vda-frac').val();
    var nlucro_frac = $('#perc-lucro-frac').val();
    var npercentual_frac = 0.0;

    //$('#perc-lucro-frac').val('');

    if (npreco_custo_frac == '' || npreco_custo_frac == null)
        npreco_custo_frac = 0;
    else
        npreco_custo_frac = remove_ponto_vlr(npreco_custo_frac);

    if (npreco_vda_frac == '' || npreco_vda_frac == null)
        npreco_vda_frac = 0;
    else
        npreco_vda_frac = remove_ponto_vlr(npreco_vda_frac);

    if (nlucro_frac == '' || nlucro_frac == null) 
        nlucro_frac = 0;
    else                
        nlucro_frac = parseFloat(nlucro_frac);
    
    if (npreco_vda_frac > npreco_custo_frac && npreco_custo_frac > 0) {
        npercentual_frac = ((npreco_vda_frac - npreco_custo_frac) / npreco_custo_frac) * 100;                                
        npercentual_frac = npercentual_frac.toFixed(2);                

        if (parseFloat(npercentual_frac) == nlucro_frac)
            $('#perc-lucro-frac').val(npercentual_frac);
        else {
            nvalor_total_frac = nvalor_total_frac + ((nvalor_total_frac/100) * nlucro_frac);

            if (nvalor_total_frac == npreco_vda_frac)
                $('#perc-lucro-frac').val(nlucro_frac);
            else{                      
                npercentual_frac = npercentual_frac.replace('.',',');
                $('#perc-lucro-frac').val(npercentual_frac+' %');        
            }                            
        }         
    }
    else
        $('#perc-lucro-frac').val('');
}
