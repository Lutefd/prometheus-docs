---
title: Documentações no DevPortal
description: Uma breve introdução as Documentações no DevPortal.
---

As documentações no DevPortal auxiliam os desenvolvedores a entenderem como utilizar as APIs disponíveis. Elas são compostas por uma ou mais páginas, que podem ser escritas em Markdown.

## Criando uma Documentação

Para criar uma Documentação no DevPortal, acesse o painel administrativo e clique em **Content Manager** no menu lateral esquerdo. Em seguida, clique em **Documentation** e depois em **Create new entry**.

Siga a [**referência do modelo de documentações**](/reference/documentations-model) para entender como preencher os campos da Documentação.

## Exibindo uma Documentação

As documentações são exibidas a partir de suas relações com apis, assim como podem ser expostas separadamente em todo o portal. Para relacionar uma documentação a uma api, você deverá selecionar a documentação desejada no campo **documentation** da api, conforme detalhado na [**referência do modelo das apis**](/reference/apis-model).

Para exibir uma documentação separadamente, você deverá acessar a url da documentação. A url de uma documentação é composta pelo seguinte formato:

```
${URLDOPORTAL}/docs/${id}
```

As documentações são automaticamente estilizadas pelo DevPortal, não sendo necessário nenhum tipo de configuração adicional.

![Documentation Example](/images/documentations.png)

## Documentações Externas

O DevPortal também permite que você exiba documentações externas, que não estão hospedadas no DevPortal. Para isso, você deverá preencher o url da documentação desejada no campo **documentationLink** da api, conforme detalhado na [**referência do modelo das apis**](/reference/apis-model).

**É importante notar que a documentação externa precederá a documentação interna, ou seja, se uma documentação externa for definida, a documentação interna não será exibida no card da api.**
