# Ignite_testes_react-native

Aula do Ignite-Rocketseat sobre testes automatizados em React Native

## Para executar o projeto

- Baixe o codigo-fonte
- Instale as dependencias
  - npm `npm installl`
  - yarn `npx yarn install`
- Realize o cadastro na API
  - https://openweathermap.org/api
  - Recupere o key do seu usuário
  - Cria, na raiz do proejto, um arquivo `.env`
  - adicione então sua key `EXPO_PUBLIC_WEATHER_APP_ID=SUA_KEY`
- Execute o comando para iniciar o projeto
  - com npm `npm start`
  - com yarn `npx yarn start`

# teste unitário

Testar uma funcionalidade separadamente e de forma isolada

- Detecção precoce de erros
- Qualidade
- Facil manutenção
- Economia de tempo
- Diminui os custos
- Ajuda a documentar

Jest como ferramenta

documento .ts

### Boas praticas

- Usar bons nomes
- Usar o describe
- Ser conciso e focado, teste ser direcionado e para um unico comportamento
- Evitar aninha describe
- Ser independentes
- Fazer testes pequenos e simples

# testes de componentes

- Testar os componentes de formas isoladas

Documento .tsx

query vs get

sempre tentar falhar, para verificar se o teste está realmente falhando

# Mock

testes são case sensitives

pode usar regex

simular, reproduzir algo real.
não depender de fatores externos e conseguir realmente testar o que precisamos

## mockar api

spyon

na pasta de `__tests__/mocks` cria-se os arquivos que serão os retornos da API, mockados.

---

Junto ao arquivo, cria-se o arquivo de testes
esse arquivo vai realizar os testes

para testar AsynStorage é preciso de uma configuração extra. como segue no site.

os testes não devem depender um do outro

quando usa algo externo, como SVG, mockar o svg

jest trasformer svg

só vai passar o teste se todos os expected passarem

# Hooks

testar hooks

renderHook testing-library/react-native
|-> para renderizar o hook

add o provider |-> **wrapper** como segunda propriedade para o render hook

todos os providers precisam ser configurados

- usar o wrapper

quando tem mais de um contexto

- criar um render customizado

# Coverage Report

relatorio sobre a cobertura de testes

- porcentagem de linhas, funções instruções ou ramificações

avaliar o quanto o codigo está sendo testado

## comando

```
npm run test:coverage
```

- vai criar uma pasta
- dentro dela, acessa o _index.html_

  - Pagina mais organizada

![relatorio](https://github.com/Kayre-Scott-Primon/Ignite_testes_react-native/assets/64801417/ee45d2a3-9216-43f7-94b7-90a0ffdfa507)

## selecionar arquivos a serem testados

no jest.config.json

```
"testPathIgnorePatterns": ["./__tests__/mocks", "./__tests__/utils"],
"collectCoverageFrom": ["./src/**/*.{ts,tsx}", "!./src/**/styles.ts"],
"coveragePathIgnorePatterns": ["./src/@types", "./src/styles"]
```

## para mudar a pasta de coverage

jest.config.json
`"coverageDirectory": "__tests__/coverage" `

# Teste de integração

verificar os componentes/funcionalidades trabalhando juntos

Para quando o teste falhar:
- bail (no jest.config.json)