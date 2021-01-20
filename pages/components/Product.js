const Product = (props) => {
    const variantImage = props.product.images.edges[0];
    const variant = props.product.variants.edges[0].node;

    return (
        <div className="Product">
            {props.product.images.edges.length 
                ? <img src={`${variantImage.node.originalSrc}`} 
                    alt={`${variantImage.node.altText}`} width="100px"/>
                : null}  
            <h5 className="Product__title">{props.product.title}</h5>
            <span className="Product__price">${variant.price}</span>
        </div>
    );
}
 
export default Product;