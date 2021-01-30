const ListProducts = (props) => {
    const variantImage = props.product.images.edges[0];
    const firstVariant = props.product.variants.edges[0].node;

    return (
        <div className="Product">
            {props.product.images.edges.length 
                ? <img src={`${variantImage.node.originalSrc}`} 
                    alt={`${variantImage.node.altText}`} width="100px"/>
                : null}  
            <h5 className="Product__title">{props.product.title}</h5>
            <span className="Product__price">${firstVariant.price}</span>
            <span className="Product__vendor">{props.product.vendor}</span>
        </div>
    );
}
 
export default ListProducts;