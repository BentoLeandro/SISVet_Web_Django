from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import ProdutoImpl
from django.contrib import messages
#from django import datetime

# Create your views here.
def CadProduto_Impl(request):
   
   messages.error(request, 'Teste de mensagem de Erro...')

   produtosImpl = ProdutoImpl.objects.order_by('id').filter(
      situacao='A'
   )

   if request.method != 'POST':
      produtosImpl = ProdutoImpl.objects.order_by('id').filter(
      situacao='A'
      )
      return render(request, 'cadastro/cadproduto_impl.html',{'produtos': produtosImpl})   

   sdescricao = request.POST.get('descricao')
   
   stipo_cadastro = request.POST.get('tipoCadastro') 
   sfornecedor = request.POST.get('fornecedor')
   iunid_compra = request.POST.get('unidCompra')
   iunid_venda = request.POST.get('unidVenda')
   ifator_conver = request.POST.get('fatorConversao')
   scod_barras = request.POST.get('codbarras')
   ddata_validade = request.POST.get('validade')
   npreco_custo_caixa = request.POST.get('precoCustoProdServ')
   npreco_venda_caixa = request.POST.get('precoVdaCaixa') 

   if len(scod_barras) == 0:
      messages.error(request, 'O campo Código de Barras precisa ser informado!')
      return render(request, 'cadastro/cadproduto_impl.html',{'produtos': produtosImpl})
      
   if sdescricao is None or sdescricao:
      messages.error(request, 'O campo Descrição precisa ser informado!')
      return render(request, 'cadastro/cadproduto_impl.html',{'produtos': produtosImpl})

   if stipo_cadastro == 'P':
      if len(sfornecedor) == 0:
         messages.error(request, 'O campo Fornecedor precisa ser informado!')
         return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})

      if iunid_compra == 0:
         messages.error(request, 'O campo Unidade de Compra precisa ser informada!')
         return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})      

      if iunid_venda == 0:
         messages.error(request, 'O campo Unidade de Venda precisa ser informada!')
         return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})

      if iunid_compra != iunid_venda:
         if ifator_conver == 0 or ifator_conver == None:
            messages.error(request, 'O campo Fator de Conversão precisa ser informado!')
            return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})

         if ifator_conver <= 1:
            messages.error(request, 'Quando os campos Unidade de Compra e Unidade de Venda '\
                                    'forem diferentes o Fator de Conversão deve ser maior do que 1 !')      
            return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl}) 

      if len(ddata_validade) != 0:
         if ddata_validade < datetime.now().date():
            messages.error(request,'O campo Validade não pode ser menor do que a Data Atual!')
            return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})
   else:      
      if npreco_custo_caixa < 0:
         messages.error(request, 'O campo Preço de Custo precisa ser informado!')
         return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})

      if npreco_venda_caixa < 0:
         messages.error(request,'O campo Preço de Venda precisa ser informado!')
         return render(request, 'cadastro/cadproduto_impl.html', {'produtos': produtosImpl})   

   
   return render(request, 'cadastro/cadproduto_impl.html',{'produtos': produtosImpl})
