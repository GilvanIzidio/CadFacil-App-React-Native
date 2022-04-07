# CADFácil - App - React Native
## Passo a passo para iniciar o projeto

1-Clone o projeto e dentro da pasta do projeto digite `yarn` para baixar as dependencias

2-Crie um arquivo .env na raiz do projeto com a mesma estrutura do `.env.example` presente na pasta

2.1- Edite o `.env` colocando a url da api por exemplo

```sh
API_URL=http://127.0.0.1:3000
```

**lembrando que para o device se conectar a api ela tem que estar disponivel em um endereço diferente de 127 já que a api nao está rodando no device e sim em uma maquina externa**

2.2 Conecte um device ou emulador no computador

2.3 Entre em um terminal e digite `yarn start` e em outro `yarn android`

2.4 - espere a aplicação buildar e já estara disponivel para usar

Nota: **O App não está fazendo o upload da foto para a api pois está com problema no momento do envio do multipart/Formdata mas via Insomnia ou Postman salva normalmente**

**Segue imagens do app**

![pages](https://user-images.githubusercontent.com/62617637/162254881-5665e2b0-1d78-4d6e-b244-2824c731d6e3.png)

![pages2](https://user-images.githubusercontent.com/62617637/162255049-25b62a06-69f2-4800-9888-c80666ede51a.png)
