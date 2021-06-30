/** @jsx jsx */
import { jsx } from "theme-ui"
import { Layout, SEO, Tile, Link } from "../components"
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { AboutIntro, CustomizationContact } from '../components/boxes';
import s from './scss/offer.module.scss';

const Offer = ({ data }) => {

    const {
        allProductsJson: { edges: products },
    } = data
    
    const ProductView = ({ product }) => (
        <div className={s.prod}>
            <div className={s.prod__image}>
                <Link url={`/lampa/${product.seo_url}`} className={s.prod__imageZoom} title={product.name}>
                    { product.src && ( <Img fluid={product.src.childImageSharp.fluid} alt={product.name} /> ) }
                </Link>
            </div>
            <div className={s.prod__info}>
                <div className={s.prod__infoBox}>
                    <div className={s.prod__infoTitle}>
                        <h2><Link url={`/lampa/${product.seo_url}`} title={product.name}><span>Lampa ceramiczna - {product.product_code}</span> {product.short_name}</Link></h2>
                    </div>

                    <div className={s.prod__dimensions}>
                        <p>Wysokość: <span>{product.height} cm</span></p>
                        <p>Szerokość abażuru: <span>{product.width} cm</span></p>
                    </div>

                    <div className={s.prod__infoAction}>
                        <Link url={`/lampa/${product.seo_url}`} className="action" title={product.name}>
                            Zobacz teraz
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
      <Layout hasHero>
        <SEO 
            title="Oferta Lamp Ceramicznych ELCO | Ceramiczne Lampy Z Abażurem"
            description="Oferta lamp ceramicznych ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
        />
        
        <div className="s-container">
            <div className={s.intro}>
                <h1>Oferta lamp ceramicznych ELCO</h1>
                <div className={s.desc}>
                    <p className="bs-p">Przedstawiamy Tobie naszą ofertę stołowych lamp ceramicznych & ceramicznych lamp podłogowych. Kolekcja naszych lamp ceramicznych została przygotowana z myślą rozświetlenia twojego wnętrza i wzbogacenia go o nutkę klasycznego, a zarazem eleganckiego elementu wystroju.</p>
                </div>
            </div>
            <div className={s.products}>
                <div className={s.products__inner}>
                    {products.map(product => (
                        <ProductView product={product.node}/>
                    ))}
                </div>
            </div>
            <div className={s.custom}>
                <CustomizationContact/>
            </div>
            <div className={s.about}>
                <AboutIntro/>
            </div>
        </div>
      </Layout>
    )
  }
  
export default Offer

export const OfferQuery = graphql`
    query {
        allProductsJson {
            edges {
                node {
                    id
                    seo_url
                    product_code
                    name
                    short_name
                    width
                    height
                    description
                    src {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`