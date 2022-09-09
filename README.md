# contemplato

Criar uma aplicação com 3 páginas:

- página de login formulário para input de usuário e senha, deve fazer o submit para o
backend e verificar se o usuário e senha estão corretos para liberar o acesso às páginas
do ambiente logado; todas as páginas exceto a de Login são restritas a usuários
logados
- página que lista tarefas associadas ao usuário logado e input para criar novas tarefas
para o mesmo;
- página que busca informações em um serviço externo e mostra o retorno como uma
lista de nomes.

- As senhas salvas no banco de dados devem estar criptografadas, usando seu
método de preferência.


**Pontos adicionais**
- Criado uma nova página de home para melhor navegabilidade.
- Adiciona novas ações no TODO para remoção de uma tarefa e conclusão dela mesma, com objetivo de se apróximar mais de um cenário real
- Criado um formulário de cadastro junto a página de login para facilitar o acesso a aplicação.

## Instação

### Pré-requisitos

| Nome | Versão |
|------|--------|
| node | 16.15  |
| npm  | 8.12.2 |
| sqlite | 3.39 |
| nodemon | 2.0.19 |

#### Instalação

Acesse a raiz do projeto e rode o npm:

```bash
npm i
```

Outro ponto importante é o arquivo `.env` que precisamos criar a partir do `.env.example`, não é necessário fazer nenhuma customização nele.

### Utilização
O projeto é dividio em duas partes, back-end e front-end, para poder utiliza-lo tem que garantir que tem os pré-requisitos
instalados corretamente, clonou os dois repositórios, instalou as suas respectivas dependências e copiou o .env.example.

Após verificar esses pontos rode nos dois projetos:

```bash
npm start
```

O front e o back devem subir nas portas 3000 e 3001 respectivamente.

E voalá. Para acessar o front só clicar a baixo:

[Front-end](http//localhost:3000)

