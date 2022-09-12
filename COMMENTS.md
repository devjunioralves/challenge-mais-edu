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

### Bibliotecas

Além das bibliotecas de configuração do projeto, foi utilizado a biblioteca do mongodb para estar populando a base de dados da aplicação, utilizado o express como framework para as requisições Http, utilizado a biblioteca tsyringe para injeção de dependências e o prettier para indentação do código.

### Melhorias

Penso como melhorias futuras para o projeto, implementação de uma documentação da API com swagger, a contemplação de uma cobertura maior de testes unitário, a implementação de testes de integração, e a implementação de middlewares para validação de parâmetros, query e body das rotas.

### Essencial faltando

Seria de extrema importância e não está presente um middleware de validação na rota, penso em estar desenvolvendo com a biblioteca do Joi para validar os dados recebidos na rota e não correr o risco de estar executando tudo oque for passado no banco de dados.