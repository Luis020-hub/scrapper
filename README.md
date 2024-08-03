
# Scrapper

### Como executar

#### 1. Clone o repositório:

```bash
git clone https://github.com/Luis020-hub/scrapper
```

#### 2. Renomeie o arquivo `./scrapper/.env.sample` para `./scrapper/.env` e preencha as informações necessárias.

#### 3. Renomeie o arquivo `template.yaml.sample` para `template.yaml` e preencha as `Variáveis de Ambiente da Função NFScrapper`.

- AWS_PUBLISH_DATA_TOPIC_ARN

#### 4. Acesse a pasta `scrapper` e instale as dependências:

```bash
cd ./scrapper/scrapper
```
```bash
npm install
```

#### 5. Compile e faça o deploy:

```bash
sam build
sam deploy --guided
```

#### 6. Invocando localmente

```bash
sam local invoke NFScrapperFunction --event events/event.json
```

#### 7. Deletar

```bash
sam delete
```
