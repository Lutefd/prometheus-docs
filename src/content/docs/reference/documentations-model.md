---
title: Modelo das Documentações
description: Entenda como editar o modelo das Documentações
---

As documentações são um dos principais conteúdos do DevPortal. Elas são exibidas a partir de suas relações com apis, assim como podem ser expostas separadamente em todo o portal. As documentações são compostas por um modelo, que define como elas são exibidas no DevPortal. A escrita das documentações é feita em Markdown, para mais informações sobre como escrever em Markdown, consulte o [a sintaxe básica da linguagem](https://www.markdownguide.org/basic-syntax/).

## Modelo Básico

O modelo da coleção **Documentation** é composto pelos seguintes campos:

![Modelo das Documentações](/src/assets/images/documentations-model.png)

- **docs**: Documentação. Esse campo é utilizado para escrever a documentação em Markdown.

O modelo da coleção **Documentation** tem apenas esse campo pois por design deve ser associado a uma api, e a partir dela é possível acessar a documentação.

Para utilização da documentação desacoplada de uma api, é necessário entrar em contato com a Sensedia para que seja exposta no DevPortal.
