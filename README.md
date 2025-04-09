# 🧠 Formatador de CPF, CNPJ e Celular

Este é um projeto web feito com **HTML, CSS e JavaScript puro**, que permite formatar automaticamente números de **CPF, CNPJ e celular**. A formatação é feita de forma inteligente assim que o usuário digita ou cola o número.

## 🔧 Funcionalidades

- Formatação automática de:
  - CPF: `12345678900` → `123.456.789-00`
  - CNPJ: `12644425000112` → `12.644.425/0001-12`
  - Celular: `22998164118` → mantido sem formatação (ou pode ser adaptado)

##🌙 Recursos Extras:

- Histórico com os **últimos 5 números formatados**
- Botão de **modo escuro**
- Copia o resultado automaticamente para a **área de transferência**
- Feedback visual após cópia
- Design responsivo para dispositivos móveis
- Armazenamento de **histórico e tema no localStorage**

## 📷 Exemplo visual

![Exemplo do projeto](https://imgur.com/a/GRKtXb1)

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🚀 Como Executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `formatar.html` no navegador.
3. Insira um número e clique em **"Formatar"**.

## 🌟 Próximas Atualizações (Sugestões)

- 🔄 **Reconhecimento automático de tipo de dado (CPF, CNPJ, celular) com formatação imediata ao digitar**
- 📱 **Aplicar máscara dinâmica no campo enquanto o usuário digita** (sem precisar clicar no botão)
- 🧾 **Formatar outros tipos de dados**:
  - CEP (`00000000` → `00000-000`)
  - RG (`123456789` → `12.345.678-9`)
  - Data de nascimento (`01012000` → `01/01/2000`)
- ☁️ **Salvar dados formatados permanentemente em um backend ou arquivo local**
- 💾 **Exportar histórico como .txt ou .csv**
- 💡 **Validação de dados (verificar se o CPF ou CNPJ é válido)**
- 🖥️ **Transformar em app de desktop com Electron**

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.

---
