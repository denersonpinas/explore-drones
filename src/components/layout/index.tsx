import Footer from "../footer";
import Header from "../header";
import style from './layout.module.scss'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={style["container"]}>
            <Header />
            {children}
            <Footer />
        </section>
    );
}
