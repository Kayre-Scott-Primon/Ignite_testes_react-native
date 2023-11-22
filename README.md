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



#  teste unitário
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