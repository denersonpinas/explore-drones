import Image from "next/image";
import { MdClose, MdMenu } from "react-icons/md";
import logo from '../../assets/images/explorer-drones.png'
import Link from "next/link";
import style from './header.module.scss'
import Menu from "./menu";
import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className={style["section-header"]}>
            <Link href={'/'} scroll={false}>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    className={style['logo']}
                    alt="Logo Explorer Drones" />
            </Link>
            <Menu isActive={open} />
            {!open ?
                <MdMenu onClick={() => setOpen(!open)} size={24} className={style["section-header__dropdown"]} /> :
                <MdClose onClick={() => setOpen(!open)} size={24} className={style["section-header__dropdown"]} />
            }
        </header>
    );
}
