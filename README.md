# 🏆 Bem-vindo ao Projeto Baldin!

Olá, equipe! Este é o repositório oficial do nosso ecossistema digital. O objetivo do Baldin é ser o ponto de encontro da nossa comunidade de TI, um lugar para conectar talentos, compartilhar conhecimento e encontrar oportunidades.

Este projeto é um **Monorepo**, o que significa que o código do **Backend** (nossa API em Python) e do **Frontend** (nosso site em Next.js) vivem juntos neste mesmo lugar, nas suas respectivas pastas.

---

## ⚙️ Pré-requisitos: As Ferramentas Obrigatórias

Antes de começar, seu computador precisa ter as seguintes ferramentas instaladas. Se você não tiver alguma delas, a instalação não funcionará.

- **Git:** Para baixar (clonar) e gerenciar as versões do nosso código.
  - ➡️ [**Faça o download aqui**](https://git-scm.com/)

- **Docker Desktop:** Para criar e gerenciar nosso ambiente de desenvolvimento padronizado. É ele que vai "ligar" o banco de dados e a API para você.
  - ➡️ [**Faça o download aqui**](https://www.docker.com/products/docker-desktop/)

- **Node.js (versão LTS):** Necessário para que as ferramentas do projeto Frontend funcionem.
  - ➡️ [**Faça o download aqui**](https://nodejs.org/) (baixe a versão marcada como **LTS**).

- **Poetry:** O gerenciador de pacotes do nosso Backend Python.
  - ➡️ [**Siga as instruções de instalação aqui**](https://python-poetry.org/docs/#installation)

---

## 🚀 Guia de Instalação: Do Zero à Aplicação Rodando

Siga estes passos **exatamente** na ordem descrita. Cada comando tem uma explicação do que ele faz.

### Passo 1: Obter o Código do Projeto

Primeiro, vamos baixar o código do GitHub para a sua máquina.

1.  Abra seu terminal (Git Bash, PowerShell, etc.).
2.  Navegue até a pasta onde você guarda seus projetos (ex: `cd Documentos/Projetos`).
3.  **Clone o repositório:** Este comando baixa a última versão do projeto.
    ```bash
    git clone [https://github.com/Kleyam/Baldin.git](https://github.com/Kleyam/Baldin.git)
    ```
4.  **Entre na pasta do projeto:** Todos os comandos a seguir devem ser executados de dentro desta pasta.
    ```bash
    cd Baldin
    ```

### Passo 2: Criar o Arquivo de "Segredos" (.env)

Nossa aplicação precisa de senhas para o banco de dados. Essas senhas não são salvas no Git por segurança. Nós temos um "molde" chamado `.env.example` que você vai copiar.

1.  **Copie o arquivo de exemplo:**
    - Se você está usando **Git Bash** ou um terminal de **Linux/Mac**:
      ```bash
      cp .env.example .env
      ```
    - Se você está usando **PowerShell** ou **CMD** do Windows:
      ```bash
      copy .env.example .env
      ```
2.  **O que você acabou de fazer?** Você criou um arquivo `.env` local que o Docker vai ler. Para o ambiente de desenvolvimento, **você não precisa alterar os valores dentro dele**.

### Passo 3: Ligar a "Fábrica" (Docker Compose)

Este é o comando mais importante. Ele vai ler nossas "plantas" (`docker-compose.yml` e `Dockerfile`), construir os ambientes e ligar tudo para você.

1.  **Garanta que o Docker Desktop esteja aberto e rodando!** Verifique se o ícone da baleia está visível e estável na sua barra de tarefas.
2.  **Execute o Docker Compose:**
    ```bash
    docker-compose up
    ```
3.  **O que esperar:**
    - **MUITA PACIÊNCIA NA PRIMEIRA VEZ!** Este processo pode demorar **vários minutos** na primeira execução, pois o Docker está baixando as imagens base do Python, do PostgreSQL e construindo nosso ambiente do zero.
    - Você verá muitas linhas de texto subindo na tela. Isso é normal! São os logs de construção e execução.
    - No final, seu terminal ficará "preso", mostrando em tempo real o que a API e o banco de dados estão fazendo. Isso significa que funcionou!

---

## ✅ Verificando o Sucesso

Se o passo anterior terminou e seu terminal está mostrando os logs, seu ambiente está no ar! Para ter certeza:

1.  **Teste a API do Backend:**
    - Abra seu navegador de internet.
    - Acesse o endereço: `http://localhost:8000`
    - Você **DEVE** ver a seguinte mensagem em formato JSON:
      ```json
      {"message":"Bem-vindo à API do Baldin!"}
      ```

2.  **Verifique o Docker Desktop:**
    - Abra a interface do Docker Desktop.
    - Na seção "Containers", você verá um grupo chamado `baldin` com dois contêineres dentro, ambos com um ponto verde, indicando que estão rodando.

Se você conseguiu ver a mensagem no navegador, **PARABÉNS!** Você está pronto para começar a desenvolver.

---

## 💡 Trabalhando no Dia a Dia

Você não precisa deixar seu terminal preso o tempo todo.

- **Para LIGAR a aplicação em segundo plano:**
  ```bash
  docker-compose up -d