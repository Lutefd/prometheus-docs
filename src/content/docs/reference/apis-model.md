---
title: Modelo das APIs
description: Entenda como editar o modelo das APIs
---

As apis são o principal conteúdo do DevPortal. Elas são exibidas no catálogo de apis e são a porta de entrada para os seus usuários. A partir delas os usuários acessam as documentações e o ambiente de Sandbox. Cada api possui um modelo, que define como ela é exibida no DevPortal.

Elas são populadas na configuração inicial e são atualizadas automaticamente diariamente. Contudo, você também pode atualizar ou adicionar manualmente uma api. Caso perceba alguma falha na atualização automática, entre em contato com a Sensedia.

## Modelo Básico

O modelo da coleção **Apis** é composto pelos seguintes campos:

![apis-model](/src/assets/images/apis-model.png)

- **name**: Nome da api. Esse campo é utilizado para identificar a api no DevPortal e deve ser único.
- **description**: Descrição da api. Esse campo é utilizado para descrever a api no DevPortal.
- **version**: Versão da api. Esse campo é utilizado para identificar a versão da api no DevPortal.
- **apisID**: ID da api. Esse campo é utilizado para identificar a api no Manager e deve ser único.
- **revisionID**: O ID do swagger da api. Esse campo é utilizado para identificar o swagger da api no Manager e gerar a indexação e atualização automatica.
- **swagger**: Campo opicional. Caso seja preenchido, o swagger da api no DevPortal utilizará o valor desse campo, ignorando o swagger fornecido pelo o Manager. **Esse campo é utilizado para apis que não possuem swagger no Manager, caso sua api possua recomendamos não preencher esse campo**.
- **documentation**: Documentação da api dentro da plataforma do DevPortal. Esse campo é utilizado para exibir a documentação da api no DevPortal. Relacionando com o modelo de documentações acessível no gerenciador de conteúdos.
- **documentationLink**: Link para uma documentação externa da api. Esse campo é utilizado para redirecionar o usuário para uma documentação fora do ambiente do DevPortal. **Esse campo é utilizado para caso queira utilizar uma documentação externa ao DevPortal e terá prioridade sobre o campo documentation**.
- **highlighted**: Campo opicional. Caso seja preenchido, a api será exibida na seção de destaques do DevPortal.

É possível que a sua empresa tenha adicionado campos adicionais ao modelo da api. Caso tenha dúvidas sobre como preencher esses campos, entre em contato com a Sensedia.

## Categorias

As APIs são exibidas no DevPortal de acordo com as suas categorias. As categorias são criadas e gerenciadas a partir do Modelo **ApisCategory**. Cada api pode pertencer a uma ou mais categorias.

O modelo da coleção **ApisCategory** é composto pelos seguintes campos:

![Modelo das Categorias das APIs](/src/assets/images/apis-category-model.png)

- **name**: Nome da categoria. Esse campo é utilizado para identificar a categoria no DevPortal e deve ser único.
- **apis**: Lista de apis que pertencem a essa categoria. Esse campo é utilizado para relacionar as apis com as categorias.

**As apis devem ser relacionadas com categorias para serem exibidas no DevPortal.**
