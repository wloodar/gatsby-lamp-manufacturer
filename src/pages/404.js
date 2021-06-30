/** @jsx jsx */
import { jsx } from "theme-ui"
import { Layout, SEO, Link } from "../components/"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Nie znaleziono strony | ELCO" />
    {/* <h1 sx={{ mt: 5, mb: 0 }}> Down Not Found</h1>
    <p sx={{ mt: 0, mb: 5 }}>We couldn't find the down you were looking for.</p> */}
    <div className="container" style={{ textAlign: "center", paddingTop: "7.4rem" }}>
        <h1 style={{ lineHeight: "0" }}>404</h1>
        <p className="bs-p" style={{ paddingTop: "0" }}>Strona o podanym adresie nie istnieje</p>
        <Link url="/" title="Strona startowa" className="action" style={{ display: "inline-block", marginTop: "3.4rem", color: "#fff" }}>Przejdź do strony ELCO</Link>
    </div>
  </Layout>
)

export default NotFoundPage
