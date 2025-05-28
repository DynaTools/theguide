# 2.3 Extensões de Prompt

## 📚 Baseado em: Seção 4.0 completa
**Referência**: [arXiv:2406.06608](https://arxiv.org/pdf/2406.06608)

## O que são Extensões de Prompt?

**Extensões de Prompt** são técnicas avançadas que expandem as capacidades básicas dos prompts, permitindo interações mais complexas e resultados mais precisos.

### Principais Técnicas

#### 1. **Prompt Chaining**
Dividir uma tarefa complexa em várias etapas sequenciais.

**Exemplo para Revit:**
```
Prompt 1: "Analise este modelo BIM e identifique todos os elementos estruturais"
↓
Prompt 2: "Para cada elemento identificado, calcule as dimensões e materiais"
↓
Prompt 3: "Gere relatório de quantitativos formatado para orçamento"
```

#### 2. **Role Playing**
Definir um papel específico para o LLM assumir.

**Exemplo:**
```
"Você é um engenheiro estrutural experiente com 15 anos de experiência 
em projetos de edifícios residenciais. Analise esta viga e me diga se 
as dimensões estão adequadas para a carga especificada."
```

#### 3. **Few-Shot com Templates**
Fornecer exemplos estruturados como modelos.

**Template para Especificações:**
```
ELEMENTO: [Nome]
FUNÇÃO: [Finalidade]
MATERIAL: [Especificação]
DIMENSÕES: [Medidas]
NORMAS: [Referências]
INSTALAÇÃO: [Procedimentos]

Exemplo 1:
ELEMENTO: Porta Corta-Fogo PCF-90
FUNÇÃO: Saída de emergência
MATERIAL: Aço galvanizado com núcleo mineral
DIMENSÕES: 900 x 2100 x 45mm
NORMAS: NBR 11742, IT-09/2019
INSTALAÇÃO: Conforme manual do fabricante

Agora crie para: Janela de alumínio com vidro duplo
```

#### 4. **Self-Consistency**
Pedir múltiplas respostas e comparar consistência.

**Exemplo:**
```
"Calcule a carga desta viga de 3 formas diferentes e compare os resultados:
1. Método das cargas distribuídas
2. Método dos elementos finitos simplificado  
3. Método das tensões admissíveis

Viga: W200x31, vão 6m, carga 15kN/m"
```

*[Conteúdo será expandido conforme referência completa]*

---

**Próximo passo**: [2.4 Problemas com Prompt →](./problemas-prompt)

## 📖 Para Saber Mais

- [The Prompt Engineering Guide (PDF)](https://arxiv.org/pdf/2406.06608)
- Seção relevante: 4.0 completa sobre extensões avançadas
