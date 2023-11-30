import classNames from 'classnames';
import Item from './item';
import style from './menu.module.scss'
import router from '@/src/routes/router.json'

interface IMenu {
    isActive: boolean
}

export default function Menu({ isActive }: IMenu) {
    return (
        <nav className={classNames({
            [style["menu"]]: true,
            [style['menu-open']]: isActive
        })}>
            <ul className={style["menu__itens"]}>
                {router.map((item) => (
                    <Item key={item.id} label={item.label} to={item.to} />
                ))}
            </ul>
        </nav>
    );
}
