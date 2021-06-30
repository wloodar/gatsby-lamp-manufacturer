/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Layout, SEO, Link } from "../components"
import { InteriorIdeas, AboutIntro, InstagramInspirations } from '../components/boxes';
import { graphql } from "gatsby"
import cs from 'classnames';
import s from './landing.module.scss';

const IndexPage = ({ data : { bottomPic: btmPic } }) => {
  
  return (
    <Layout hasHero>
      <SEO 
          title="Lampy Ceramiczne Z Abażurem & Ceramiczne Lampy Stołowe | ELCO"
          description="Polski producent lamp ceramicznych - ELCO | Ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
      />
      <header className={s.hero}>
        <div className={s.hero__overlay}>
          <div className={cs("container", s.hero__box)}>
              <h1>Elco <span>lampy ceramiczne</span></h1>
              <h2>Ponad 20 lat doświadczenia. Lampy ceramiczne wykonane w Polsce. Indywidualne podejście do każdego zamówienia.</h2>
              <div className={s.hero__action}>
                  <Link url="/oferta">Zobacz ofertę</Link>
              </div>
              <ul>
                  <li><Link url="/na-temat-elco">Na temat ELCO</Link></li>
                  <li><Link url="/kontakt"><span></span>Kontakt</Link></li>
              </ul>
          </div>
        </div>
      </header>

      <section className={cs(s.inspirations, "s-container")}>
          <div className={s.inspirations__header}>
            <h2>Zainspiruj się <span>ceramicznymi lampami ELCO</span></h2>
            <p className="bs-p">Nasze lampy ceramiczne powstały z myślą zarówno wzbogacenia wnętrz pewnym elementem klasyki, jak i wprowadzenia lekkiej nutki elegancji. Nasze lampy ceramiczne znajdują miejsce w stylowych pałacach, hotelach, restauracjach, jak i w domowych progach. </p>
            {/* <p className="bs-p">Ponad 20 lat doświadczenia. Lampy ceramiczne wykonane w Polsce. Indywidualne podejście do każdego zamówienia. Ponad 20 lat doświadczenia. Lampy ceramiczne wykonane w Polsce. Indywidualne podejście do każdego zamówienia.</p> */}
          </div>
          <InteriorIdeas/>
      </section>

      <section className={cs(s.bottomBoxes, "s-container")}>
          <AboutIntro/>
          <div className={s.bottomBoxes__row}>
              <InstagramInspirations/>
          </div>
      </section>

      <section className={cs(s.aboutUs, 's-container')}>
          <h2>Pare słów o nas</h2>
          <p className="bs-p">ELCO jest <strong>polskim producentem lamp ceramicznych</strong> działającym w tej branży już od ponad 20 lat. 
Wyróżniającymi aspektami naszych <strong>ceramicznych lamp</strong> są kolejno klasyczne wykonanie, wraz z eleganckim designem oraz wysoka jakość wykonania. Od samego początku naszym priorytetem było spełnienie oczekiwań osób, które zdecydowały się nam zaufać i pozwolić dostarczyć dla nich nasze <strong>lampy ceramiczne z abażurem</strong>. Za sprawą trzymania się tej fundamentalnej zasady, udało nam się osiągnąć upragniony efekt, który dzisiaj chcemy dla Ciebie przedstawić w postaci naszej oferty.</p>
          <p className="bs-p">Jesteśmy <strong>polskim producentem lamp ceramicznych</strong>. Proces powstawania naszych lamp ceramicznych od momentu złożenia zamówienia, przez przygotowanie i stworzenie danej lampy ceramicznej, odbywa się w całości na terenie Polski według tradycji fajansu włocławskiego. Nasza hala produkcyjna wyposażona jest w niezbędne maszyny i narzędzia, które pozwalają na wyprodukowanie naszych <strong>lamp ceramicznych z abażurem</strong>. Pomimo całego zaplecza, decydującym czynnikiem w ELCO, jest całe, <strong>ponad 20 letnie doświadczenie</strong> osób pracujących i kontrolujących cały proces powstawania naszych <strong>lamp ceramicznych</strong>.</p>
          <p className="bs-p">Nasze <strong>lampy ceramiczne z abażurem</strong> idealnie spełnią rolę jako przyjemna ozdoba twojego wnętrza, rozświetlając i tworząc wyjątkową atmosferę. W naszej starannie przygotowanej ofercie znajdziesz <strong>lampy stołowe ceramiczne</strong>, jak i <strong>ceramiczne lampy podłogowe</strong>. Jako cel, obraliśmy odnalezienie balansu w kwestii klasycznego designu naszych lamp ceramicznych, a dzisiejszych trendów widocznych we wnętrzach domów i lokali. W kolekcji naszych lamp ceramicznych odnajdziesz zarówno klasyczny motyw białego szkliwa, który pięknie zaprezentuje się w stylu Hampton, jak i eleganckie motywy kobaltu czy czerni.</p>
          <p className="bs-p">ELCO wychodząc na wprost oczekiwaniom swoich klientów i posiadanych przez nich niesamowitych pomysłów, umożliwia realizacje <strong>lampy ceramicznej </strong> według własnej koncepcji po wcześniejszym skonsultowaniu się z osobą z naszego zespołu. <strong>Lampy ceramiczne z abażurem wykonane na zamówienie indywidualne</strong>, to cecha wyróżniającą ELCO pośród innych dostępnych rozwiązań. Droga do wprowadzenia danej opcji do naszej oferty, była poprzedzona ciężką pracą i staraniem w celu osiągnięcia zadowalających efektów. Dzięki nabytemu doświadczeniu przez ten cały okres czasu, jesteśmy w stanie zapewnić klientowi, <strong>lampę ceramiczną</strong>, która w pełni go usatysfakcjonuje.</p>
      </section>

      <section className={cs(s.bottomImage, 's-container')}>
          <Img 
              fluid={btmPic ? btmPic.childImageSharp.fluid : null}
              alt="Hala produkcyjna ELCO lampy ceramiczne"
          />
      </section>
      <div className="s-container">
          <div className={s.bottomOffer}>
              <div className={s.bottomOffer__overlay}>
                  <div className={s.bottomOffer__box}>
                      <Link url="/oferta" title="Lampy ceramiczne ELCO oferta" className="action-border">
                          Odkryj nasze lampy ceramiczne
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query {
    bottomPic: file(relativeDirectory: {eq: "hala"}, name: {in: "elco-hala-produkcyjna-lamp-ceramicznych-prezentacja"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 40) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`