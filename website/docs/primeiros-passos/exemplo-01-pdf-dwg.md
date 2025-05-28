# 3.2 Exemplo 01 - Convertendo PDF para DWG

## 🎯 Problema Real: PDF Legado para DWG

**Situação comum**: Você recebeu plantas antigas em PDF e precisa convertê-las para DWG para usar como base no Revit.

**Solução**: Usar IA para automatizar o processo e melhorar a qualidade da conversão.

## 🛠️ Ferramentas Necessárias

### Online (Gratuito)
- **Google Colab** - Para executar o código
- **PyPDF2** - Para manipular PDFs
- **OpenCV** - Para processamento de imagem
- **IA para análise** - Gemini via API

### Instalação

```python
# Execute no Google Colab
!pip install PyPDF2 opencv-python-headless pillow google-generativeai
```

## 📝 Script Completo - PDF para DWG

### Parte 1: Preparação e Upload

```python
import cv2
import numpy as np
from PIL import Image
import google.generativeai as genai
from google.colab import files
import os

# Configurar IA
API_KEY = "sua_chave_api_aqui"  # SUBSTITUA
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-pro-vision')

# Upload do arquivo PDF
print("📁 Faça upload do arquivo PDF:")
uploaded = files.upload()

# Pegar o nome do arquivo
pdf_name = list(uploaded.keys())[0]
print(f"✅ Arquivo carregado: {pdf_name}")
```

### Parte 2: Conversão PDF para Imagem

```python
import fitz  # PyMuPDF
!pip install PyMuPDF

def pdf_para_imagens(pdf_path, dpi=300):
    """
    Converte PDF para imagens de alta qualidade
    """
    doc = fitz.open(pdf_path)
    imagens = []
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        
        # Converter para imagem em alta resolução
        mat = fitz.Matrix(dpi/72, dpi/72)  # 300 DPI
        pix = page.get_pixmap(matrix=mat)
        
        # Salvar como array numpy
        img_data = pix.tobytes("png")
        img = Image.open(io.BytesIO(img_data))
        imagens.append(np.array(img))
        
        print(f"📄 Página {page_num + 1} convertida")
    
    doc.close()
    return imagens

# Converter PDF
imagens = pdf_para_imagens(pdf_name)
print(f"✅ {len(imagens)} páginas convertidas")
```

### Parte 3: Processamento de Imagem com IA

```python
def analisar_planta_com_ia(imagem):
    """
    Usa IA para analisar e identificar elementos da planta
    """
    # Converter para formato adequado
    img_pil = Image.fromarray(imagem)
    
    prompt = """
    Analise esta planta arquitetônica e identifique:
    
    1. ELEMENTOS PRINCIPAIS:
       - Paredes (espessura aproximada)
       - Portas (localização e tipo)
       - Janelas (dimensões estimadas)
       - Cotas e dimensões
       - Textos e legendas
    
    2. ESCALA E ORIENTAÇÃO:
       - Escala indicada
       - Norte (se houver)
       - Unidades utilizadas
    
    3. QUALIDADE DA IMAGEM:
       - Legibilidade dos textos
       - Nitidez das linhas
       - Elementos que podem causar problema na conversão
    
    4. SUGESTÕES PARA CONVERSÃO:
       - Quais elementos precisam de ajuste manual
       - Ordem de prioridade para traçado
       - Possíveis problemas na conversão automática
    
    Seja específico e técnico na análise.
    """
    
    try:
        response = model.generate_content([prompt, img_pil])
        return response.text
    except Exception as e:
        return f"Erro na análise: {e}"

# Analisar primeira página
print("🤖 Analisando planta com IA...")
analise = analisar_planta_com_ia(imagens[0])
print("\n📋 ANÁLISE DA IA:")
print("=" * 50)
print(analise)
```

### Parte 4: Preparação para DWG

```python
def preparar_para_dwg(imagem, analise_ia):
    """
    Processa a imagem baseado na análise da IA
    """
    # Converter para escala de cinza
    gray = cv2.cvtColor(imagem, cv2.COLOR_RGB2GRAY)
    
    # Aplicar filtros para melhorar linhas
    # Suavização para reduzir ruído
    blur = cv2.GaussianBlur(gray, (3, 3), 0)
    
    # Detectar bordas (linhas da planta)
    edges = cv2.Canny(blur, 50, 150, apertureSize=3)
    
    # Detecção de linhas usando Hough Transform
    lines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=100, 
                           minLineLength=50, maxLineGap=10)
    
    # Criar imagem com linhas detectadas
    linha_img = np.zeros_like(imagem)
    if lines is not None:
        for line in lines:
            x1, y1, x2, y2 = line[0]
            cv2.line(linha_img, (x1, y1), (x2, y2), (255, 255, 255), 2)
    
    return {
        'original': imagem,
        'processada': gray,
        'edges': edges,
        'linhas': linha_img,
        'detalhes_linhas': len(lines) if lines is not None else 0
    }

# Processar imagem
resultado = preparar_para_dwg(imagens[0], analise)
print(f"✅ Processamento concluído")
print(f"📏 {resultado['detalhes_linhas']} linhas detectadas")
```

### Parte 5: Gerar Instruções para DWG

```python
def gerar_instrucoes_dwg(analise_ia, dados_processamento):
    """
    Gera instruções detalhadas para criar o DWG
    """
    prompt = f"""
    Com base nesta análise da planta:
    
    {analise_ia}
    
    E estes dados de processamento:
    - Linhas detectadas: {dados_processamento['detalhes_linhas']}
    
    Crie um ROTEIRO DETALHADO para desenhar esta planta no AutoCAD/DWG:
    
    1. CONFIGURAÇÃO INICIAL:
       - Unidades de desenho
       - Limites do desenho
       - Layers necessários
    
    2. ORDEM DE DESENHO:
       - Sequência otimizada de elementos
       - Comandos específicos do AutoCAD
       - Coordenadas aproximadas
    
    3. LAYERS SUGERIDOS:
       - Paredes
       - Portas/Janelas
       - Cotas
       - Textos
       - etc.
    
    4. COMANDOS AUTOCAD:
       - Lista dos comandos principais
       - Parâmetros recomendados
       - Atalhos úteis
    
    5. VERIFICAÇÃO FINAL:
       - Checklist de qualidade
       - Elementos a conferir manualmente
    
    Formate como um manual passo-a-passo.
    """
    
    response = model.generate_content(prompt)
    return response.text

# Gerar instruções
print("🤖 Gerando instruções para DWG...")
instrucoes = gerar_instrucoes_dwg(analise, resultado)
print("\n📋 INSTRUÇÕES PARA DWG:")
print("=" * 50)
print(instrucoes)
```

### Parte 6: Download dos Resultados

```python
import io
from google.colab import files

def salvar_resultados(original, processada, instrucoes, analise):
    """
    Salva todos os resultados para download
    """
    # Salvar imagem processada
    cv2.imwrite('planta_processada.png', processada)
    
    # Salvar instruções em arquivo texto
    with open('instrucoes_dwg.txt', 'w', encoding='utf-8') as f:
        f.write("INSTRUÇÕES PARA CONVERSÃO PDF → DWG\n")
        f.write("=" * 50 + "\n\n")
        f.write("ANÁLISE DA PLANTA:\n")
        f.write(analise + "\n\n")
        f.write("ROTEIRO DE CONVERSÃO:\n")
        f.write(instrucoes)
    
    # Salvar análise separada
    with open('analise_ia.txt', 'w', encoding='utf-8') as f:
        f.write(analise)
    
    print("✅ Arquivos salvos:")
    print("- planta_processada.png")
    print("- instrucoes_dwg.txt")
    print("- analise_ia.txt")

# Salvar resultados
salvar_resultados(imagens[0], resultado['processada'], instrucoes, analise)

# Download dos arquivos
files.download('planta_processada.png')
files.download('instrucoes_dwg.txt')
files.download('analise_ia.txt')
```

## 🎯 Exemplo de Saída Esperada

### Análise da IA:
```
ELEMENTOS PRINCIPAIS IDENTIFICADOS:
✅ Paredes externas: espessura ~20cm
✅ Paredes internas: espessura ~10cm  
✅ 8 portas identificadas
✅ 12 janelas com dimensões variadas
✅ Cotas em metros
✅ Escala 1:100