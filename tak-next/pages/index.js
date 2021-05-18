import Head from 'next/head';

export default function Home() {

    return (
        <>
            <Head>
                <title>Tak Ghoul</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Neue&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/styles/index.css" type="text/css" media="all" />
            </Head>

            <header>
                <nav className="navBar">
                    <logo className="logo">
                        <img src="/images/logo/Logo 2 dragão branca sem fundo.png" alt="logo" />
                    </logo>
                    <a className="conect">
                        <p>Conectar</p>
                    </a>
                </nav>
            </header>

            <nav className="navMenu">
                <ul className="buttonIcon">
                    
                    <div className="search-input">
                        <input type="text" placeholder="Digite"/>
                        <img src="/icon/lupa.svg" alt="lupa" />
                    </div>
                     
                    <div className="ul-li">
                        <li>
                            <a>
                                <img src="/icon/dragao.svg" alt="dragao" />
                                <p> Estilos </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/lightbulb.svg" alt="lightbulb" />
                                <p> Ideias </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/worldwide.svg" alt="worldwide" />
                                <p> Explorar </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/maquina-de-tatuagem.svg" alt="maquina" />
                                <p> Tatuadores </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/estudio-de-tatuagem.svg" alt="estudio" />
                                <p> Estúdios </p>
                            </a>
                        </li>
                    </div>

                </ul>
            </nav>

            <div>
                <div className="btn-filter">
                    <button type="button">
                        <img src="/icon/filter-filled-tool-symbol.svg" alt="filtro" />
                    </button>
                </div>

                <div>
                    <section className="layout-grid">

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/egyptian/7712971313e244c0f0672824d3acc182.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/angels/980acb3243ec7b1d61d7c967c9649432.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/angels/36bde2d8e4ccb9e4d5477f6c4f39b3ff.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/egyptian/b96bc38958a94283fed7bf8b01e81078.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/angels/51e0e04943d40670872d7d3a6cba5a44.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/gothic/d8842b380d2d6652e3d01516bdd503fd.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/animal/170080334ee740aee275cecd356020c0.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/geometric/61977c2507788c80d6d0a355894eef5f.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/eyes/2294346cf8823f9ee5c7346012a6befb.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/eyes/7e72b0c8e35e3aea4f924926a28f4b3b.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/geometric/e95e5a0f2bcaf4d9759a5d544741dbf7.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/science/5d0020f0571527960babe6a6ed9a8c02.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/surrealist/35ab76c681bcc9a56f9d0d87148b9889.jpg" />
                        </div>

                        <div className="img-content">
                            <img src="/images/image-tattoo/category/angels/5281177fab08489472d1c5eeeb51c540.jpg" />
                        </div>
                        <div className="img-content">
                            <img src="/images/image-tattoo/category/geometric/eb799888e1b722e3b3c0ccdce8374fdd.jpg" />
                        </div>

                    </section>
                </div>
            </div>

            <div id="modal-conectar" className="modal-container">
                <div className="modal">
                    <button className="close-login">x</button>
                    <h4 className="frase-login">Conecte-se ao universo</h4>
                    <img className="logo-title" src="/images/logo/Logo 2 dragão sem fundo.png" alt="" />
                    <form action="">
                        <div>
                            <label className="label-email-login" for="email">Email</label><br/>
                            <input type="text" className="input-email-login"/>
                        </div>
                        <div>
                            <label className="label-senha-login" for="senha">Senha</label><br/>
                            <input type="text" className="input-password-login"/>
                        </div>
                    </form>
                    <p className="link-recupera-senha">Esqueçeu sua senha?<a href="">Recupere-a</a></p><br/>
                    <button className="btn-conectar-login" type="submit">Conectar</button>
                    <p className="link-criar-conta">Não tem uma conta?<a href="">Crie uma!</a></p><br/>
                </div>
            </div>
        </>
    )
}
