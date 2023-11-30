import Link from 'next/link';
import style from './footer.module.scss'
import logo from '@/assets/images/explorer-drones.png'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={style["footer"]}>
            <Link href={'/'} scroll={false}>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    className={style['logo']}
                    alt="Logo Explorer Drones" />
            </Link>
            <span className={style["copywhiter"]}>
                EXPLORER DRONES © 2023 ALL RIGHTS RESERVED
            </span>
        </footer>
    );
}
