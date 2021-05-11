import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@500&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/styles/index.css" type="text/css" media="all" />
            </Head>

            <header>
                <nav className="navBar">
                    <logo className="logo">Tak Tattoo Ghoul</logo>
                    <a className="conect">
                        <p>Conectar</p>
                    </a>
                </nav>
            </header>

            <nav className="navMenu">
                <ul className="buttonIcon">
                    <div className="div-input">
                        <button className="button-search close" onclick="closeInputSearch()">
                        </button>
                        <select id="cars" className="search-category">
                            <option value="Novas">Mais recentes</option>
                            <option value="saab">Mais proxiams</option>
                            <option value="opel">Inovadores</option>
                            <option value="audi">Mais curtidas</option>
                        </select>
                        <input type="text" className="search-input" placeholder="Procurar..." />
                        <button className="button-search do-it-search">
                        </button>
                    </div>

                    <div className="ul-li">
                        <li>
                            <a>
                                <img src="/icon/dragao.svg" alt="dragao" /> <p> Estilos </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/lightbulb.svg" alt="lightbulb" /> <p> Ideias </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/worldwide.svg" alt="worldwide" /> <p> Explorar </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/maquina-de-tatuagem.svg" alt="maquina" /> <p> Tatuadores </p>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="/icon/estudio-de-tatuagem.svg" alt="estudio" /> <p> Estúdios </p>
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>

            <div className="btn-filter">
                <button type="button">
                </button>
            </div>

            <div className="results">

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/animal/2cd8c11e5b70d5caf36bbe52d21e0f7e.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/angels/5281177fab08489472d1c5eeeb51c540.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/geometric/23aff439386afc02888d43f425d65f79.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/gothic/422271362a026c61d4df4eefd0d16a7a.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/flowers/1b6d3abcc280d075303907b1f9418ce4.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/eyes/f4d1a7d500a6422200cb620dfbfade9b.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/science/df93e5b0c43c6f514957cf0303be4b36.jpg" />
                </div>

                <div className="ht0">
                    <img src="../assets/images/image-tattoo/category/oriental/4174b7a5b926198a4906e125ba39b0b2.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/surrealist/18d1515fa2bb06165067dd6204862d5a.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/gothic/76960d774f2a8cb82c90b786b81980e6.jpg" />
                </div>

                <div className="ht5">
                    <img src="../assets/images/image-tattoo/category/animal/e993b158e29ee2b5807a4ddbd71f0b86.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/gothic/2402e35d92157379d752feb5d2ea72b9.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/surrealist/35ab76c681bcc9a56f9d0d87148b9889.jpg" />
                </div>

                <div className="ht6">
                    <img src="../assets/images/image-tattoo/category/flowers/9d6dab02be68edfae37b72cde1f89394.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/angels/51e0e04943d40670872d7d3a6cba5a44.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/space/fe64a701768351da7236b07a7f73d462.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/animal/f05f15af4a472e43065b41a275c453e9.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/space/86566866c148db9dff7f75e560cfe410.jpg" />
                </div>

                <div className="ht5">
                    <img src="../assets/images/image-tattoo/category/gothic/acc564a8303c321d2242d28f74a57d26.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/gothic/cc5f46b84ff41ef5cf6b20fae258515a.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/surrealist/a8ad41496c475ae7ea1f02cea4e8176f.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/surrealist/d2fbb44abbeacf1fe3494b928816f0ab.jpg" />
                </div>

                <div className="ht2">
                    <img src="../assets/images/image-tattoo/category/egyptian/7712971313e244c0f0672824d3acc182.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/geometric/23aff439386afc02888d43f425d65f79.jpg" />
                </div>

                <div className="ht3">
                    <img src="../assets/images/image-tattoo/category/space/6ec4a9b2eae625c27eecf7e4695e4cfa.jpg" />
                </div>

                <div className="ht4">
                    <img src="../assets/images/image-tattoo/category/animal/6f93b4fbf8aca6d40a4807f918848778.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/animal/babfda414ba96688ca939c690201fb59.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/animal/822f805edb9ddde96717f54f7f6479de.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/animal/822f805edb9ddde96717f54f7f6479de.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/surrealist/649795f3325c11d760bfc480d376bbcd.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/surrealist/6a2992e9b4d3ab28f5eba22f14187d1c.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/surrealist/785530ec5ebfa9ab8a3329cd702ff48a.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/surrealist/e3e86b37cce225a269ef08aef8430c07.jpg" />
                </div>

                <div className="ht1">
                    <img src="../assets/images/image-tattoo/category/sci-fi/19736d3475808e5d2125541fe2445f10.jpg" />
                </div>

            </div>

        </>
    )
}
