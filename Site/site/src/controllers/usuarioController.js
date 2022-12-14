var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function qtdTime(req, res) {

    usuarioModel.qtdTime()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
    usuarioModel.listarUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarPartida(req, res) {

    usuarioModel.listarPartida()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarVotos(req, res) {

    usuarioModel.listarVotos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarTimes(req, res) {

    usuarioModel.listarTimes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var nomeTime = req.body.nomeTimeServer;
    var siglaTime = req.body.siglaTimeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nome = req.body.nomeServer;
    var time = req.body.timeServer;
    var moeda = req.body.moedaServer;
    var pergunta = req.body.perguntaServer;
    var voto = req.body.votoServer;
    var idUsuario = req.body.idUsuarioServer;
    var idTime = req.body.idTimeServer;
    var caminhoImgLogo = req.body.caminhoImgLogoServer;

    if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha, nome, time, moeda, pergunta, voto, idUsuario, nomeTime, siglaTime, idTime, caminhoImgLogo)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inv??lido(s)");
                    } else {
                        res.status(403).send("Mais de um usu??rio com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var time = req.body.timeServer;

    // Fa??a as valida????es dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else if (time == "") {
        res.status(400).send("Sua time est?? undefined!");
    } else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, time)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastraVoto(req, res) {
    // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var votoTime1 = req.body.votoTime1Server;
    var votoTime2 = req.body.votoTime2Server;
    

    // Fa??a as valida????es dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario est?? undefined!");
    } else if (votoTime1 == undefined) {
        res.status(400).send("Seu votoTime1 est?? undefined!");
    } else if (votoTime2 == undefined) {
        res.status(400).send("Sua votoTime2 est?? undefined!");
    } else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
        usuarioModel.cadastraVoto(idUsuario, votoTime1, votoTime2)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizarVoto(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.atualizarVoto(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function atualizarPergunta(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.atualizarPergunta(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function moedaAtt(req, res) {
    var moeda = req.body.mdServer;
    var idUsuario = req.params.idUsuario;

    usuarioModel.moedaAtt(moeda, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

module.exports = {
    entrar,
    cadastrar,
    cadastraVoto,
    listarVotos,
    listarPartida,
    listarTimes,
    atualizarVoto,
    qtdTime,
    atualizarPergunta,
    moedaAtt,
    listarUsuario,
    testar,
}