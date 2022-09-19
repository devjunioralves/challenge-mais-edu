# student portal

### Arquitetura

O projeto trata-se de um módulo simples para cadastro de estudantes, então ele engloba as principais funcionalidades, como criação, remoção, atualização e listagem. A arquitetura utilizada nesse projeto se baseia na arquitetura de multicamadas e 
também um pouco na arquitetura limpa. Dentro dessa arquitetura temos os principais
níveis que são:

- Domínio
  - Tudo que represente algo, um objeto, pessoa, empresa, etc;
  - É o núcleo do projeto, a ideia por trás dele, é como que ele funciona.

- A infraestrutura
  - Contém acoplamentos de alto nível, aqui eu teria coisas como serviços de documentação, conexões de banco de dados e etc.
-Apresentação
  - Tudo relacionado à forma como é apresentado ao cliente: rotas, controladores, ou outras formas de permitir que o cliente consuma nosso projeto.
- Compartilhado
  - É um código compartilhado com várias camadas, pastas e arquivos.
  - O que for desenvolvido aqui, pode ser acessado por qualquer arquivo.

## Project setup
```
yarn install
```

### Your database configuration

```
change your file /src/infrastructure/mongodb/MongoDBClient.ts to your database address, 
this project is using mongodb, so you need to have it installed on your machine
```

### Compiles and hot-reloads for development
```
yarn dev
```
