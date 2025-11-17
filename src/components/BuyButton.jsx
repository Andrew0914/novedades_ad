import sheinIcon from "../assets/shein.png";
import mercadoIcon from "../assets/mercado.jpg";


const STORES = {
    shein: { logo: sheinIcon, label: "Comprar" },
    mercado: {logo: mercadoIcon, label: "Comprar"}
}

export default function BuyButton({ logo, label, url, type }) {
    return (
        <a href={url} target="_blank" className={["buy-button", `buy-button__${type}`].join(" ")}>
            <img src={STORES[type].logo} alt={STORES[type].label} className="buy-button_logo"/>
            <span>{STORES[type].label}</span>
        </a>
    );
}
