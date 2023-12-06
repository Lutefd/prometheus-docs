---
title: Modelo do FAQ
description: Entenda como editar os modelos relacionados ao FAQ
---

O FAQ é o primeiro contato de seus usuários com o suporte de sua plataforma, o conteúdo deve conciso e abrangente. Ele é composto por uma lista de perguntas e respostas. Cada pergunta e resposta é um conteúdo separado, que pode ser gerenciado no Content Manager.

## Modelo Básico

O modelo da coleção **FAQ** é composto por dois tipos de conteúdo:

- **QNAs**: Perguntas e respostas. Esse tipo de conteúdo é utilizado para criar as perguntas e respostas do FAQ.
- **Category**: Categorias. Esse tipo de conteúdo é utilizado para criar as categorias do FAQ e associar as perguntas e respostas aos tópicos gerais.

### QNAs

O modelo da coleção **QNAs** é composto pelos seguintes campos:

![Modelo das QNAs](/images/qnas-model.png)

- **question**: Pergunta. Esse campo é utilizado para exibir a pergunta no FAQ.
- **answer**: Resposta. Esse campo é utilizado para exibir a resposta no FAQ.
- **slug**: Slug. Esse campo é utilizado para identificar a pergunta e deve ser único. Ele é utilizado para indexar a pergunta na busca do FAQ. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher a pergunta**.
  ![Slug](//images/slug.png)

### Categorias

O modelo da coleção **Category** é composto pelos seguintes campos:

![Modelo das Categorias](/images/category-model.png)

- **title**: Título da categoria. Esse campo é utilizado para identificar a categoria no FAQ e deve ser único.
- **description**: Descrição da categoria. Esse campo é utilizado para descrever a categoria no FAQ.
- **qnas**: Lista de perguntas e respostas. Esse campo é utilizado para relacionar as perguntas e respostas com as categorias.
- **slug**: Slug. Esse campo é utilizado para identificar a categoria e deve ser único. Ele é utilizado para indexar a categoria na busca do FAQ. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher a categoria**.
  ![Slug](/images/slug.png)
