# 3.1 Primeiro Script com Google Colab

## 🎯 Do Zero ao Primeiro Script de IA

O **Google Colab** é uma plataforma gratuita que permite executar código Python na nuvem. É perfeito para começar a programar com IA sem instalar nada no seu computador.

## 🚀 Acessando o Google Colab

1. **Acesse**: [colab.research.google.com](https://colab.research.google.com)
2. **Faça login** com conta Google
3. **Crie um novo notebook**
4. **Comece a programar!**

## 💰 Custos e Recursos

### **Plano Gratuito** ✅
- **12 horas** de uso contínuo
- **GPU/TPU** limitados mas suficientes
- **Armazenamento** temporário
- **Perfect para aprender**

### **Colab Pro** (Opcional)
- Mais tempo de execução
- GPUs mais potentes
- ~$10/mês

## 🔑 Configurando a API do Gemini

### Passo 1: Obter Chave da API

1. Acesse [Google AI Studio](https://aistudio.google.com)
2. Clique em **"Get API Key"**
3. **Copie a chave** (guarde em local seguro)

### Passo 2: Instalar Biblioteca

```python
# Instalar a biblioteca do Google AI
!pip install google-generativeai
```

### Passo 3: Configurar Autenticação

```python
import google.generativeai as genai

# SUBSTITUA pela sua chave API
API_KEY = "sua_chave_api_aqui"
genai.configure(api_key=API_KEY)
```

## 🤖 Seu Primeiro Script de Conversação

### Script Completo - Assistente para Revit

```python
import google.generativeai as genai

# Configuração
API_KEY = "sua_chave_api_aqui"  # SUBSTITUA por sua chave
genai.configure(api_key=API_KEY)

# Inicializar o modelo
model = genai.GenerativeModel('gemini-pro')

# Função para conversar
def conversar_com_ia(pergunta):
    try:
        # Contexto específico para Revit
        contexto = """
        Você é um especialista em Revit e automação de projetos BIM. 
        Responda de forma prática e técnica, com foco em soluções aplicáveis.
        Se for código, forneça exemplos funcionais.
        """
        
        prompt_completo = contexto + "\n\nPergunta: " + pergunta
        
        response = model.generate_content(prompt_completo)
        return response.text
        
    except Exception as e:
        return f"Erro: {e}"

# Exemplo de uso
pergunta = "Como criar um script Python para exportar todas as plantas do Revit em PDF?"

resposta = conversar_com_ia(pergunta)
print("🤖 Assistente IA:")
print(resposta)
```

### Resultado Esperado

O script deve retornar uma resposta detalhada com:
- Código Python específico para Revit
- Explicações passo a passo
- Bibliotecas necessárias
- Tratamento de erros

## 📊 Exemplo Prático: Análise de Quantitativos

### Script para Processar Dados do Revit

```python
import pandas as pd
import google.generativeai as genai

# Configuração da IA
API_KEY = "sua_chave_api_aqui"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

# Simular dados de quantitativos do Revit
dados_projeto = {
    'Elemento': ['Parede Externa', 'Parede Interna', 'Laje', 'Viga'],
    'Quantidade': [120, 80, 450, 35],
    'Unidade': ['m²', 'm²', 'm²', 'pç'],
    'Material': ['Concreto', 'Drywall', 'Concreto', 'Concreto']
}

# Criar DataFrame
df = pd.DataFrame(dados_projeto)
print("📊 Dados do Projeto:")
print(df)

# Analisar com IA
def analisar_quantitativos(dados):
    prompt = f"""
    Analise estes quantitativos de um projeto em Revit:
    
    {dados.to_string()}
    
    Forneça:
    1. Análise geral do projeto
    2. Estimativa de custo aproximado
    3. Cronograma sugerido
    4. Possíveis otimizações
    """
    
    response = model.generate_content(prompt)
    return response.text

# Executar análise
print("\n🤖 Análise da IA:")
analise = analisar_quantitativos(df)
print(analise)
```

## 🎨 Exemplo Avançado: Geração de Especificações

### Script Interativo

```python
import google.generativeai as genai

# Configuração
API_KEY = "sua_chave_api_aqui"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro')

def gerar_especificacao(elemento, uso, normas="NBR"):
    prompt = f"""
    Crie uma especificação técnica completa para:
    
    ELEMENTO: {elemento}
    USO/APLICAÇÃO: {uso}
    NORMAS: {normas}
    
    Inclua:
    - Descrição técnica
    - Materiais e componentes
    - Dimensões típicas
    - Método de instalação
    - Controle de qualidade
    - Manutenção
    
    Formato profissional para memorial descritivo.
    """
    
    response = model.generate_content(prompt)
    return response.text

# Exemplo de uso
elemento = "Fachada em vidro estrutural"
uso = "Edifício comercial, 15 pavimentos"
normas = "NBR 7199, ABNT NBR 6123"

especificacao = gerar_especificacao(elemento, uso, normas)

print("📋 ESPECIFICAÇÃO TÉCNICA GERADA:")
print("=" * 50)
print(especificacao)
```

## 🔧 Dicas de Otimização

### 1. **Gerenciamento de Tokens**
```python
# Verificar uso de tokens
def contar_tokens(texto):
    return len(texto.split()) * 1.3  # Aproximação

pergunta = "Sua pergunta aqui"
tokens_estimados = contar_tokens(pergunta)
print(f"Tokens estimados: {tokens_estimados}")
```

### 2. **Cache de Respostas**
```python
# Evitar repetir consultas caras
cache_respostas = {}

def consultar_com_cache(pergunta):
    if pergunta in cache_respostas:
        return cache_respostas[pergunta]
    
    resposta = model.generate_content(pergunta)
    cache_respostas[pergunta] = resposta.text
    return resposta.text
```

### 3. **Tratamento de Erros**
```python
def consulta_segura(pergunta, max_tentativas=3):
    for tentativa in range(max_tentativas):
        try:
            response = model.generate_content(pergunta)
            return response.text
        except Exception as e:
            print(f"Tentativa {tentativa + 1} falhou: {e}")
            if tentativa == max_tentativas - 1:
                return "Erro: Não foi possível obter resposta"
```

## 📱 Interface Simples

### Notebook Interativo

```python
# Interface simples para uso contínuo
def assistente_revit():
    print("🏗️ ASSISTENTE IA PARA REVIT")
    print("Digite 'sair' para encerrar\n")
    
    while True:
        pergunta = input("💬 Sua pergunta: ")
        
        if pergunta.lower() == 'sair':
            print("Até logo! 👋")
            break
        
        print("🤖 Pensando...")
        resposta = conversar_com_ia(pergunta)
        print(f"\n📝 Resposta:\n{resposta}\n")
        print("-" * 50)

# Executar assistente
assistente_revit()
```

## 🎯 Próximos Passos

1. **Teste todos os scripts** acima
2. **Modifique** para suas necessidades
3. **Experimente** diferentes prompts
4. **Documente** o que funciona melhor
5. **Compartilhe** com sua equipe

---

**Próximo passo**: [3.2 Exemplo 01 - PDF para DWG →](./exemplo-01-pdf-dwg)

## 💡 Exercício Prático

**Desafio**: Modifique o script de especificações para gerar automaticamente:
1. **Memorial descritivo** de um sistema construtivo
2. **Lista de materiais** com quantidades
3. **Cronograma** de execução básico

*Use sua criatividade e teste diferentes prompts!*
