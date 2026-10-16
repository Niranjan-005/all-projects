function ProductCard({ product }) {
  return (
    <div style={{border:"1px solid grey",borderRadius:"15px",margin:"20px",padding:"20px",width:"40%"}}>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;