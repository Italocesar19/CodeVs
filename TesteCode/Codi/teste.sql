CREATE TABLE Animais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    sexo ENUM('Macho', 'Fêmea') NOT NULL,
    observacoes TEXT
);

-- Inserir alguns dados de exemplo
INSERT INTO Animais (nome, especie, raca, idade, sexo, observacoes)
VALUES
    ('Max', 'Cachorro', 'Labrador', 3, 'Macho', 'Animal saudável, vacinado.'),
    ('Bella', 'Gato', 'Siamês', 2, 'Fêmea', 'Castração recente.'),
    ('Toby', 'Cachorro', 'Bulldog', 5, 'Macho', 'Histórico de problemas respiratórios.'),
    ('Luna', 'Gato', 'Persa', 4, 'Fêmea', 'Boa saúde, toma vitaminas.'),
    ('Rex', 'Cachorro', 'Pastor Alemão', 6, 'Macho', 'Teve tratamento para displasia de quadril.');

-- Selecionar todos os dados da tabela
SELECT * FROM Animais;
