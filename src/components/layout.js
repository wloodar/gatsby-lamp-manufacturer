/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby"
import { Header, Link } from "../components"
import PageTransition from 'gatsby-plugin-page-transitions';
import cs from 'classnames';
import s from './scss/layout.module.scss';
import "normalize.css"
import './layout.css';

import InstagramIcon from '../images/icons/instagram.inline.svg';
import FacebookIcon from '../images/icons/facebook.inline.svg';

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header siteTitle={title} />
        <PageTransition
            defaultStyle={{
              transition: 'all 700ms ease',
              transform: 'translateY(17px)',
              opacity: '0'
            }}
            transitionStyles={{
              entering: { transform: 'translateY(0)', opacity: '1' },
              entered: { transform: 'translateY(0)', opacity: '1' },
              exiting: { transform: 'translateY(0)', opacity: '1' },
            }}
            transitionTime={500}
        >
          <main>{children}</main>
        </PageTransition>

        <footer className={s.footer}>
            <div className={"s-container"} itemScope itemType="http://schema.org/Organization">
                <ul className={s.footer__menu}>
                    <li><Link url="/" title="Strona główna ELCO">Początek</Link></li>
                    <li><Link url="/na-temat-elco" title="Na temat ELCO i nasza historia">Na temat ELCO</Link></li>
                    <li><Link url="/oferta" title="Oferta lamp ceramicznych ELCO">Oferta</Link></li>
                    <li><Link url="/kontakt" title="Kontakt z ELCO">Kontakt</Link></li>
                </ul>
                <div className={s.footer__contact}>
                    <h3>Kontakt</h3>
                    <ul>
                        <li><p>Telefon: <span itemProp="telephone">+48 572 906 548</span></p></li>
                        <li><p>Email: <span itemProp="email">elco.kontakt@gmail.com</span></p></li>
                        <li><p>Instagram: <a href="https://www.instagram.com/elco_lampy_ceramiczne/" title="Instagram Elco Lampy ceramiczne" target="_blank" rel="noreferrer">@elco_lampy_ceramiczne</a></p></li>
                    </ul>
                </div>
                <div className={cs(s.footer__bottom, "s-container")}>
                    <div className={s.footer__socials}>
                      <a href="https://www.instagram.com/elco_lampy_ceramiczne/" title="Instagram Elco Lampy ceramiczne" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                      <a href="https://www.facebook.com/elco.lampy" title="Strona na Facebooku ELCO" target="_blank" rel="noreferrer"><FacebookIcon/></a>
                    </div>
                    <small>&copy; 2021 ELCO <span itemProp="url">lampyceramiczne.pl</span></small>
                </div>
            </div>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
