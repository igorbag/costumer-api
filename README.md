Treinamento BrainMachine - NodeJS:

Criar API do zero que possua:
End points privados via Basic authentication:
- crud de usuário (username e senha)
- obtenção de perfil do usuário
- crud de clientes Nome, CPF, Email, Telefone, Endereço, Redes sociais

Todas as operações de persistência devem ser validades pelo schema do mongoose com o máximo de validations possíveis

O end-point de get em /clientes deve permitir filtragem da lista via query string.
Os filtros são de caráter opcional e devem contemplar os atributos de: nome, CPF, telefone e email

Extra:
Realizar autenticação através de token JWT
