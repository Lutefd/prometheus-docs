---
title: Modelo dos Produtos
description: Entenda como editar os modelos relacionados aos Produtos
---

O modelo dos produtos é composto por quatro tipos de conteúdo:

- **Planos**: Planos. Esse tipo de conteúdo é utilizado para criar os planos de assinatura dos produtos.
- **Plans Features**: Características dos planos. Esse tipo de conteúdo é utilizado para criar as características dos planos de assinatura.
- **Contratos**: Contratos. Esse tipo de conteúdo é utilizado para criar os contratos dos planos de assinatura.
- **Produto**: Produtos. Esse tipo de conteúdo é utilizado para criar os produtos do DevPortal.

## Planos

O modelo da coleção **Planos** é composto pelos seguintes campos:

![Modelo dos Planos](/images/plans-model.png)

- **name**: Nome do plano. Esse campo é utilizado para identificar o plano no DevPortal e deve ser único.
- **price**: Preço do plano. Esse campo é utilizado para exibir o preço do plano no DevPortal.
- **slug**: Slug. Esse campo é utilizado para identificar o plano e deve ser único. Ele é utilizado para indexar o plano na busca do DevPortal. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher o plano**.
  ![Slug](/images/slug.png)
- **plans_features**: Lista de características. Esse campo é utilizado para relacionar as características com os planos.
- **contratos**: Lista de contratos. Esse campo é utilizado para relacionar os contratos com os planos.
- **description**: Descrição do plano. Esse campo é utilizado para descrever o plano no DevPortal.
- **quota**: Quota do plano. Esse campo é utilizado para exibir a quota do plano no DevPortal.

## Características dos Planos

O modelo da coleção **Plans Features** é composto pelos seguintes campos:

![Modelo das Características dos Planos](/images/plans-features-model.png)

- **name**: Nome da característica. Esse campo é utilizado para identificar a característica no DevPortal e deve ser único.
- **description**: Descrição da característica. Esse campo é utilizado para descrever a característica no DevPortal.
- **slug**: Slug. Esse campo é utilizado para identificar a característica e deve ser único. Ele é utilizado para indexar a característica na busca do DevPortal. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher a característica**.
  ![Slug](/images/slug.png)

## Contratos

O modelo da coleção **Contratos** é composto pelos seguintes campos:

![Modelo dos Contratos](/images/contracts-model.png)

- **data**: Arquivo do contrato. Esse campo é utilizado para exibir o contrato no DevPortal. O contrato deve ser um arquivo PDF e feito o upload no Content Manager.
- **name**: Nome do contrato. Esse campo é utilizado para identificar o contrato no DevPortal e deve ser único.
- **slug**: Slug. Esse campo é utilizado para identificar o contrato e deve ser único. Ele é utilizado para indexar o contrato na busca do DevPortal. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher o contrato**.
  ![Slug](/images/slug.png)

## Produtos

O modelo da coleção **Produto** é composto pelos seguintes campos:

![Modelo dos Produtos](/images/product-model.png)

- **planos**: Lista de planos. Esse campo é utilizado para relacionar os planos com os produtos.
- **name**: Nome do produto. Esse campo é utilizado para identificar o produto no DevPortal e deve ser único.
- **slug**: Slug. Esse campo é utilizado para identificar o produto e deve ser único. Ele é utilizado para indexar o produto na busca do DevPortal. **Esse campo é gerado automaticamente, recomendamos clicar no botão de geração para melhor indexação após preencher o produto**.
  ![Slug](/images/slug.png)
- **UserIDs**: Lista de usuários. Esse campo é utilizado para relacionar os usuários com os produtos. É completamente opcional, o proposito é proporcionar uma fácil exportação para análise externa ao DevPortal.
- **apis**: Lista de apis. Esse campo é utilizado para relacionar as apis com os produtos.
- **description**: Descrição do produto. Esse campo é utilizado para descrever o produto no DevPortal.
