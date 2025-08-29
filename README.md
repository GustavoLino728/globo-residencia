# README — Git Flow Simplificado

**Objetivo:** explicar, passo a passo, como acessar o repositório remoto, atualizar sua branch, adicionar arquivos, commitar e subir (push) — assumindo que `main`, `develop`, `frontend` e `backend` já existem no remoto.

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
# ou (rebase)
git fetch origin
git rebase origin/develop
```

---

## 4. Adicionar/editar arquivos, commitar e subir

```bash
# adicionar todos os arquivos
 git add .

# adicionar arquivos específicos
 git add src/meuArquivo.js README.md

# criar commit
 git commit -m "feat(frontend): add login form #TICKET-123"

# enviar para o remoto (branch principal)
 git push origin develop

# ou enviar uma branch de feature pela primeira vez
 git push -u origin feature/frontend/login
```

---

## 5. Abrir Pull Request (PR)

* No GitHub/GitLab: clique em **Compare & pull request** ou **New merge request**.
* Defina:

  * **base**: branch de destino (ex.: `frontend` ou `develop`)
  * **compare**: sua branch de feature (ex.: `feature/frontend/login`)
* Preencha título, descrição, checklist e adicione revisores.

---

## 6. Após o merge

```bash
# deletar branch local (após merge)
git branch -d feature/frontend/login

# deletar branch remota (após merge)
git push origin --delete feature/frontend/login

# sincronizar branch local com develop ou main
 git checkout develop
 git pull origin develop
```

---

## 7. Resolvendo conflitos

1. Ao fazer `git pull` ou `git rebase`, se houver conflitos, o Git sinaliza os arquivos.
2. Abra, resolva, salve.
3. Após resolver:

```bash
git add <arquivos-resolvidos>
# se estava em rebase
git rebase --continue
# se estava em merge
git commit   # se necessário
 git push origin <branch>
```

---

## 8. Checklist rápido antes do push / PR

* [ ] Rode lint/build localmente
* [ ] Execute testes unitários
* [ ] Mensagem de commit clara e relacionada ao ticket
* [ ] PR com descrição, screenshots e reviewers

---

## 9. Comandos úteis (resumo)

```bash
git clone <URL>
git branch -a
git checkout <branch>   # ou git switch <branch>
git pull origin <branch>
git fetch origin
git rebase origin/<branch>
git add .
git commit -m "mensagem"
git push origin <branch>
git push -u origin <branch>   # primeira vez
 git branch -d <branch>        # deletar local
git push origin --delete <branch>  # deletar remoto
```
