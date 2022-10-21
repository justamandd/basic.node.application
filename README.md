# API base com banco de dados ORACLE

Este projeto tem como objetivo mostrar a base para se desenvolver uma API

# Seção dedicada a estudantes da PUCC

Para realizar a conexão com o banco de dados da PUC você deve baixar os seguintes items:
- [Oracle Instant Client](https://www.oracle.com/br/database/technologies/instant-client/winx64-64-downloads.html)
- [Fortinet VPN](https://www.fortinet.com/br/support/product-downloads)

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
- Reinicie o console aberto antes da adição do *oracle instant client* no *PATH*