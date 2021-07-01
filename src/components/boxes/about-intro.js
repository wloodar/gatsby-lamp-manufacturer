/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "../../components"
import cs from 'classnames';
import s from './about-intro.module.scss';

const AboutIntro = () => {
    return (
        <div className={s.about}>
            <div className={s.about__image}>
                <div className={s.about__overlay}>
                    <div className={cs("container", s.about__box)}>
                        <h2>Poznaj ELCO <span>lampy ceramiczne</span></h2>
                        <p className="bs-p">Od ponad 20 lat tworzymy lampy ceramiczne z abażurem. Cały proces produkcyjny od początku do końca odbywa się na terenie Polski. Lampy ceramiczne naszego wykonania, oferują zarówno solidną jakość wykonania jak i elegancki design.</p>
                        <Link url="/na-temat-elco" className="action-border">Dowiedz się więcej</Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export { AboutIntro }