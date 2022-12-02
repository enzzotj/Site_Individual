var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listarUsuario/:idUsuario", function (req, res) {
    usuarioController.listarUsuario(req, res);
});
router.get("/qtdTime", function (req, res) {
    usuarioController.qtdTime(req, res);
});

router.get("/listarPartida", function (req, res) {
    usuarioController.listarPartida(req, res);
});

router.get("/listarVotos", function (req, res) {
    usuarioController.listarVotos(req, res);
});

router.get("/listarTimes", function (req, res) {
    usuarioController.listarTimes(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastraVoto", function (req, res) {
    usuarioController.cadastraVoto(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.put("/atualizarVoto/:idUsuario", function (req, res) {
    usuarioController.atualizarVoto(req, res);
});

router.put("/atualizarPergunta/:idUsuario", function (req, res) {
    usuarioController.atualizarPergunta(req, res);
});

router.put("/moedaAtt/:idUsuario", function (req, res) {
    usuarioController.moedaAtt(req, res);
});

module.exports = router;