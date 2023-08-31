## Installation
npm install

#### api configuration
copiar o arquivo ".env.example" e renomear para ".env"
setar as configurações do Banco de dados no arquivo renomeado

#### database configuration
crie um banco de acordo com as configurações setadas no arquivo de configuração

#### generate database migrations
npm run typeorm:generate-migration

#### run database migrations
npm run typeorm:run-migrations

### Running the app mode development
npm run start

### Running the app mode watch development
npm run start:dev

### Running the app mode production
npm run start:prod





