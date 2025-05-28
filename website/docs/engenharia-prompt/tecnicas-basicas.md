# 2.1 Técnicas Básicas de Prompting

## 📚 Baseado em: Seção 2.0 completa
**Referência**: [arXiv:2406.06608](https://arxiv.org/pdf/2406.06608)

## Técnicas Fundamentais

### 1. Zero-Shot Prompting
A técnica mais básica - fazer uma pergunta direta sem exemplos.

**Exemplo para Revit:**
```
Prompt: "Crie um script Python para exportar todas as vistas 3D do projeto em PNG"

[Resposta do LLM com código completo]
```

### 2. Few-Shot Prompting
Fornecer exemplos para guiar a resposta.

**Exemplo:**
```
Prompt: "Crie especificações técnicas seguindo este padrão:

Exemplo 1:
ELEMENTO: Porta P1
MATERIAL: Madeira maciça
DIMENSÕES: 80x210cm
ACABAMENTO: Verniz natural

Exemplo 2:
ELEMENTO: Janela J1  
MATERIAL: Alumínio anodizado
DIMENSÕES: 120x100cm
ACABAMENTO: Branco

Agora crie para: Portão de garagem automático"
```

### 3. Chain-of-Thought
Pedir para o LLM "pensar passo a passo".

**Exemplo:**
```
Prompt: "Preciso dimensionar uma viga de concreto armado. 
Pense passo a passo:
- Vão: 6 metros
- Carga: 800 kgf/m
- Concreto: C25
- Aço: CA-50

Mostre todos os cálculos."
```

*[Conteúdo será expandido conforme referência completa]*

---

**Próximo passo**: [2.2 Prompts em Inglês →](./prompts-ingles)

## 📖 Para Saber Mais

- [The Prompt Engineering Guide (PDF)](https://arxiv.org/pdf/2406.06608)
- Seção relevante: 2.0 completa sobre técnicas básicas
