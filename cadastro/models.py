from django.db import models
from django.db.models.deletion import DO_NOTHING
from django.db.models.fields import BLANK_CHOICE_DASH, CharField

"""
    PRO_CODIGO                      INTEGER NOT NULL,
    PRO_DESCRICAO                   VARCHAR(60),
    PRO_PRECO_CUSTO_CAIXA           NUMERIC(14,2),
    PRO_ESTOQ_DISP                  NUMERIC(8,0),
    PRO_ESTOQ                       NUMERIC(8,0),
    PRO_QTDE_MINIMO                 NUMERIC(8,0),
    PRO_PERC_COMISSAO               NUMERIC(14,2),
    PRO_PROD_PROMOCAO               VARCHAR(1),
    PRO_SITUACAO                    VARCHAR(1),
    PRO_FORNEC                      INTEGER,
    PRO_PRECO_VENDA_CAIXA           NUMERIC(14,2),
    PRO_UNIDADE_COMPRA              INTEGER,
    PRO_UNIDADE_VENDA               INTEGER,
    PRO_FATOR_CONVER                INTEGER,
    PRO_PERC_LUCRO_PROD_CAIXA       NUMERIC(6,2),
    PRO_TIPO_CADASTRO               VARCHAR(1),
    PRO_COD_BARRAS                  VARCHAR(40),
    PRO_PADRAO_CB                   VARCHAR(20),
    PRO_PRECO_CUSTO_FRACIONADO      NUMERIC(14,2),
    PRO_PRECO_VENDA_FRACIONADO      NUMERIC(14,2),
    PRO_PERC_LUCRO_PROD_FRACIONADO  NUMERIC(6,2),
    PRO_DATA_VALIDADE               DATE,
    PRO_CTRL_LOTE                   VARCHAR(1) DEFAULT 'S'
"""
class Cidade(models.Model):
    estado = models.CharField(max_length=2)
    descricao = models.CharField(max_length=70)

    def __str__(self):
        return self.descricao

class Fornecedor(models.Model):
    nome = models.CharField(max_length=70)        
    logradouro = models.CharField(max_length=60)
    numero = models.IntegerField()
    UF     = models.CharField(max_length=2)
    cidade = models.ForeignKey(Cidade, on_delete=DO_NOTHING)
    bairro = models.CharField(max_length=60)
    CEP    = models.CharField(max_length=15)
    email  = models.CharField(max_length=60)
    fone   = models.CharField(max_length=15)
    tipo   = models.CharField(max_length=60)
    CPF = models.CharField(max_length=15)
    RG  = models.CharField(max_length=15)
    data_nascimento = models.DateTimeField()
    SEXO = models.CharField(max_length=1)    
    CNPJ = models.CharField(max_length=20)
    insc_estadual = models.CharField(max_length=20)
    nome_fantasia = models.CharField(max_length=60)
    nome_contato  = models.CharField(max_length=60)
    situacao = models.CharField(max_length=1)

    def __str__(self):
        return self.nome
    
class Unidade(models.Model):
    descricao = models.CharField(max_length=60)
    situacao  = models.CharField(max_length=1)
    unidade   = models.CharField(max_length=10)    

class ProdutoImpl(models.Model):
    descricao = models.CharField(max_length=100)
    tipo_cadastro = models.CharField(max_length=1)
    ctrl_lote = models.CharField(max_length=1, default='S')        
    estoq_disp  = models.FloatField(blank=True) #blank= True deixa o campo opcional
    estoq       = models.FloatField(blank=True)
    qtde_minimo = models.FloatField(blank=True)
    perc_comissao = models.FloatField(blank=True)
    prod_promocao = models.CharField(max_length=1, blank=True)
    situacao      = models.CharField(max_length=1)
    padrao_cb  = models.CharField(max_length=20)
    cod_barras = models.CharField(max_length=40)
    cod_fornec    = models.ForeignKey(Fornecedor, on_delete=models.DO_NOTHING)             
    preco_custo_caixa = models.FloatField()
    perc_lucro_prod_caixa = models.FloatField()
    preco_venda_caixa  = models.FloatField()
    cod_unidade_compra = models.ForeignKey(Unidade, on_delete=DO_NOTHING, related_name='unidadeCompra')
    cod_unidade_venda  = models.ForeignKey(Unidade, on_delete=DO_NOTHING, related_name='unidadeVenda')
    fator_conversao    = models.IntegerField()    
    preco_custo_fracionado     = models.FloatField(blank=True)
    perc_lucro_prod_fracionado = models.FloatField(blank=True)
    preco_venda_fracionado     = models.FloatField(blank=True)    
    data_validade = models.DateTimeField()
    

    