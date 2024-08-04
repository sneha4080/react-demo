export default  function price({oldPrice,newPrice}){
    let oldStyle = {
        textDecorationLine : "line-through"
    };
    let newStyle = {
        fontWeight : "bold"
    };
    let Styles = {
        backgroundColor : "#e0c387",
        height :"50px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",
    }
    return(
        <div style={Styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}