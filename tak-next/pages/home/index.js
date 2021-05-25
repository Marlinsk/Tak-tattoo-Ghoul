import Head from 'next/head';
import React, { useRef } from 'react';

export default function Home() {

    var containerBox = useRef(null);
    var dropDown = useRef(null);
    var rotateArrowDropDown = useRef(null);

    function rolagem(e) {
        if (e.deltaY > 0) {
            containerBox.current.scrollLeft += 400;
        }
        else {
            e.preventDefault();
            containerBox.current.scrollLeft -= 400;
        }
    }

    function openDropDown() {
        var a = dropDown.current.classList.toggle('close');
        var rotate = 0;
        if (a !== true) {
            rotate = -180;
        }
        rotateArrowDropDown.current.style.transform = `rotate(${rotate}deg)`;

    }

    var imageList = [
        "/images/image-tattoo/category/egyptian/7712971313e244c0f0672824d3acc182.jpg",
        "/images/image-tattoo/category/angels/980acb3243ec7b1d61d7c967c9649432.jpg",
        "/images/image-tattoo/category/angels/36bde2d8e4ccb9e4d5477f6c4f39b3ff.jpg",
        "/images/image-tattoo/category/egyptian/b96bc38958a94283fed7bf8b01e81078.jpg",
        "/images/image-tattoo/category/angels/51e0e04943d40670872d7d3a6cba5a44.jpg",
        "/images/image-tattoo/category/gothic/d8842b380d2d6652e3d01516bdd503fd.jpg",
        "/images/image-tattoo/category/animal/170080334ee740aee275cecd356020c0.jpg",
        "/images/image-tattoo/category/geometric/61977c2507788c80d6d0a355894eef5f.jpg",
        "/images/image-tattoo/category/eyes/2294346cf8823f9ee5c7346012a6befb.jpg",
        "/images/image-tattoo/category/eyes/7e72b0c8e35e3aea4f924926a28f4b3b.jpg",
        "/images/image-tattoo/category/geometric/e95e5a0f2bcaf4d9759a5d544741dbf7.jpg",
        "/images/image-tattoo/category/science/5d0020f0571527960babe6a6ed9a8c02.jpg",
        "/images/image-tattoo/category/surrealist/35ab76c681bcc9a56f9d0d87148b9889.jpg",
        "/images/image-tattoo/category/angels/5281177fab08489472d1c5eeeb51c540.jpg",
        "/images/image-tattoo/category/geometric/eb799888e1b722e3b3c0ccdce8374fdd.jpg",
    ]

    return (
        <>
            <Head>
                <link rel="icon" href="/images/logo/Icone branco sem fundo.png" />
                <title>Tak Ghoul</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Neue&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Mandali&display=swap" rel="stylesheet"></link>

                <link rel="stylesheet" href="/styles/navbar.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/grid.css" type="text/css" media="all" />
                <link rel="stylesheet" href="/styles/modal.css" type="text/css" media="all" />
            </Head>

            <body>
                <header>
                    <nav className="navbar">
                        <div className="navBarLeft">
                            <div className="logo">
                                <img src="/images/logo/Logo 2 dragão branca sem fundo.png" alt="logo" width="98" height="53" />
                            </div>
                            <div className="search-box">
                                <input className="search-bar" type="text" placeholder="Localidade" />
                                <a className="btn-location" href="">
                                    <img src="/icon/cursor.svg" alt="location-icon" />
                                </a>
                                <p className="btn-down-list" onClick={() => openDropDown()}>
                                    <img src="/icon/arrow-down-sign-to-navigate.svg" alt="dopdown-arrow-btn" ref={rotateArrowDropDown} />
                                </p>
                                <ul className="dropdown close" ref={dropDown}>
                                    <li className="itemdropdown">Lista</li>
                                    <li className="itemdropdown">Listax</li>
                                    <li className="itemdropdown">Listac</li>
                                    <li className="itemdropdown">Listaa</li>
                                    <li className="itemdropdown">Lista</li>
                                    <li className="itemdropdown">Listd</li>
                                </ul>
                            </div>
                        </div>
                        <ul>
                            <li><a>Início</a></li>
                            <li><a>Estilos</a></li>
                            <li><a>Explorar</a></li>
                        </ul>
                    </nav>
                </header>

                <br /><br />

                <h3 className="subtitle1"> Estúdios populares em . . . </h3>
                <div class="container-box" ref={containerBox} onWheel={(e) => rolagem(e)}>
                    <div class="boxes">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>
                </div>

                <br /><br />

                <h3 className="subtitle1"> Postagens de tattoo recentes em . . . </h3>
                <div>
                    <section className="layout-grid">
                        {imageList.map((item, key) => {
                            return (
                                <div className="img-content" key={key}>
                                    <img id="i-tattoo" className="img-tattoo" src={item} />
                                    <div className="who-posted">
                                        <foto />
                                        <p href="">Fulano Studio</p>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </div>

                <div id="modal-conectar" className="modal-container">
                    <div className="modal">
                        <button className="close-login">x</button>
                        <h4 className="frase-login">Conecte-se ao universo</h4>
                        <img className="logo-title" src="/images/logo/Logo 2 dragão sem fundo.png" alt="" />
                        <form action="">
                            <div>
                                <label className="label-email-login" for="email">Email</label><br />
                                <input type="text" className="input-email-login" />
                            </div>
                            <div>
                                <label className="label-senha-login" for="senha">Senha</label><br />
                                <input type="text" className="input-password-login" />
                            </div>
                        </form>
                        <p className="link-recupera-senha">Esqueçeu sua senha?<a href="">Recupere-a</a></p><br />
                        <button className="btn-conectar-login" type="submit">Conectar</button>
                        <p className="link-criar-conta">Não tem uma conta?<a href="">Crie uma!</a></p><br />
                    </div>
                </div>
            </body>
        </>
    )
}