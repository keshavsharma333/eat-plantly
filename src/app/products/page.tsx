import { Metadata } from "next";
import Products from "./Products";

export const metadata: Metadata = {
  title: "Product Archieve - Eat Plant",
};

const ProductPage = () => {
  return (
    <main className="overflow-hidden">
      <Products />
    </main>
  );
};

export default ProductPage;
