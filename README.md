
# Projeto Equipamentos Elétricos

### Instruções de execução da solução
Existem duas fromas de executar o projeto em abambas certifique-se de ter o [Docker Engine](https://docs.docker.com/desktop/install/windows-install/) instalado ou subir manualmente um servidor mysql utilizando os scripts localizados na pasta `./__database__/migrations` e rodas as aplicações cliente se servidor manualmente. 

* Manualmente
  
  1. Abra um novo terminal e estando no diretório `__database__´ execute o comando ´docker-compose up --build -d´ esse comando realizara a compilação, execução e configuração do servidor mysql com as tabelas utilizadas no projeto.

  2. Abra um novo terminal e estando no diretório `__server__´ execute o comando `npm install ` em seguinda o comando `npm start`. A aplicação servidor irá inicializar e ficar disponível no endereço `http://localhost:3001`. 

  3. Abra um novo terminal e estando no diretório ´__client__` execute o comando `npm install` em segida o comando `npm start`. A aplicação cliente irá inicializar e ficar disponível no endereço `http://localhost:3000`

* Automaticamente

  Estando no diretório raiz do projeto execute o comando `docker-compose up --build -d`. Esse comando irá compilar e executar o servidor mysql, a aplicação server ou backend e a aplicação client ou frontend em um ambiente de rede dockerizado disponibilizando toda a aplicação configurada no docker. Após o serviços serem inicializados navegue para página `http://localhost:3000`.

### Orientação a Objetos

  Toda aplicação foi desenvolvida utilizando POO com typescript e react.js.

### SOLID
 
  Alguns conceitos foram implementados tendo sendo o principal o principio da responsabilidade única outros conceitos devem ser revistos e realizar um arefatorção da aplicação para seguir com um design mais limpo e flexível.

  
### Testes de Integração

 Por questão de tempo não foi possivél finalizar esse teste mais o mesmo pode ser encontrado na pasta `__tests__/Components/Unit/FileUpload.test.tsx` que pode ser considerado um teste de integração.

### Testes Unitários

 Alguns testes foram implmentadaos se encontram no diretório raiz na pasta `__tests`. Existem duas dormas de serem executados.
 
   1. Estando no diretório raiz do projeto execute o comando `npm install` em seguida `npm test`. Os testes seram realizados e um relatório de cobertura de código será gerado na pasta `./coverage`. Para visualizar o resultado basta abrir a página gerada em `./coverage/lcov-report/index.html`.

   2. Estando no diretório raiz do projeto execute o comando `./generate_coverage_report.ps1`. Os testes seram realizados e um relatório de cobertura de código será aberto no navegador padrão.
    
### Estrutura de Diretórios




### Gitflow

  Todo o projeto foi desenvolvido seguindo o gitflow para facilitar, documentar  e gerenciar o processo de denvolvimento. Pode ser visualizado mais facilmente o uso olhando o fluxo seguido no projeto em [Fluxo do Projeto](https://github.com/users/alexfariakof/projects/14).
  
