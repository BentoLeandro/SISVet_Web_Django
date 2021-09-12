from django.contrib import admin
from .models import Cidade, Unidade, Fornecedor, ProdutoImpl

class FornecedorAdmin(admin.ModelAdmin):
    list_display = ('nome', 'logradouro', 'numero', 'UF')

class CidadeAdmin(admin.ModelAdmin):
    list_display = ('id', 'estado', 'descricao')
    list_display_links = ('id', 'estado', 'descricao')
    list_filter = ('estado', 'descricao')
    list_per_page = 10

class UnidadeAdmin(admin.ModelAdmin):
    list_display = ('id', 'descricao', 'unidade')    

class ProdutoImplAdmin(admin.ModelAdmin):
    list_display = ('id', 'descricao', 'tipo_cadastro', 'estoq_disp', 'estoq', 'qtde_minimo', 'data_validade', 'situacao')
    list_editable = ('situacao',)
    list_per_page = 10

admin.site.register(Cidade, CidadeAdmin)
admin.site.register(Fornecedor, FornecedorAdmin)
admin.site.register(Unidade, UnidadeAdmin)
admin.site.register(ProdutoImpl, ProdutoImplAdmin)
