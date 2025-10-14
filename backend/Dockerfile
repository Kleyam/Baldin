# A tag "slim" significa que é uma versão mais leve, otimizada para produção.
FROM python:3.13-slim

# Passo 2: Define o diretório de trabalho dentro do contêiner.
# Todos os comandos a seguir serão executados a partir daqui.
WORKDIR /app

RUN pip install poetry

# Passo 4: Copia os arquivos de dependência para o contêiner.
# Copiamos estes arquivos primeiro para aproveitar o cache do Docker.
# Se as dependências não mudarem, o Docker não precisará reinstalá-las toda vez.
COPY pyproject.toml poetry.lock* ./

# Passo 5: Instala as dependências do projeto usando Poetry.
# - "config virtualenvs.create false" diz ao Poetry para instalar no ambiente do sistema,
#   já que já estamos isolados dentro de um contêiner.
# - "poetry install" instala as dependências do pyproject.toml.
RUN poetry config virtualenvs.create false && poetry install --no-root --no-interaction --no-ansi

# Passo 6: Copia o código-fonte da nossa aplicação (a pasta src) para o contêiner.
COPY src/ ./src/

# Passo 7: Define o comando que será executado quando o contêiner iniciar.
# ATENÇÃO: Este comando falhará se tentarmos rodar agora, pois ainda não criamos
# o arquivo src/main.py. Faremos isso em breve.
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]