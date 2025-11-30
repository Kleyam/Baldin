FROM python:3.13-slim

# Instalar Poetry
RUN pip install --no-cache-dir poetry==1.8.2

# Copiar APENAS arquivos de dependência
COPY pyproject.toml poetry.lock ./

# Instalando dependências (sem criar virtualenv no container)
RUN poetry config virtualenvs.create false \
    && poetry install --only main --no-interaction --no-ansi

# Copiar código da aplicação 
COPY --chown=nobody:nogroup src/ ./src/

# Usuário não-root para segurança
USER nobody

# Health check usando biblioteca nativa do Python (mais leve e seguro)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health').read()"

# Comando otimizado para produção
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4", "--log-level", "info"]