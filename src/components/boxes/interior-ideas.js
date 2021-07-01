/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import cs from 'classnames';
import { Link } from "../../components/";
import s from './interior-ideas.module.scss';

const items = require('./interior-ideas.json');

const InteriorIdeas = () => {

    const data = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "wnetrza"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid(quality: 100) {
                                originalName
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
            allProductsJson(filter: {name: {in: ["Lampa Ceramiczna Stołowa ELCO Szyszka", "Lampa Ceramiczna Podłogowa ELCO Mały Andrzej 4001", "Lampa Ceramiczna Stołowa ELCO Policjant 3003", "Lampa Ceramiczna Stołowa ELCO 4000"] }}) {
                edges {
                  node {
                    id
                    seo_url
                    product_code
                    name
                    width
                    height
                    src {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
        }
    `)

    const {
        allFile: { edges: images },
        allProductsJson: { edges: fetchedProducts }
    } = data

    const findFluidImage = (name) => {
        let filteredImage = images.filter(pic => {
            return pic.node.childImageSharp.fluid.originalName.indexOf(name) !== -1;
        });

        if (filteredImage.length > 0 ) return filteredImage[0].node.childImageSharp.fluid;
    }

    const findProductsInImage = (productsNames) => {
        let productsArr = [];

        productsNames.map(el => {
            let filteredProduct = fetchedProducts.filter(pr => {
                return pr.node.name.indexOf(el.title) !== -1;
            });

            
            if (filteredProduct.length > 0 ) productsArr.push(filteredProduct[0].node);
        })

        return productsArr;
    }

    const LineItem = ({ item, index }) => (
        <div className={cs(s.item, (index % 2 === 0 ? s.item__left : s.item__right))}>
            <div className={s.image}>
                <div className={s.image__sticky}>
                    <Img fluid={findFluidImage(item.image_name)} alt="Urządzone wnętrze lampami ceramicznymi ELCO" />
                    <div className={s.image__caption}>
                        <span>{item.image_caption}</span>
                    </div>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.info__title}>
                    <h3>{ item.multiple ? "Lampy ceramiczne" : "Lampa ceramiczna" } na zdjęciu</h3>
                </div>
                <div className={s.lamps}>
                    {findProductsInImage(item.products).map(el => (
                        <div className={s.lamps__item} key={el.name}>
                            <Link url={`/lampa/${el.seo_url}`}>
                                <Img fluid={el.src.childImageSharp.fluid} alt={el.name}/>
                            </Link>
                            <div className={s.lamps__title}>
                                <h4><Link url={`/lampa/${el.seo_url}`}>{el.name}</Link></h4>
                            </div>
                            <div className={s.lamps__action}>
                                <Link url={`/lampa/${el.seo_url}`} className="action">
                                    Zobacz teraz
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    return (
        <div className={s.list}>
            {items.map((el, index) => (
                <React.Fragment key={el.image_name}>
                    <LineItem key={el.image_name} item={el} index={index}/>
                </React.Fragment>
            ))}
        </div>
    )
}

export { InteriorIdeas }