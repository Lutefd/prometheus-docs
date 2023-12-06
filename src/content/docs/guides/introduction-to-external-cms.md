---
title: Introdução ao CMS externo
description: Uma breve introdução ao CMS Externo.
---

Esta plataforma é uma solução de gestão de conteúdo API-first, projetada para construir APIs personalizáveis de maneira rápida e eficiente. Oferece um painel de administração fácil de usar, permitindo que os administradores, mesmo sem conhecimento técnico avançado, gerenciem conteúdo de forma intuitiva.

## Criação de Usuário e Login

Todos os administradores recebem um link de convite ao painel de administração. Ao clicar no link, você será solicitado a criar uma senha e fazer login.

![Registro do Administrador](/src/assets/images/registration.png)

Observe que o link de convite expira em 24 horas. Se você não conseguir criar uma senha dentro desse período, solicite um novo link de convite.
Caso esqueça sua senha, você deve solicitar a redifinição de senha a Sensedia.

Os administradores podem ter diferentes níveis de acesso, dependendo do seu papel. Por exemplo, um administrador pode ter acesso a todos os recursos, enquanto outro pode ter acesso apenas a um subconjunto de recursos. Isso é passado para a Sensedia, por sua empresa durante a configuração inicial. Caso necessite de alterações, entre em contato com a Sensedia.

Após o registro, você será redirecionado para o painel de administração.

## Painel de Administração de Conteúdo

O painel de administração é o local onde os administradores podem gerenciar o conteúdo do site. Ele é dividido em duas seções principais:

- **Content Manager**: onde você pode criar, editar e excluir conteúdo.
- **Media Library**: onde você pode fazer upload de imagens e outros arquivos de mídia.

Essas seções são acessíveis no menu lateral esquerdo:
![Menu](/src/assets/images/menu.png)

### Content Manager

No Content Manager, você pode gerenciar o conteúdo do site. O conteúdo é organizado em **Collections**, que são grupos de conteúdo relacionados. Por exemplo, a coleção **Apis** contém todas as apis registradas no Manager.

![Content Manager](/src/assets/images/content-manager.png)

Cada collection contém diferentes tipos de conteúdo, chamados **Content Types**. Esses tipos de conteúdo são definidos pela Sensedia e pela sua Empresa e não podem ser alterados pelos administradores. Os tipos de conteúdo comuns são

- [**APIs**](/reference/apis-model)
- [**Documentation**](/reference/documentations-model)
- [**FAQ**](/reference/faq-model)

Cada um desses tipos de conteúdos possuem um guia de referencia, em dúvida de como utilizá-los e como cada campo afeta o que é exibido no DevPortal, consulte o guia de referência.

### Media Library

A biblioteca de mídia é o local onde você pode fazer upload de imagens e outros arquivos de mídia. Em breve, essa seção será removida e o gerenciamento de mídia será feito diretamente na plataforma do DevPortal.

Você pode fazer upload de arquivos de mídia clicando no botão **Add new assets** no canto superior direito da tela.
![Media Library](/src/assets/images/media-library.png)

Para obter a url de um arquivo de mídia, acesse o seguinte endpoint.

```
${URLDOCMS}/api/upload/files
```

Copie o valor do campo **url** e utilize-o no seguinte formato:

```
${URLDOCMS}/${url}
```

Exemplo:

```
https://cms-dev.sensedia.com/api/upload/files/5f6b5b5b5b5b5b5b5b5b5b5b
```

## Publicação de Conteúdo

O conteúdo criado no Content Manager não é publicado automaticamente no DevPortal. Para publicar o conteúdo, você deve clicar no botão **Publish** no canto superior direito da tela.

![Publicação de Conteúdo](/src/assets/images/publish.png)

Recomendamos que você só publique o conteúdo quando estiver pronto para ser exibido no DevPortal. Se você precisar fazer alterações no conteúdo, você pode despublicá-lo e fazer as alterações necessárias.
