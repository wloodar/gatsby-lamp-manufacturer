/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image';
import s from './ig-inspirations.module.scss';

const InstagramInspirations = () => {

    // const data = useStaticQuery(graphql`
    //   query InstagramQuery {
    //       allInstagramContent(limit: 4, sort: {order: DESC, fields: timestamp}) {
    //         edges {
    //           node {
    //             media_url
    //             permalink
    //             caption
    //             localImage {
                  
    //             childImageSharp {
    //               fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
    //                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)

    // const {
    //   allInstagramContent: { edges: instaPics },
    // } = data

    return (
      <div></div>
      // <div className={s.box}>
      //     <div className={s.box__header}>
      //         <h3>#lampyelco</h3>
      //         <p className="bs-p">Zainspiruj się lampami ceramicznymi ELCO, odwiedzając profil na instagramie. Posiadasz naszą lampę? Podziel się swoim pomysłem na użycie jednej z naszych lamp ceramicznych dodając hashtag #lampyelco w opisie albo oznaczając nasz profil na instagramie.</p>
      //     </div>
      //     <div className={s.box__images}>
      //         {instaPics.map((item, i) => {
      //           return (
      //             <div className={s.box__pic} key={i}>
      //               <Img
      //                 fluid={item.node.localImage.childImageSharp.fluid}
      //                 key={i}
      //                 alt={
      //                   item.node.caption || 'Post na instagramie'
      //                 }
      //               />
      //               <a href={item.node.permalink} rel="noreferrer" target="_blank" title="Post na instagramie ELCO" className={s.box__picOverlay}>
      //                   <div sx={{ position: 'relative', width: '100%', height: '100%' }}>
      //                       <div className={s.box__picInfo}>
      //                           <p className="bs-p">{item.node.caption.split('.')[0]  || ''}</p>
      //                           <span className="action-border">Więcej</span>
      //                       </div>
      //                   </div>
      //               </a>
      //             </div>  
      //           )
      //         })}
      //     </div>
      // </div>
    )
}
  
export { InstagramInspirations }
