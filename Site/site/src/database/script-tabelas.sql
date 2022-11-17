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