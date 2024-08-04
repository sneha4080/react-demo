
import "./Product.css";
import Price from "./Price.jsx";


function Product({ title, idx }) {
    let oldPrice = ["12,900", "11,400", "1,999", "1500"]
    let newPrice = ["15,400", "15,900", "2,999", "1600"]
    let description = [
        ["design for ipad","5 programable"],
        ["style for window","design for i-phone pro"],
        ["making new items","intutive serface"],
        ["Wireless","new inovation"]
    ]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}


export default Product;
