/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
export const Link = ({ isButton, url, title, state, children, ...props }) => {
  return isButton ? (
    <GatsbyLink
      {...props}
      activeClassName="active"
      to={url}
      title={title}
      state={state}
      sx={{
        py: 2,
        px: 3,
        borderRadius: 4,
        textDecoration: "none",
        fontWeight: 600,
        background: "black",
        color: "white",
        textAlign: "center",
        "&:hover": {
          background: "gray",
        },
      }}
    >
      {children}
    </GatsbyLink>
  ) : (
    <GatsbyLink
      {...props}
      activeClassName="active"
      to={url}
      title={title}
      state={state}
      sx={{
        color: "inherit",
        "&:hover": {
          // color: "gray",
        },
      }}
    >
      {children}
    </GatsbyLink>
  )
}
