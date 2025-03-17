import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  return (
    <>
      <h2>ProductDetails page with product Id - {productId}</h2>
    </>
  );
}
