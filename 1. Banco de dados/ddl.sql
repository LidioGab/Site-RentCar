
'TABELA DE CADASTRO DE CLIENTE'

create table tb_cliente(
id_cliente 			int primary key auto_increment,
nm_cliente			varchar(200) not null,
ds_cpf				varchar(50) not null unique,
ds_telefone			varchar(50) not null unique,
ds_email			varchar(100) not null unique,
ds_cnh				varchar(500) not null unique

);