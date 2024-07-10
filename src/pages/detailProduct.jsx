import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useState } from "react";

export const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct((data) => {
      setProduct(data);
    }, id);
  }, [id]);
  console.info(product);

  return (
    <>
      <h1 className="text-3xl font-bold m-3">Detail Product {id}</h1>
    </>
  );
};
