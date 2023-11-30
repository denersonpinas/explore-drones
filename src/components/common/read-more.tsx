import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import style from './read-more.module.scss'

interface IReadMore {
    to: string
    label: string
}

export default function ReadMore({ to, label }: IReadMore) {
    return (
        <Link href={to} scroll={false}>
            <span className={style["read-more"]}>
                {label}
                <MdOutlineArrowOutward size={16} />
            </span>
        </Link>
    );
}
