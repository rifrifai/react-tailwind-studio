import { useParams } from "react-router-dom";

export const DetailProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-3xl font-bold m-3">Detail Product {id}</h1>
    </>
  );
};
