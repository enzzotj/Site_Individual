CREATE DATABASE ePlayers;
USE ePlayers;

CREATE TABLE time(
	idTime INT PRIMARY KEY AUTO_INCREMENT,
    nomeTime VARCHAR(45),
    siglaTime CHAR(3),
    caminhoImgLogo VARCHAR(150)
);

CREATE TABLE usuario(
	idUsuario INT  AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    pergunta TINYINT,
    voto TINYINT,
	moeda INT,
    fkTime INT,
    FOREIGN KEY (fkTime) REFERENCES time(idTime),
	PRIMARY KEY(idUsuario, fkTime)
);

CREATE TABLE campeonato(
	idCampeonato INT PRIMARY KEY AUTO_INCREMENT,
    nomeCampeonato VARCHAR(45)
);

CREATE TABLE partida(
	idPartida INT AUTO_INCREMENT,
    fase VARCHAR(45),
    dataPartida DATETIME,
    fkTime1 INT,
    FOREIGN KEY (fkTime1) REFERENCES time(idTime),
    fkTime2 INT,
    FOREIGN KEY (fkTime2) REFERENCES time(idTime),
    fkCampeonato INT,
    FOREIGN KEY (fkCampeonato) REFERENCES campeonato(idCampeonato),
    PRIMARY  KEY(idPartida, fkTime1, fkTime2, fkCampeonato)
);

CREATE TABLE voto(
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    fkPartida INT,
    FOREIGN KEY (fkPartida) REFERENCES partida(idPartida),
    votoTime1 TINYINT,
    votoTime2 TINYINT,
    PRIMARY KEY(fkUsuario, fkPartida)
);

insert into time(nomeTime, siglaTime, caminhoImgLogo) values 
('Loud', 'LLL', 'LOUD_logo.png'),
('Pain', 'PNG', 'logo_pain.png'),
('Red', 'RED', 'RED_logo.png'),
('Intz', 'ITZ', 'INTZ_Logo.png'),
('Flamengo', 'FLA', 'flamengo-esports-logo.webp'),
('Rensga', 'RNS', 'Rensga_Esportslogo_square.webp'),
('Kabum', 'KBM', 'Kabum.png'),
('Libert', 'LBR', 'libert.png'),
('Furia', 'FUR', 'Furia_Esports_logo.png'),
('Netshoes Miners', 'NMG', 'Netshoes_Minerslogo_square.webp');

insert into campeonato(nomeCampeonato) values('CBLOL');

insert into partida(fase, dataPartida, fkTime1, fkTime2, fkCampeonato) values('1 fase', '2022-11-22 16:00', 1, 2, 1);