class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header>

        <div class="container_header">
        
        <div class="container">
            <div class="container_img_logo">
                <img src="./assets/icon/logoHome.png" alt="">
            </div>
            <ul class="container_navegacao">
            <li><a href="">HOME</a></li>
            <li><a href="">NOTÍCIAS</a></li>
            <li><a href="">HORÁRIOS</a></li>
            <hr>
            <button>LOGIN</button>
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
            <div>
                <img src="./assets/icon/logoHome.png" alt="">
            </div>
            <div>

            </div>
        </div>
    </footer>
        ` 
    }
}

customElements.define('main-footer', Footer);