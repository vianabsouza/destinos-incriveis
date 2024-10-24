-- Usuarios
CREATE TABLE usuario (
  id_usuario SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  data_nascimento DATE NOT NULL,
  genero VARCHAR(1) NOT NULL
);

INSERT INTO usuario (nome, sobrenome, email, senha, telefone, data_nascimento, genero) VALUES
('Barbara', 'Viana', 'barbara@gmail.com', '$2b$12$4X', '(71) 91234-5678', '1995-09-15', 'F'),
('Breno', 'Barros', 'breno@gmail.com', '$2b$12$6y', '(11) 98765-4321', '1985-10-10', 'M'),
('David', 'Reis', 'david@gmail.com', '$2b$12$9V', '(21) 92345-6789', '1992-12-12', 'M'),
('Galdino', 'Junior', 'galdino@gmail.com', '$2b$12$7Z', '(31) 93456-7890', '1988-06-05', 'M'),
('Hallysson', 'Mateus', 'hallysson@gmail.com', '$2b$12$3G', '(41) 94567-1234', '1990-04-25', 'M');

CREATE TABLE usuarioEndereco (
  id_usuario_endereco SERIAL PRIMARY KEY,
  logradouro VARCHAR(100) NOT NULL,
  bairro VARCHAR(50) NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  uf CHAR(2) NOT NULL,
  cep VARCHAR(9) NOT NULL,
  id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

INSERT INTO usuarioEndereco (id_usuario, logradouro, bairro, cidade, uf, cep) VALUES
(1, 'Av. das Palmeiras, 234', 'Centro', 'Salvador', 'BA', '40010-000'),
(2, 'Av. Paulista, 999', 'Bela Vista', 'São Paulo', 'SP', '01311-200'),
(3, 'Rua do Sol, 456', 'Laranjeiras', 'Rio de Janeiro', 'RJ', '22240-003'),
(4, 'Rua das Acácias', 'Pampulha', 'Belo Horizonte', 'MG', '31270-010'),
(5, 'Rua das Flores, 123', 'Jardim das Rosas', 'Curitiba', 'PR', '80010-150');

-- Voos
CREATE TABLE voo (
  id_voo SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  horario TIME NOT NULL,
  data DATE NOT NULL,
  tipo_aviao VARCHAR(50) NOT NULL,
  num_max_pessoas INT NOT NULL,
  id_local_embarque INT NOT NULL,
  id_local_destino INT NOT NULL,
  CONSTRAINT fk_local_embarque FOREIGN KEY (id_local_embarque) REFERENCES vooLocalizacao(id_localizacao) ON DELETE CASCADE,
  CONSTRAINT fk_local_destino FOREIGN KEY (id_local_destino) REFERENCES vooLocalizacao(id_localizacao) ON DELETE CASCADE
);

INSERT INTO voo (nome, horario, data, tipo_aviao, num_max_pessoas, id_local_embarque, id_local_destino) VALUES
('Voo A', '10:00', '2024-10-18', 'Latam 737', 30, 1, 4),
('Voo B', '12:00', '2024-10-05', 'Blue 4572', 45, 3, 5),
('Voo C', '13:00', '2024-11-20', 'Gol 234', 60, 1, 6),
('Voo D', '15:00', '2024-11-25', 'Avianca 457', 50, 2, 4),
('Voo E', '18:00', '2024-12-08', 'Passaredo 681', 20, 4, 5);

CREATE TABLE vooLocalizacao (
  id_localizacao SERIAL PRIMARY KEY,
  local VARCHAR(50) NOT NULL,
  portao VARCHAR(10) NOT NULL
);

INSERT INTO vooLocalizacao (local, portao) VALUES
('Aeroporto A', '12A'),
('Aeroporto B', '3B'),
('Aeroporto C', '5D'),
('Aeroporto D', '8A'),
('Aeroporto E', '9C'),
('Aeroporto F', '7F');

-- Promoções
CREATE TABLE promocao (
  id_promocao SERIAL PRIMARY KEY,
  descricao VARCHAR(50) NOT NULL,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  desconto DECIMAL(5, 2) NOT NULL
);

INSERT INTO promocao (descricao, data_inicio, data_fim, valor, desconto) VALUES
('Promoção de Verão', '2024-01-01', '2024-01-31', 200.00, 20.00),
('Promoção de Natal', '2024-12-01', '2024-12-25', 150.00, 15.00),
('Black Friday', '2024-11-01', '2024-11-30', 100.00, 30.00),
('Promoção de Fim de Ano', '2024-12-26', '2024-12-31', 250.00, 25.00),
('Dia das Mães', '2024-05-01', '2024-05-10', 120.00, 10.00);

-- Reviews
CREATE TABLE review (
  id_review SERIAL PRIMARY KEY,
  nota INT NOT NULL CHECK (nota >= 1 AND nota <= 5),
  comentario TEXT NOT NULL,
  data DATE NOT NULL,
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

INSERT INTO review (nota, comentario, data, fk_id_usuario) VALUES
(5, 'Muito bom!', '2024-10-30', 1),
(3, 'Tive alguns problemas para pegar minha passagem.', '2024-10-10', 1),
(4, 'Bom', '2024-11-25', 2),
(5, 'Ótimo', '2024-12-15', 3),
(4, 'Experiência agradável', '2024-10-20', 4);

-- Compras
CREATE TABLE compraMetodoPagamento (
  id_metodo_pagamento SERIAL PRIMARY KEY,
  descricao VARCHAR(50) NOT NULL,
  taxa NUMERIC(3,2) NOT NULL
)

INSERT INTO compraMetodoPagamento (descricao, taxa) VALUES
('Cartão de Crédito', 2.5),
('Cartão de Débito', 1.5),
('Transferência Bancária', 0.0),
('PayPal', 3.0),
('Boleto Bancário', 1.0),
('Pix', 0.5),
('Financiamento Direto', 4.0),
('Cartão Pré-Pago', 2.0),
('Apple Pay', 2.5),
('Google Pay', 2.5);

-- Compras
CREATE TABLE compra (
  id_compra SERIAL PRIMARY KEY,
  data_compra DATE NOT NULL,
  valor NUMERIC(10, 2) NOT NULL,
  fk_id_usuario INT NOT NULL,
  fk_id_voo INT NOT NULL,
  fk_id_promocao INT,
  fk_id_metodo_pagamento INT NOT NULL,
  CONSTRAINT fk_usuario_compra FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario),
  CONSTRAINT fk_voo_compra FOREIGN KEY (fk_id_voo) REFERENCES voo(id_voo),
  CONSTRAINT fk_promocao_compra FOREIGN KEY (fk_id_promocao) REFERENCES promocao(id_promocao),
  CONSTRAINT fk_metodo_pagamento_compra FOREIGN KEY (fk_id_metodo_pagamento) REFERENCES compraMetodoPagamento(id_metodo_pagamento)
);

INSERT INTO compra (data_compra, valor, fk_id_usuario, fk_id_voo, fk_id_promocao, fk_id_metodo_pagamento) VALUES
('2024-01-03', 1250.00, 1, 1, 1, 6),
('2024-05-05', 1450.50, 2, 2, NULL, 3),
('2024-05-09', 1320.75, 2, 3, 5, 2),
('2024-12-01', 1600.00, 3, 5, NULL, 1),
('2024-05-06', 1180.90, 3, 4, 5, 7),
('2024-11-12', 1725.40, 3, 3, 3, 5),
('2024-11-10', 1500.00, 4, 3, 3, 9),
('2024-12-04', 1900.00, 5, 5, 2, 4),
('2024-01-28', 1275.30, 4, 1, 1, 8),
('2024-08-21', 1800.00, 1, 2, NULL, 10);

-- Queries
SELECT * FROM usuario;

SELECT * FROM promocao WHERE data_inicio >= CURRENT_DATE;

SELECT * FROM voo WHERE num_max_pessoas <= 50;

SELECT * FROM voo WHERE id_local_destino = 4;

-- Retorna os usuários que fizeram uma compra, juntamente com a data e o valor
SELECT compra.data_compra, compra.valor, usuario.nome
FROM compra
INNER JOIN usuario
ON compra.fk_id_usuario = usuarios.id_usuario;

-- Retorna os usuários e quais promoções eles compraram
SELECT usuario.nome, promocao.descricao
FROM usuario
INNER JOIN compra ON usuario.id_usuario = compra.fk_id_usuario
INNER JOIN promocao ON compra.fk_id_promocao = promocao.id_promocao;

-- Retorna comentário, nota, data e usuários que fizeram algum comentário
SELECT review.comentario, review.nota, review.data, usuario.nome, usuario.sobrenome
FROM review
INNER JOIN usuario
ON review.fk_id_usuario = usuario.id_usuario;

-- Retorna todos os dados referêntes aos usuários e suas compras
SELECT usuario.*, compra.*
FROM usuario
LEFT JOIN compra ON usuario.id_usuario = compra.fk_id_usuario;

-- Retorna as promoções que tiveram maior desconto
SELECT descricao, desconto
FROM promocao
ORDER BY desconto DESC;

-- Retorna os voos que ocorreram entre duas datas específicas
SELECT nome, data, horario
FROM voo
WHERE data BETWEEN '2024-11-01' AND '2024-12-31';

-- Retorna os usuários que não fizeram nenhuma compra
SELECT usuario.nome, usuario.sobrenome
FROM usuario
LEFT JOIN compra ON usuario.id_usuario = compra.fk_id_usuario
WHERE compra.id_compra IS NULL;

-- Retorna a quantidade de compras feitas por cada usuário
SELECT usuario.nome, usuario.sobrenome, COUNT(compra.id_compra) AS total_compras
FROM usuario
LEFT JOIN compra ON usuario.id_usuario = compra.fk_id_usuario
GROUP BY usuario.nome, usuario.sobrenome;

-- Verifique os voos com destino ao "Aeroporto D"
SELECT * FROM voo
WHERE id_local_destino = 4;

-- Retorna os voos que ainda têm vagas disponíveis (assumindo que já existem reservas):
SELECT voo.nome, voo.num_max_pessoas - COALESCE(SUM(compra.id_compra), 0) AS vagas_disponiveis
FROM voo
LEFT JOIN compra ON voo.id_voo = compra.fk_id_voo
GROUP BY voo.nome, voo.num_max_pessoas;