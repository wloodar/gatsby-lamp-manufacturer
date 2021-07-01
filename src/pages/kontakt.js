/** @jsx jsx */
import { jsx } from "theme-ui"
import { Layout, SEO } from "../components"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import cs from 'classnames';
import s from './scss/contact.module.scss';
import { CustomizationContact } from '../components/boxes';

const ContactPage = () => {

    const data = useStaticQuery(graphql`
      query {
        bottomPic: file(relativePath: {eq: "hala/elco-hala-produkcyjna-wyschniete-lampy.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
    `)

    const { bottomPic } = data;

    return (
      <Layout hasHero>
        <SEO 
            title="Kontakt ELCO | Polski Producent Lamp Ceramicznych Z Abażurem" 
            description="Kontakt z ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
        />
        <div className="container">
            <div className={s.intro}>
                <h1>Kontakt</h1>
                <div className={s.desc}>    
                    <p className="bs-p">Zainteresowały Ciebie nasze lampy ceramiczne? Już teraz skontaktuj się z nami, aby dowiedzieć się więcej na temat naszych lamp ceramicznych lub w celu złożenia zamówienia.</p>
                </div>
            </div>
            <div className={s.details} itemscope itemType="http://schema.org/Organization">
                <div className={s.details__row}>
                    <h5>Telefon</h5>
                    <p itemprop="telephone">+48 572 906 548</p>
                </div>
                <div className={s.details__row}>
                    <h5>Email</h5>
                    <p itemprop="email">elco.kontakt@gmail.com</p>
                </div>
                <div className={s.details__row}>
                    <h5>Instagram</h5>
                    <a href="https://www.instagram.com/elco_lampy_ceramiczne/" title="Instagram Elco Lampy ceramiczne" target="_blank" rel="noreferrer">@elco_lampy_ceramiczne <span>instagram.com/elco_lampy_ceramiczne/</span></a>
                </div>
            </div>
        </div>
        <div className={cs(s.custom, "s-container")}>
            <CustomizationContact hide_contact={true}/>
        </div>
        <div className={cs(s.bottomPic, "s-container")}>
            <Img 
                fluid={bottomPic.childImageSharp.fluid}
                alt="Hala produkcyjna lamp ceramicznych ELCO"
            />
        </div>
      </Layout>
    )
  }
  
  export default ContactPage