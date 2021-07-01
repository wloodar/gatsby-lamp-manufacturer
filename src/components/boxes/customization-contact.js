/** @jsx jsx */
import { jsx } from "theme-ui"
import cs from 'classnames';
import s from './customization.module.scss';

const CustomizationContact = ({ hide_contact = false }) => {

    const withoutContactDetails = (
        <div className={s.custom}>
            <div className={cs(s.custom__full, s.custom__center)}>
                <h2>Spodobała ci się nasza lampa ceramiczna, ale uważasz, że można byłoby coś w niej zmienić?</h2>
                <p className="bs-p">Nic prostszego. Firma ELCO wychodząc na wprost oczekiwaniom i pomysłom swoich klientów, oferuje wykonanie lampy ceramicznej na indywidualne zamówienie. Chcesz lampę do salonu w swojej wymarzonej kolorystyce, albo lampę ceramiczną z abażurem pod kolor twojej sypialni? Stworzyć swoją własną ceramiczną lampę, np. połączenie szyszki z kolumną? Skontaktuj się z nami! Wspólnie zrealizujemy Twój pomysł i zaprojektujemy Twoją wymarzoną lampę ceramiczną.</p>
            </div>
        </div>
    )

    return hide_contact ? (
        withoutContactDetails
    ) : (
        <div className={s.custom}>
            <div className={s.customInfo}>
                <h2>Spodobała ci się nasza lampa ceramiczna, ale uważasz, że można byłoby coś w niej zmienić?</h2>
                <p className="bs-p">Nic prostszego. Firma ELCO wychodząc na wprost oczekiwaniom i pomysłom swoich klientów, oferuje wykonanie lampy ceramicznej na indywidualne zamówienie. Chcesz lampę do salonu w swojej wymarzonej kolorystyce, albo lampę ceramiczną z abażurem pod kolor twojej sypialni? Stworzyć swoją własną ceramiczną lampę, np. połączenie szyszki z kolumną? Skontaktuj się z nami! Wspólnie zrealizujemy Twój pomysł i zaprojektujemy Twoją wymarzoną lampę ceramiczną.</p>
            </div>
            <div className={s.custom___item}>
                <div className={s.contact}>
                    <div className={s.contact__row}>
                        <h5>Telefon</h5>
                        <p itemProp="telephone">+48 572 906 548</p>
                    </div>
                    <div className={s.contact__row}>
                        <h5>Email</h5>
                        <p itemProp="email">elco.kontakt@gmail.com</p>
                    </div>
                    <div className={s.contact__row}>
                        <h5>Instagram</h5>
                        <a href="https://www.instagram.com/elco_lampy_ceramiczne/" title="Instagram Elco Lampy ceramiczne" target="_blank" rel="noreferrer">@elco_lampy_ceramiczne <span className={s.contact__small}>instagram.com/elco_lampy_ceramiczne/</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export { CustomizationContact }