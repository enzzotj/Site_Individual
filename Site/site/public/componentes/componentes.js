class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>

        <div class="container_header">
        
        <div class="container">
            <div class="container_img_logo">
                <img onclick="window.location.href='./index.html'" src="./assets/icon/logoHome.png" alt="Logo">
            </div>

            <ul class="container_navegacao">
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./index.html#noticia">NOTÍCIAS</a></li>
            <li><a href="./horario.html">HORÁRIOS</a></li>
            <hr>
            <button onclick="window.location.href='./login.html'">LOGIN</button>
            </ul>
        </div>
        </div>
    </header>
        ` 
    }
}

customElements.define('main-header', Header);

class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="footer_conteudo">
                <div class="footer_link_ulteis">
                    <h2>Links Úteis</h2>
                    <br>
                    <ul>
                        <li><a href="https://www.riotgames.com/pt-br">Riot Games</a></li>
                        <li><a href="https://www.leagueoflegends.com/pt-br/?_gl=1*9o6ihf*_ga*NDA0NDUxODg3LjE2Njc3MDE3OTg.*_ga_FXBJE5DEDD*MTY2Nzg1OTg3Ny4zLjEuMTY2Nzg2MDQ4OC41OS4wLjA.&_ga=2.263026892.1158637625.1667859877-404451887.1667701798">League of Legends</a></li>
                        <li><a href="https://signup.leagueoflegends.com/pt-br/signup/redownload?_gl=1*hixsy*_ga*NDA0NDUxODg3LjE2Njc3MDE3OTg.*_ga_FXBJE5DEDD*MTY2Nzg1OTg3Ny4zLjAuMTY2Nzg1OTg3OS41OC4wLjA.&_ga=2.33390078.1158637625.1667859877-404451887.1667701798">Baixar Jogo</a></li>
                        <li><a href="https://www.leagueofgraphs.com">League of Graphs</a></li>
                    </ul>
                </div>
                <div class="footer_paginas">
                    <h2>Páginas</h2>
                    <br>
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./index.html#noticia">Notícias</a></li>
                        <li><a href="./horario.html">Horários</a></li>
                        <li><a href="./login.html">Login/Cadastrar</a></li>
                    </ul>
                </div>
            </div>
            <img onclick="window.location.href='./index.html'" src="./assets/icon/logoHome.png" alt="Logo">
            <div class="footer_conteudo footer_siganos_cadastrar">
                <div class="footer_siga_nos">
                    <h2>Faça parte do nosso clan, cadastre-se em nosso sistema:</h2>
                    <div class="footer_cadastrar">
                        <input type="email" placeholder="Email">
                        <button onclick="window.location.href='./login.html'">Cadastrar</button>
                    </div>
                </div>
                <div class="footer_img_siganos">
                    <h2>Siga-nos em:</h2>
                    <img onclick="window.location.href='https://www.facebook.com/LeagueofLegendsBrasil/'" src="./assets/img/facebook-logo-redondo.png" alt="Facebool">
                    <img onclick="window.location.href='https://www.instagram.com/leagueoflegendsbrasil/?hl=pt-br'" src="./assets/img/instagram_icon.webp" alt="Instagram">
                    <img onclick="window.location.href='https://www.twitch.tv/cblol'" src="./assets/img/twitch_icon.png" alt="Twitch">
                    <img onclick="window.location.href='https://www.youtube.com/c/leagueoflegends'" src="./assets/img/yout_icon.png" alt="Youtube">
                </div>
            </div>
        </div>
    </footer>
        ` 
    }
}

customElements.define('main-footer', Footer);