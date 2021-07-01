/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "../components"
import s from './scss/tile.module.scss';

const Tile = ({ title, width, height, slug, image }) => {

  return (
    <div className={s.item}>
      <div sx={{ position: "relative" }} className={s.image}>
        <Link url={`/lampa/${slug}`}>
            {image
              && (
                <Img
                  fluid={image}
                  alt={title}
                />
              )
            }

          {/* <Img fluid={image.childImageSharp.fluid ? image.childImageSharp.fluid : null} alt={title}/> */}
        </Link>
      </div>
      <div className={s.info}>
          <div className={s.name}>
              <h2><Link url={`/lampa/${slug}`}>{title}</Link></h2>
          </div>
          <div className={s.dimensions}>
              <p>H: {height} cm</p>
              <p>W: {width} cm</p>
          </div>
          <div className={s.action}>
              <Link url={`/lampa/${slug}`} className="action">
                  Zobacz teraz
              </Link>
          </div>
      </div>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
}

Tile.defaultProps = {
  title: "Men's Down Jacket"
}

export { Tile }
