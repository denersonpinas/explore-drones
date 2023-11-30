import style from './item.module.scss'

interface IItem {
    label: string
    to: string
}

export default function Item({ label, to }: IItem) {
    return (
        <li className={style['item']}>
            <a className={style["item__text"]} href={to}>
                {label}
            </a>
        </li>
    );
}
