O **ContagIA** é uma solução que automatiza a detecção de músicas em conteúdos de mídia, gerando metadados e relatórios precisos para garantir a conformidade de direitos autorais e otimizar o fluxo de trabalho da Pós-Produção.

Localização do backend: `backend/`

## 📖 Índice
- 🎯 [Sobre o Projeto](#-sobre-o-projeto)  
  - [O Problema](#o-problema)  
  - [A Solução](#a-solução)  
- ✨ [Funcionalidades Principais](#-funcionalidades-principais)  
- 🚀 [Stack Tecnológica](#-stack-tecnológica)  
- 🔧 [Instalação e Configuração](#-instalação-e-configuração)  
  - [Pré-requisitos](#pré-requisitos)  
  - [Passo a Passo](#passo-a-passo)  
- ▶️ [Como Executar](#️-como-executar)  
  - [Executando a Aplicação](#executando-a-aplicação)  
  - [Executando os Testes](#executando-os-testes)  
- 🛠️ [Arquitetura e Fluxo de Dados](#️-arquitetura-e-fluxo-de-dados)  
- 🤝 [Como Contribuir](#-como-contribuir)  
- 📄 [Licença](#-licença)  

---

## 🎯 Sobre o Projeto

### O Problema
O processo de identificação, registro e relatório de trilhas sonoras utilizadas em programas e reportagens é historicamente **manual**.  
Essa abordagem é **lenta**, suscetível a erros humanos e acarreta riscos operacionais e financeiros significativos para a Pós-Produção, especialmente no que tange ao pagamento de direitos autorais e à conformidade legal.

### A Solução
O **ContagIA** foi desenvolvido para resolver esse problema, oferecendo uma **plataforma centralizada e inteligente** que atende às necessidades de diferentes perfis dentro do fluxo de produção.

**Para o Editor de Pós-Produção (Ricardo):**  
Ele precisa de agilidade. O ContagIA remove a tarefa tediosa e repetitiva de anotar timecodes manualmente, permitindo que ele foque em seu trabalho criativo.  
Com a ferramenta, Ricardo pode rapidamente fazer o upload de uma matéria, receber uma lista precisa das músicas utilizadas e gerar o relatório (EDL) com poucos cliques, garantindo a conformidade sem quebrar seu fluxo de trabalho.

**Para a Gestora de Pós-Produção (Lydia):**  
Ela precisa de controle, dados e mitigação de riscos. O ContagIA oferece uma visão centralizada de todo o conteúdo processado, criando um histórico confiável.  
Com dashboards analíticos, Lydia pode monitorar a produtividade da equipe, identificar as músicas mais utilizadas para embasar negociações com gravadoras e, o mais importante, garantir que 100% do conteúdo está em conformidade com as políticas de direitos autorais, eliminando riscos legais e financeiros.

---

## ✨ Funcionalidades Principais
- 📤 **Upload Simplificado de Mídia**: Interface intuitiva para que editores subam arquivos de vídeo e áudio para processamento.  
- 🤖 **Detecção Automática com IA**: Utilização da API da ACRCloud para extrair o *fingerprint* do áudio, identificar as músicas com precisão e retornar metadados completos, incluindo timestamps de início e fim.  
- 📄 **Geração de Relatórios (EDL)**: Criação automática de relatórios de uso musical no formato Edit Decision List (EDL), prontos para serem enviados aos departamentos responsáveis.  
- 📊 **Dashboard Analítico**: Painel para gestores com métricas sobre as músicas mais tocadas, volume de produção por editor e monitoramento do status de conformidade.  
- 🗄️ **Histórico e Pesquisa**: Banco de dados centralizado que permite a pesquisa e auditoria de mídias processadas anteriormente.  

---

## 🚀 Stack Tecnológica
- **Frontend**: React, Next.js, TypeScript  
- **Backend (API Gateway/BFF)**: Node.js  
- **Backend (Core/Processamento)**: Python  
- **Banco de Dados**: MySQL  
- **API de Reconhecimento Musical**: ACRCloud  
- **Infraestrutura (Sugerida)**: Docker, AWS (S3, Lambda, EC2/Fargate)  

---

## 🔧 Instalação e Configuração

### Pré-requisitos
- Node.js (>= 18.x)  
- Python (>= 3.9)  
- Docker e Docker Compose  
- Acesso às chaves da API ACRCloud  

### Passo a Passo
Clone o repositório:
```bash

## **Frontend (React/Next.js)**

Para executar os testes do frontend:

```bash
docker-compose exec frontend npm test
```
## 🛠️ Arquitetura e Fluxo de Dados

O fluxo de dados do sistema ocorre em etapas bem definidas:

1.  **Upload:** O **Editor (Ricardo)** inicia o processo fazendo o *upload* de um arquivo de vídeo através da interface desenvolvida em **Next.js**.
2.  **Armazenamento:** O **backend em Node.js** recebe o arquivo, armazena-o em um **bucket** (ex: **AWS S3**), e registra uma nova tarefa no banco de dados **MySQL**.
3.  **Processamento:** Um serviço em **Python** baixa o arquivo, realiza a extração da trilha de áudio e a envia para a **API da ACRCloud** para identificação.
4.  **Enriquecimento:** Após a **ACRCloud** retornar os metadados, o serviço **Python** processa, estrutura e salva esses dados enriquecidos no **MySQL**.
5.  **Visualização:** A **Gestora (Lydia)** ou o **Editor** podem, então, acessar os relatórios e *dashboards* resultantes via **API do Node.js**.

## 🤝 Como Contribuir

Adotamos um **Git Flow simplificado** para gerenciar o desenvolvimento:

### Branches Principais

* **`main`**: Contém o código de produção (recebe apenas *merges* de `develop`).
* **`develop`**: Usada para integração contínua de novas funcionalidades.
* **`frontend`**: Branch de desenvolvimento exclusivo para o frontend.
* **`backend`**: Branch de desenvolvimento exclusivo para o backend.

## Fluxo de Trabalho

1.  **Atualize sua branch:**

    ```bash
    git checkout frontend
    git pull origin frontend
    ```

2.  **Desenvolva e faça commits claros seguindo o padrão de Commits Convencionais:**

    ```bash
    git add .
    git commit -m "feat(frontend): adiciona formulário de login #TICKET-123"
    ```

3.  **Envie suas alterações:**

    ```bash
    git push origin frontend
    ```

4.  **Abra um Pull Request** da sua branch para a `develop`.
