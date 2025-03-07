# Sistema de Gerenciamento de Candidatos Políticos

## Descrição
Este projeto foi desenvolvido como parte de um trabalho universitário em equipe, com o objetivo de criar um sistema para gerenciamento de candidatos políticos. A plataforma permite o cadastro, edição e visualização de candidatos, auxiliando na organização e transparência do processo eleitoral.

### Minha Contribuição
Fiquei responsável pela implementação do backend, garantindo a estrutura e funcionamento da API REST. Utilizei **Java (Spring Boot)** para desenvolver o backend, criando uma API REST integrada a bancos de dados **H2 (para testes)** e **MySQL (para produção)**, proporcionando flexibilidade no desenvolvimento.

Também utilizei **Spring JPA** para a persistência de dados e **Docker** para facilitar a implantação e configuração do ambiente.

No frontend, a equipe utilizou **HTML, CSS e JavaScript** para estruturar e estilizar a interface do sistema.

### Desafios Enfrentados
Durante o desenvolvimento, enfrentamos desafios como conflitos de merge no **Git**, exigindo colaboração e organização entre os membros da equipe para garantir um fluxo de trabalho eficiente. Trabalhamos juntos para resolver problemas de integração e melhorar a qualidade do código.

## Tecnologias Utilizadas
- **Backend**: Java (Spring Boot), Spring JPA, H2 Database, MySQL, Docker
- **Frontend**: HTML, CSS, JavaScript
- **Controle de Versão**: Git & GitHub

## Como Executar o Projeto
### Requisitos:
- **Java 17**
- **Docker e Docker Compose** (para execução com containers)
- **MySQL** (caso não utilize Docker)
- **Maven**

### Passos:
1. Clone o repositório:
   ```sh
   git clone https://github.com/FelipeSeiji/projeto_faculdade.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd projeto_faculdade
   ```
3. Execute o projeto com Docker:
   ```sh
   docker-compose up
   ```
   Ou, se preferir executar manualmente:
   ```sh
   mvn spring-boot:run
   ```

O backend estará rodando em: `http://localhost:8080`

---

