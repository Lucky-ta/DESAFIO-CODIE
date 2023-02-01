# CODIE - Teste prático.

## 🚀 Introdução:

O projeto se trata de um sistema de arquivos para armazenar senhas, onde é possível aplicar filtros, modificar e excluir as senhas.

```
O sistema permite:

- Criar um arquivo
- Deletar um arquivo
- Criar uma senha
- Editar uma senha
- Deletar uma senha
```

```
Cada pessoa tem as seguintes propriedades:
- url
- name (nome do documento de senha)
- file (nome do arquivo a que o documento de senha pertence):
- email (email do documento de senha)
- password (senha do documento de senha)
- Id (identificador do documento de senha)

Cada arquivo tem as seguintes propriedades:
- fileName (nome do arquivo)
- passwords (lista de senhas do arquivo)
- id (identificador de criação do arquivo)
```

## 🛠️ Construído com:

O projeto foi desenvolvido com as seguintes ferramentas:

- [NextJS](https://nextjs.org/docs/getting-started)
- [SWR](https://swr.vercel.app/docs/getting-started)
- [Styled Components](https://styled-components.com/docs)
- [Axios](https://axios-http.com/docs/intro)
- [Unform](https://unform-rocketseat.vercel.app/)
- [Yup](https://github.com/jquense/yup/tree/62786c42ca07a2b84b05ca8c473bc01f0c868a94)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [React Context Menu](https://github.com/vkbansal/react-contextmenu)
- [JSON Server](https://www.npmjs.com/package/json-server)

### 🔧 Instalação do projeto:

1 -
Faça um fork do projeto clicando no botão 'Fork' na parte superior direita do seu github.

2 -
Faça um clone do projeto na sua máquina, copiando o link SSH ou HTTPS disponivel no seu fork e rodando o seguinte comando no seu terminal:

```
git clone 'seu link SSH ou HTTPS'
```

3 -
Entre no arquivo e instale as dependencias necessarias com o seguinte comando:

```
 cd DESAFIO-CODIE
```

```
npm install
```

### 📌 Uso do projeto:

Para iniciar o projeto rode o seguinte comando no seu terminal:
`npm run dev` ou `yarn run dev`

Para iniciar o servidor json rode o seguinte comando no seu terminal:
`npm run jsonserver` ou `yarn run jsonserver`

Após rodar o comando, o projeto vai estar rodando localmente na sua máquina na porta padrão (localhost:3000).
Após rodar o comando, o servidor json vai estar rodando localmente na sua máquina na porta configurada (localhost:3001).

# ⚙️ Estrutura do projeto:

    O projeto possui a seguinte estrutura:

```

├───src
│   ├───components
│   │   ├───Buttons
│   │   ├───FileSystem
│   │   ├───Form
│   │   ├───Header
│   │   ├───Inputs
│   │   ├───LeftOptions
│   │   ├───Modal
│   │   └───PasswordsCard
│   ├───context
│   ├───hooks
│   ├───interfaces
│   ├───pages
│   ├───services
│   │   └───api
│   │       └───apiUrls
│   ├───styles
│   ├───utils
│   │   ├───formatData
│   │   └───mutateFunctions
│   └───yupFormValidation
├───__mocks__
│   └───dataMock
└───__tests__
    ├───testComponents
    │   ├───header
    │   └───leftOptions
    └───unit
        └───Modal
```

### 🔩 Testes

O projeto possui testes unicos para componentes específicos e testes unitários para testar o comportamento do app.

- Os testes possuem a seguinte estrutura:

```
├───__mocks__
│   └───dataMock
└───__tests__
    ├───testComponents
    │   ├───header
    │   └───leftOptions
    └───unit
        └───Modal
```

Para rodar os testes, rode o seguinte comando no terminal:

```
npm run dev
```

## 📌 Versão

[Git](https://git-scm.com/) - para controle de versão.
