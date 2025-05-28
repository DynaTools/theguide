# 2.4 Problemas com Prompt

## 📚 Baseado em: Seção 5.0 completa
**Referência**: [arXiv:2406.06608](https://arxiv.org/pdf/2406.06608)

Principais problemas comuns ao trabalhar com prompts e como resolvê-los para obter melhores resultados com IA.

*[Conteúdo será adicionado pelo autor]*

**Exemplo Perigoso:**
```
Prompt: "Qual a resistência do concreto C30?"
Resposta Errada: "C30 tem resistência de 40 MPa" ❌
Resposta Correta: "C30 tem resistência de 30 MPa" ✅
```

#### ✅ Soluções
1. **Sempre validar** informações técnicas críticas
2. **Pedir referências** específicas
3. **Usar prompts de verificação**

**Prompt Melhorado:**
```
"Qual a resistência característica do concreto C30 segundo a NBR 6118? 
Cite a seção específica da norma."
```

### 2. **Inconsistência em Cálculos**

#### ❌ Problema
Resultados diferentes para o mesmo cálculo.

#### ✅ Soluções
1. **Especificar método** de cálculo
2. **Pedir verificação** passo a passo
3. **Usar exemplos** conhecidos

**Prompt Estruturado:**
```
"Calcule a área de armadura para esta viga usando o método da NBR 6118:
- Mostrar todas as etapas
- Verificar o resultado
- Confirmar se está dentro dos limites mínimos e máximos"
```

### 3. **Interpretação Ambígua**

#### ❌ Problema
LLM interpreta o prompt de forma diferente do esperado.

#### ✅ Soluções
1. **Ser específico** em terminologia
2. **Definir contexto** claramente
3. **Usar exemplos** quando necessário

**Antes:**
```
"Como fazer uma parede no Revit?"
```

**Depois:**
```
"Como criar uma parede estrutural de concreto armado 20cm no Revit 2024, 
usando o type 'Generic - 200mm' e modificando os materiais?"
```

### 4. **Limitações de Contexto**

#### ❌ Problema
LLM perde informações em conversas longas.

#### ✅ Soluções
1. **Resumir contexto** periodicamente
2. **Referenciar informações** importantes
3. **Dividir em sessões** menores

**Técnica de Resumo:**
```
"Para contexto: estamos trabalhando em um edifício residencial de 15 pavimentos,
estrutura em concreto armado, Revit 2024. Agora preciso..."
```

### 5. **Conhecimento Desatualizado**

#### ❌ Problema
LLMs têm data de corte para treinamento.

#### ✅ Soluções
1. **Verificar versões** de software
2. **Consultar documentação** oficial
3. **Testar soluções** propostas

**Prompt Consciente:**
```
"Considerando que você foi treinado até [data], esta solução ainda 
funciona no Revit 2024? Se não souber, indique onde verificar."
```

## Estratégias de Mitigação

### 1. **Validação Cruzada**
```
"Resolva este problema de 2 formas diferentes e compare os resultados"
```

### 2. **Solicitação de Fontes**
```
"Forneça a resposta e cite as normas ou referências utilizadas"
```

### 3. **Verificação de Sanidade**
```
"O resultado está dentro da faixa esperada para este tipo de elemento?"
```

### 4. **Gradação de Confiança**
```
"Em uma escala de 1-10, qual sua confiança nesta resposta? 
Se menor que 8, sugira como validar"
```

## Boas Práticas Preventivas

### ✅ Checklist Antes de Usar Respostas

1. **Crítico para Segurança?**
   - ❌ Usar sem validação
   - ✅ Verificar com especialista/norma

2. **Valores Numéricos?**
   - ❌ Aceitar sem conferir
   - ✅ Calcular manualmente ou usar software

3. **Código/Script?**
   - ❌ Executar diretamente
   - ✅ Testar em ambiente seguro

4. **Especificações Técnicas?**
   - ❌ Incluir em projeto final
   - ✅ Validar com fornecedores

### 🎯 Matriz de Confiança

| Tipo de Informação | Confiança | Ação Requerida |
|-------------------|-----------|----------------|
| Conceitos Gerais | 🟢 Alta | Usar diretamente |
| Procedimentos | 🟡 Média | Validar com manual |
| Cálculos | 🟠 Baixa | Verificar independentemente |
| Normas Específicas | 🔴 Muito Baixa | Consultar fonte oficial |

## Prompt de Verificação Template

```
VERIFICAÇÃO DE RESPOSTA:

1. Esta informação está atualizada para 2025?
2. Há riscos de segurança se estiver incorreta?
3. Posso validar independentemente?
4. Quais as fontes para confirmar?
5. Qual minha confiança na resposta (1-10)?

Se qualquer resposta for problemática, reformule o prompt ou busque validação externa.
```

---

**Próximo passo**: [3.0 Playground com Google AI Studio →](../primeiros-passos/google-ai-studio)

## 📖 Para Saber Mais

- [The Prompt Engineering Guide (PDF)](https://arxiv.org/pdf/2406.06608)
- Seção relevante: 5.0 completa sobre problemas e limitações
