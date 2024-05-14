"use client";

import { getMoreProducts } from "@/app/(tabs)/products/actions";
import ListProduct from "@/components/list-product";
import { useState } from "react";

interface ProductListProps {
  initialProducts: {
    title: string;
    price: number;
    created_at: Date;
    photo: string;
    id: number;
  }[];
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setproducts] = useState(initialProducts);

  const [isLoading, setIsLoading] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(1);
    setproducts((prev) => [...prev, ...newProducts]);
    setIsLoading(false);
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      <button onClick={onLoadMoreClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
