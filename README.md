# Desafio mentoria tech Backend

# O que você deve fazer?

Você irá fazer uma API REST de agendamento de serviços.

# O que devo utilizar?

Você deve utilizar para fazer a API:

- NodeJS/Express;
- Banco de dados da sua preferencia;
- Javascript ou Typescript (o de sua preferência);
- O restante que precisar será de sua preferência.

# Banco de dados

O seu banco de dados deve ter apenas 3 tabelas.

A tabela de `servicos` irá ter colunas como: id, titulo serviço, descrição do serviço, data para o serviço ser executado (Ex: O serviço será realizado no dia 19 de outubro de 2022), id do tipo de serviço, id do usuário que está postando o serviço.

A tabela de `tipo_servicos` irá ter colunas como: id, tipo do serviço. E valores como: `REPOSITOR, PESQUISA DE PRECOS, CAIXA etc...`

A tabela de `usuarios` irá ter colunas como: id, nome, login, senha.

A tabela de serviços será a principal, e nela teremos as chaves estrangeiras do tipo de serviço e do usuário.

# Endpoints

Você deve fazer os seguintes endpoints na sua API.

```
GET /servicos
GET /servicos?descricao=XXXtitulo=XXXXid_tipo_servico=X
POST /servicos
DEL /servicos
```

Serão três endpoints bases: Para lista todos os serviços, para postar um novo serviço e para remover um serviço já existente.

Sendo que, o endpoint de listagem deve ter os filtro de `descricao, titulo, id_tipo_servico`

# Desafio

Até agora foi mais fácil, nessa última atividade vamos passar algo um pouquinho mais desafiador.

Agora você pode se basear no calendário do Google para fazer essa parte! 📆

Você deve encontrar uma solução para o seguinte caso: Um operador deseja postar um serviço para ser executado toda Segunda e Quinta, até o final desse ano (ou até uma data limite).

Crie uma solução para que no endpoint `POST /servicos` sejá possível a pessoa repetir esse mesmo agendamento em qualquer dia da semana, até uma data limite.

Por exemplo: Postar um serviço toda terça e quinta até o dia 10/12/2022, Postar um serviço toda quinta e sexta até o dia 08/10/2022.

Essa parte do teste você pode fazer da maneira que encontrar mais fácil e que atenda a demanda solicitada.

# Como entregar?

**Passo 1.** Executar o teste.

**Passo 2.** Testar e validar.

**Passo 3.** Enivar para o git com seu nome na branch.

**Passo 4.** Postar no README do git, fotos da requisição que você fez na API (pelo Postman ou outro app).

Happy Coding! 💻
