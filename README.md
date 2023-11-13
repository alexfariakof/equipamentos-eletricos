
# Projeto Equipamentos Elétricos

## Instruções de execução da solução
Existem duas fromas de executar o projeto em abambas certifique-se de ter o [Docker Engine](https://docs.docker.com/desktop/install/windows-install/) instalado ou subir manualmente um servidor mysql utilizando os scripts localizados na pasta `./__database__/migrations` e rodas as aplicações cliente se servidor manualmente. 

* Manualmente
  
  1. Abra um novo terminal e estando no diretório `./__database__` execute o comando `docker-compose up --build -d` esse comando realizara a compilação, execução e configuração do servidor mysql com as tabelas utilizadas no projeto.

  2. Abra um novo terminal e estando no diretório `./__server__` execute o comando `npm install` em seguinda o comando `npm start`. A aplicação servidor irá inicializar e ficar disponível no endereço `http://localhost:3001`. 

  3. Abra um novo terminal e estando no diretório `./__client__` execute o comando `npm install` em segida o comando `npm start`. A aplicação cliente irá inicializar e ficar disponível no endereço `http://localhost:3000`.

* Automaticamente

  Estando no diretório raiz do projeto execute o comando `docker-compose up --build -d`. Esse comando irá compilar e executar o servidor mysql, a aplicação server ou backend e a aplicação client ou frontend em um ambiente de rede dockerizado disponibilizando toda a aplicação configurada no docker. Após o serviços serem inicializados navegue para página `http://localhost:3000`.

## Orientação a Objetos

  Toda aplicação foi desenvolvida utilizando POO com typescript e react.js.

## SOLID
 
  Alguns conceitos foram implementados tendo sendo o principal o principio da responsabilidade única outros conceitos devem ser revistos e realizar um arefatorção da aplicação para seguir com um design mais limpo e flexível.

  
## Testes de Integração

 Por questão de tempo não foi possivél finalizar esse teste mais o mesmo pode ser encontrado na pasta `./__tests__/Components/Unit/FileUpload.test.tsx` que pode ser considerado um teste de integração.

## Testes Unitários

 Alguns testes foram implmentadaos e se encontram no diretório raiz na pasta `./__tests__`. Existem duas dormas de serem executados.
 
   1. Estando no diretório raiz do projeto execute o comando `npm install` em seguida `npm test`. Os testes seram realizados e um relatório de cobertura de código será gerado na pasta `./coverage`. Para visualizar o resultado basta abrir a página gerada em `./coverage/lcov-report/index.html`.

   2. Estando no diretório raiz do projeto execute o comando `./generate_coverage_report.ps1`. Os testes seram realizados e um relatório de cobertura de código será aberto no navegador padrão.

## Gitflow

Todo o projeto foi desenvolvido seguindo o gitflow para facilitar, documentar  e gerenciar o processo de denvolvimento. Pode ser visualizado mais facilmente o uso olhando o fluxo seguido no projeto em [Fluxo do Projeto](https://github.com/users/alexfariakof/projects/14).
  
## Estrutura do Projeto:

* __clinet__/ (código-fonte principal da aplicação frontend ReactJs/Typescript)
  * App.css
  * App.tsx
  * index.tsx
  * public/
    - index.html    
  * src/  (código-fonte principal)
    * components
      * FileUpload
        * FileUpload.tsx
          
* __server__/ (código-fonte principal da aplicação backend nodeJs/Typescript)
  * index.ts (código fonte do servidor Express/API)
  * src/  (código-fonte principal)
    * bussiness/
      * EquipamentosBussiness.ts
    * controller/
      * EquipamentosController.ts
    * interfaces/
      * IBar.ts
      * Iline.ts
      * IShuntBar.ts
      * IShuntLint.ts
      * ITopologyValidation.ts
    * repositories/
      * EquipamentosRepository.ts
    * services/
      * EquipamentosParserService.ts
    * prisma (ORM (Object-Relational Mapping) 
  
* __databse__/ (Banco de Dados Docker MySqlserver)
  *  migrations
    *  V1__CREATE_DATABASEsql
    *  V2__Equipamentos.sql

* __tests__/
  * App.test.tsx
  * unit/
    * componentes/
      * FileUpload.test.tsx
    * controller/
      * FileUpload.test.tsx
    * interfaces/
      * Bar.test.tsx
      * Line.test.tsx
      * ShuntBar.test.tsx
      * ShuntLine.test.tsx
* .files_to_validate/ ( arquivos usados para testes e validação da aplicação)
   

