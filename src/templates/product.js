/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Layout, SEO, Link } from "../components"
import { graphql } from "gatsby"
import { CustomizationContact, AboutIntro, InstagramInspirations } from '../components/boxes';
import cs from 'classnames';
import s from './product.module.scss'
import { get } from "jquery"

const ProductPage = ({ data }) => {

  const product = data.allProductsJson.edges[0].node;
  const [pageHeight, setPageHeight] = useState();
  const [descriptionHeight, setDescriptionHeight] = useState();

  useEffect(() => {
      const productDescription = document.getElementById('product-description-box')
      setPageHeight(window.innerHeight);
      setDescriptionHeight(productDescription.clientHeight);

      window.addEventListener('resize', (e) => {
        setTimeout(() => {
          setPageHeight(window.innerHeight);
          setDescriptionHeight(productDescription.clientHeight);
        }, 300);
      });
  }, [])

  const estimatedDelivery = () => {
      const currentDate = new Date();
      const monthNames = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
      
      const estimatedDate = new Date(currentDate.setTime(currentDate.getTime() + 30 * 86400000 ));
      const estimatedDay = estimatedDate.getUTCDate(); 
      const estimatedMonth = monthNames[estimatedDate.getUTCMonth()];

      if (estimatedDay > 0 && estimatedDay < 10) {
          return estimatedMonth + ", początek miesiąca";
      } else if (estimatedDay >= 10 && estimatedDay < 20) {
          return estimatedMonth + ", środek miesiąca"
      } else {
          return estimatedMonth + ", koniec miesiąca"
      }
  }

  return (
    <Layout>
      <SEO 
          title={`${product.name} | ELCO`} 
          description={`Lampa ceramiczna ELCO - ${product.name} | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | lampyceramiczne.pl`}
      />
      <div className={s.product}>
        <div className={s.presentation}>
          <div className={cs(s.presentation__inner, "container")}>
            <Img fluid={product.src.childImageSharp.fluid} alt={product.name}/>
          </div>
          {/* {gallery} */}
        </div>
        <div sx={{ display: "flex", flexDirection: "column" }} className={cs(s.info, "container")}>
          <div className={s.info__box} id="product-description-box" style={ descriptionHeight > (pageHeight - 50) ? { top: -(descriptionHeight - (pageHeight - 50)) } : { top: "10.4rem" } }> 
            {/* <Link url="/oferta" className={s.backoffer} title="Oferta lamp ceramicznych ELCO"><span>{`<-`}</span> Cała oferta</Link> */}
            <h1>{product.name}</h1>
            <div className={s.dimensions}>
                <p>Wysokość: <span>{product.height} cm</span></p>
                <p>Szerokość abażuru: <span>{product.width} cm</span></p>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: product.description }} className={s.description}/> */}
            <div className={s.description}>
                {/* <p className="bs-p"></p> */}
                <p className="bs-p">Wysokość lampy ceramicznej {product.short_name} wynosi {product.height} cm, natomiast szerokość tej lampy ceramicznej z abażurem włącznie wynosi {product.width} cm.</p>
                <p className="bs-p">Zainteresowała Ciebie prezentowana lampa ceramiczna? Skontaktuj się z nami już teraz w celu poznania szczegółów i złożenia zamówienia.</p>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: product.description }} className={s.description}/> */}
            <div>
            </div>
            <div className={s.delivery}>
                <p>Szacowany termin realizacji: {estimatedDelivery()}</p>
                <Link url="/na-temat-elco" state={{ navigateToAboutSection: "Czas realizacji", aboutBackToProduct: { path: product.seo_url, name: product.name, section: "Czas realizacji"} }}>Dlaczego taki czas realizacji</Link>
            </div>
            <Link url="/kontakt" className={s.addcart} title="Kontakt">
                Skontaktuj się
            </Link>
          </div>
        </div>
      </div>
      <div className={cs(s.rest, "s-container")}>
        <CustomizationContact/>
        <div className={s.instagram}>
            <InstagramInspirations/>
        </div>
        <AboutIntro/>
      </div> 
    </Layout>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query($slug: String!) {
      allProductsJson(filter: {seo_url: {eq: $slug }}) {
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