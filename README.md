# README — Git Flow Simplificado

**Objetivo:** explicar, passo a passo, como acessar o repositório remoto, atualizar sua branch, adicionar arquivos e commitar — usando permanentemente as branches `main`, `develop`, `frontend` e `backend`.

---

## 1. Clonar o repositório (uma vez)

```bash
git clone https://github.com/<seu-usuario>/globo-residencia.git
cd globo-residencia
```

---

## 2. Verificar branches existentes e mudar para a branch desejada

```bash
# listar branches locais e remotas
git branch -a

# trocar para a branch que você vai trabalhar (ex: develop)
git checkout develop
# ou (git switch develop)
```

---

## 3. Sempre atualize sua branch antes de começar

```bash
# atualizar sua branch com alterações remotas
git pull origin develop
```

---

## 4. Adicionar/editar arquivos e commitar

```bash
# adicionar todos os arquivos
 git add .

# ou adicionar arquivos específicos
 git add src/meuArquivo.js README.md

# criar commit
 git commit -m "feat(frontend): add login form #TICKET-123"

# enviar alterações para o remoto
 git push origin develop
```
# envio de alteracoes para teste da 
> Substitua `develop` pelo nome da branch que você estiver usando (`main`, `frontend` ou `backend`).

---

## 5. Checklist rápido antes do push

* [ ] Salvar arquivos e garantir que estão corretos
* [ ] Mensagem de commit clara e relacionada ao ticket
* [ ] Branch correta selecionada (`main`, `develop`, `frontend` ou `backend`)

---

## 6. Comandos úteis (resumo)

```bash
git clone <URL>
git branch -a
git checkout <branch>   # ou git switch <branch>
git pull origin <branch>
git add .
git commit -m "mensagem"
git push origin <branch>
```
