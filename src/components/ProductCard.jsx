import BuyButton from "./BuyButton";


export default function ProductCard({ p }) {
  return (
    <div className="card">
        <img src={p.img} alt={p.name} className="card-img" />
        <h3 className="card-title">{p.name}</h3>
        <p className="price">${p.price} MXN</p>
        <ul className="card-features">
            {p.features.map((f, index) => (
                <li key={`${p.id}-${index}`}> { f}</li>
            ))}
        </ul>
      

        <div className="card-buttons">
            <BuyButton url={p.shein} type="shein" />
            <BuyButton url={p.mercado} type="mercado" />
        </div>
    </div>
  );
}
