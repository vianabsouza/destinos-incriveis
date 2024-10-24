# Tabela 3FN - Usuario

## Usuario

| id | nome      | sobrenome | email              | senha      | telefone         | data_nascimento | genero |
|----|-----------|-----------|--------------------|------------|------------------|-----------------|--------|
| 1  | Barbara   | Viana     | barbara@gmail.com  | $2b$12$4X  | (71) 91234-5678  | 15/09/1995      | F      |
| 2  | Breno     | Barros    | breno@gmail.com    | $2b$12$6y  | (11) 98765-4321  | 10/10/1985      | M      |
| 3  | David     | Reis      | david@gmail.com    | $2b$12$9V  | (21) 92345-6789  | 12/12/1992      | M      |
| 4  | Galdino   | Junior    | galdino@gmail.com  | $2b$12$7Z  | (31) 93456-7890  | 05/06/1988      | M      |
| 5  | Hallysson | Mateus    | hallysson@gmail.com| $2b$12$3G  | (41) 94567-1234  | 25/04/1990      | M      |

## UsuarioEndereco

| id_usuario | logradouro                  | bairro           | cidade           | uf | cep        |
|------------|-----------------------------|------------------|------------------|----|------------|
| 1          | Av. das Palmeiras, 234      | Centro           | Salvador         | BA | 40010-000  |
| 2          | Av. Paulista, 999           | Bela Vista       | São Paulo        | SP | 01311-200  |
| 3          | Rua do Sol, 456             | Laranjeiras      | Rio de Janeiro   | RJ | 22240-003  |
| 4          | Rua das Acácias             | Pampulha         | Belo Horizonte   | MG | 31270-010  |
| 5          | Rua das Flores, 123         | Jardim das Rosas | Curitiba         | PR | 80010-150  |


# Tabela 3FN - Compra

## Compra

| id | data_compra | valor      | fk_id_usuario | fk_id_voo | fk_id_promocao | fk_id_metodo_pagamento  |
|----|-------------|------------|---------------|-----------|-----------------|------------------------|
| 1  | 03/01/2024  | 1.250,00   | 1             | 1         | 1               | 6                      |
| 2  | 05/05/2024  | 1.450,50   | 2             | 2         | NULL            | 3                      |
| 3  | 09/05/2024  | 1.320,75   | 2             | 3         | 5               | 2                      |
| 4  | 01/12/2024  | 1.600,00   | 3             | 5         | NULL            | 1                      |
| 5  | 06/05/2024  | 1.180,90   | 3             | 4         | 5               | 7                      |
| 6  | 12/11/2024  | 1.725,40   | 3             | 3         | 3               | 5                      |
| 7  | 10/11/2024  | 1.500,00   | 4             | 3         | 3               | 9                      |
| 8  | 04/12/2024  | 1.900,00   | 5             | 5         | 2               | 4                      |
| 9  | 28/01/2024  | 1.275,30   | 4             | 1         | 1               | 8                      |
| 10 | 21/08/2024  | 1.800,00   | 1             | 2         | NULL            | 10                     |

## CompraMetodoPagamento

| id | descricao                      | taxa   |
|----|--------------------------------|--------|
| 1  | Cartão de Crédito              | 2.5%   |
| 2  | Cartão de Débito               | 1.5%   |
| 3  | Transferência Bancária         | 0.0%   |
| 4  | PayPal                         | 3.0%   |
| 5  | Boleto Bancário                | 1.0%   |
| 6  | Pix                            | 0.5%   |
| 7  | Financiamento Direto           | 4.0%   |
| 8  | Cartão Pré-Pago                | 2.0%   |
| 9  | Apple Pay                      | 2.5%   |
| 10 | Google Pay                     | 2.5%   |

# Tabela 3FN - Voo

## Voo

| id | nome  | horario | data        | tipo_aviao    | num_max_pessoas | id_local_embarque | id_local_destino |
|----|-------|---------|-------------|---------------|-----------------|-------------------|------------------|
| 1  | Voo A | 10:00   | 18/10/2024  | Latam 737     | 30              | 1                 | 4                |
| 2  | Voo B | 12:00   | 05/10/2024  | Blue 4572     | 45              | 3                 | 5                |
| 3  | Voo C | 13:00   | 20/11/2024  | Gol 234       | 60              | 1                 | 6                |
| 4  | Voo D | 15:00   | 25/11/2024  | Avianca 457   | 50              | 2                 | 4                |
| 5  | Voo E | 18:00   | 08/12/2024  | Passaredo 681 | 20              | 4                 | 5                |

## VooLocalizacao

| id_localizacao  | local          | portao |
|-----------------|----------------|--------|
| 1               | Aeroporto A    | 12A    |
| 2               | Aeroporto B    | 3B     |
| 3               | Aeroporto C    | 5D     |
| 4               | Aeroporto D    | 8A     |
| 5               | Aeroporto E    | 9C     |
| 6               | Aeroporto F    | 7F     |

# Tabela 3FN - Promoção

## Promocao

| id | descricao                     | data_inicio   | data_fim      | valor | desconto |
|----|-------------------------------|---------------|---------------|-------|----------|
| 1  | Promoção de Verão             | 01/01/2024    | 31/01/2024    | 200   | 20%      |
| 2  | Promoção de Natal             | 01/12/2024    | 25/12/2024    | 150   | 15%      |
| 3  | Black Friday                  | 01/11/2024    | 30/11/2024    | 100   | 30%      |
| 4  | Promoção de Fim de Ano        | 26/12/2024    | 31/12/2024    | 250   | 25%      |
| 5  | Dia das Mães                  | 01/05/2024    | 10/05/2024    | 120   | 10%      |

# Tabela 3FN - Review

## Review

| id | nota | comentario                                        | data        | fk_id_usuario |
|----|------|---------------------------------------------------|-------------|---------------|
| 1  | 5    | Muito bom!                                        | 30/10/2024  | 1             |
| 2  | 3    | Tive alguns problemas para pegar minha passagem.  | 10/10/2024  | 1             |
| 3  | 4    | Bom                                               | 25/11/2024  | 2             |
| 4  | 5    | Ótimo                                             | 15/12/2024  | 3             |
| 5  | 4    | Experiência agradável                             | 20/10/2024  | 4             |
