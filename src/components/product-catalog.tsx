"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CategoryFilter } from "@/components/category-filter";

export function ProductCatalog() {
  const [category, setCategory] = useState("Todos");

  const filtered =
    category === "Todos"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section>
      <CategoryFilter selected={category} onSelect={setCategory} />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg">Nenhum produto nessa categoria ainda.</p>
          <p className="text-sm mt-1">Novidades chegando em breve!</p>
        </div>
      )}
    </section>
  );
}
