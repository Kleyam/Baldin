from fastapi import FastAPI

app = FastAPI()

# Passo 3: Colar o "adesivo" na função para definir a rota
@app.get("/")
# Passo 4: Definir a função que executa e retorna os dados
def read_root():
    return {"message": "Bem-vindo à API do Baldin!"}
