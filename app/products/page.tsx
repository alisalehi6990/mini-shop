import React from "react";
import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/productList";

async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products.data} />
    </div>
  );
}

export default ProductsPage;
