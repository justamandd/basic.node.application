# API base com banco de dados ORACLE

Este projeto tem como objetivo mostrar a base para se desenvolver uma API

## Configuração do .env

O arquivo `.env` é utilizado para definir variáveis de ambiente.

Dentro do arquivo `.env.example` existe a base de variáveis da conexão com o banco de dados, você deve inserir seus dados, copiar e criar um `.env` no root do projeto.

## Seção dedicada a estudantes da PUCC

Para realizar a conexão com o banco de dados da PUC você deve baixar os seguintes items:
- [Oracle Instant Client](https://www.oracle.com/br/database/technologies/instant-client/winx64-64-downloads.html)
- [Fortinet VPN](https://www.fortinet.com/br/support/product-downloads) (CASO NÃO ESTEJA EM UMA MÁQUINA DA PUCC)

Você deve conectar a VPN com a PUCC.

O Oracle Instant Client deve ser extraído em C:\oracle, caso não tenha uma pasta oracle no C: basta criá-la. O path deverá ficar parecido com esse: `C:\oracle\instantclient_21_7`

Após esse procedimento você deve adicionar essa rota à variável de ambiente PATH da sua máquina. No Windows:

- Pesquise por `Editar as variáveis de ambiente do sistema` caso não seja administrador pesquise por `Editar as variáveis de ambiente para sua conta`
- Copie o caminho até o instant client. Ex: `C:\oracle\instantclient_21_7`
- Em Variáveis de usuário para *nome da sua máquina* procure por PATH
- Clique nela e clique em **editar**
- Clique em novo e cole o caminho até o *oracle instant client*

Com isso estamos prontos para desenvolver!

Caso dê algum erro:
- Reinicie todos os consoles abertos e editores de código antes da adição do *oracle instant client* no *PATH*

