/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "."
import cs from 'classnames';
import s from './scss/nav.module.scss';
import Ikona from '../images/elco-lampa-ikonka.png';

import InstagramIcon from '../images/icons/instagram.inline.svg';
import FacebookIcon from '../images/icons/facebook.inline.svg';

const Header = (props) => {

  const [isOpen, setNavOpen] = useState(false)

  return (
    <nav className={s.nav} style={isOpen ? { zIndex: "999999999999999" } : null}>
        <div className={cs("container", s.inner)}>
            <div className={s.logo} itemScope itemType="http://schema.org/Organization">
                <h4><Link url="/" title="Strona główna"><img src={Ikona} alt="Logo ELCO" itemProp="logo"/><span itemProp="brand">ELCO</span></Link></h4>
            </div>
            <div className={s.list}>
                <ul>
                    <li><Link url="/" title="Strona główna ELCO">Początek</Link></li>
                    <li><Link url="/na-temat-elco" title="Na temat ELCO i nasza historia">Na temat ELCO</Link></li>
                    <li><Link url="/oferta" title="Oferta lamp ceramicznych ELCO">Oferta</Link></li>
                    <li><Link url="/kontakt" title="Kontakt z ELCO">Kontakt</Link></li>
                </ul>
            </div>
            <div className={s.right}>
                <div className={s.socials}>
                    <a href="https://www.instagram.com/elco_lampy_ceramiczne/" title="Instagram Elco Lampy ceramiczne" target="_blank" rel="noreferrer" title="Profil ELCO na instagramie "><InstagramIcon/></a>
                    <a href="" title="Strona na Facebooku ELCO" target="_blank" rel="noreferrer" title="Strona ELCO na facebooku"><FacebookIcon/></a>
                </div>
            </div>
            <div className={s.mobileBtn}>
                <button onClick={() => setNavOpen(!isOpen)}>
                    {isOpen ? (<div className={s.menuIcon}>
                        <div className={s.menuIcon__text}>
                            <span id="menu-text">Zamknij</span>
                        </div>
                        <div className={cs(s.menuIcon__bars, s.menuIcon__close)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>) : (<div className={s.menuIcon}>
                        <div className={s.menuIcon__text}>
                            <span id="menu-text">Menu</span>
                        </div>
                        <div className={s.menuIcon__bars}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>)}
                </button>
            </div>
        </div>

        <div className={s.mobile} style={isOpen ? { visibility: "visible", opacity: 1 } : null}>
            <div className={cs(s.mobile__inner, "container")}>
                <ul className={s.mobile__list}>
                    <li onClick={() => setNavOpen(!isOpen)}><Link url="/" title="Strona główna ELCO"><span>&#8544;.</span>Początek</Link></li>
                    <li onClick={() => setNavOpen(!isOpen)}><Link url="/na-temat-elco" title="Na temat ELCO i nasza historia"><span>&#8545;.</span>Na temat ELCO</Link></li>
                    <li onClick={() => setNavOpen(!isOpen)}><Link url="/oferta" title="Oferta lamp ceramicznych ELCO"><span>&#8546;.</span>Oferta</Link></li>
                    <li onClick={() => setNavOpen(!isOpen)}><Link url="/kontakt" title="Kontakt z ELCO"><span>&#8547;.</span>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
