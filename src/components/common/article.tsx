import Link from "next/link";
import ReadMore from "./read-more";
import style from './article.module.scss';
import Image from 'next/image';

interface IArticle {
    to: string
    image: string
    title: string
    disclaimer: string
}

export default function Articles({ to, image, title, disclaimer }: IArticle) {
    return (
        <article className={style["article"]}>
            <Link href={to} scroll={false}>
                <Image
                    src={image}
                    width={600}
                    height={600}
                    alt='Dronezy 300x'
                    className={style['article__image']} />
            </Link>
            <h3 className={style["title"]}>{title}</h3>
            <span className={style["disclaimer"]}>{disclaimer}</span>
            <ReadMore to={to} label='Saiba Mais' />
        </article>
    );
}
