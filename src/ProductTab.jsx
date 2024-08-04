import Product from "./product.jsx"




function ProductTab() {
    let styles = {
      
        display :"flex",
        flexwrap:"wrap",
         border : "4px",
         justifyContent: "center",
         alignItems: "center"
    };
    return (
       <div style={styles}>
            {/* <Product title="phone" price="30,000" />  { /***as pass the string as number  */}
           
            <Product title="Apple pen" idx={0}/>
            <Product title="iPhone" idx={1}/>
            <Product title="Windows Machine" idx={2}/>
            <Product title={"I-ped"} idx={3}/>
        </div>
    );
}

export default ProductTab;
