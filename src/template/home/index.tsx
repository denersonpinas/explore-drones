import Image from 'next/image';
import style from './home.module.scss'
import drone from '@/assets/images/d-1.png'
import ReadMore from '@/src/components/common/read-more';
import product from '@/assets/images/products_01-600x600.jpg'
import aboutImage from '@/assets/images/about.jpg'
import Articles from '@/src/components/common/article';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IDrones } from '@/src/server/entities/drones';

export default function HomeTemplate() {

    const [articles, setArticles] = useState<IDrones[]>([])

    useEffect(() => {
        axios.get('/api/drones')
            .then((data) => {
                setArticles(data.data)
            })
            .catch((error) => console.log(error))
    })

    return (
        <section className={style["home"]}>
            <section className={style["home__hero"]}>
                <h2 className={style["title"]}>Dronezy 300x</h2>
                <ReadMore to='/' label='Saiba Mais' />
                <Image
                    src={drone}
                    width={738}
                    height={339}
                    alt='Dronezy 300x' />
            </section>

            <section className={style["home__about"]} id='sobre'>
                <div className={style["image"]}>
                    <Image
                        src={aboutImage}
                        width={2005}
                        height={2560}
                        alt='Mão segurando um controle de Drone' />
                </div>
                <div className={style["content"]}>
                    <h2 className={style["title"]}>Somos Pilotos de Drones</h2>
                    <span className={style["disclaimer"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fugiat iste error commodi quisquam doloribus explicabo vel cum ex, assumenda laudantium, sint dignissimos odio veritatis dicta? Dolorum optio excepturi rem.
                    </span>
                    <div className={style["skills"]}>
                        <div className={style["skills__skill"]}>
                            <h3 className={style["title"]}>AWARDS</h3>
                            <span className={style["disclaimer"]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium natus velit. Assumenda labore alias atque libero tenetur iste molestiae deleniti possimus nulla qui facilis, quae odio nobis id suscipit?
                            </span>
                        </div>
                        <div className={style["skills__skill"]}>
                            <h3 className={style["title"]}>FAST CREW</h3>
                            <span className={style["disclaimer"]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero explicabo placeat illum aspernatur voluptates possimus minus quod alias eligendi veritatis sunt neque consectetur, nostrum, asperiores, et suscipit numquam delectus.
                            </span>
                        </div>
                        <div className={style["skills__skill"]}>
                            <h3 className={style["title"]}>
                                LICENSE</h3>
                            <span className={style["disclaimer"]}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vitae. Blanditiis labore ea numquam dolore quis harum molestiae esse non dolor mollitia, illo earum aliquam adipisci ut, sint quia asperiores!
                            </span>
                        </div>
                        <div className={style["skills__skill"]}>
                            <h3 className={style["title"]}>EXPERIENCE</h3>
                            <span className={style["disclaimer"]}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempora mollitia sapiente minus voluptatibus voluptas dicta suscipit, distinctio illum iste quia autem omnis perferendis repudiandae voluptatem. Corporis nam quam eos.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style["home__articles"]} id='artigos'>
                <h2 className={style["title"]}>Conheça os Principais Drones</h2>
                <div className={style["list-articles"]}>
                    {articles.map((article) => (
                        <Articles
                            key={article.id}
                            title={article.nome}
                            disclaimer={article.resumo}
                            to='/'
                            image={article.imagem} />
                    ))}
                </div>
            </section>
        </section>
    );
}
