"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CategoryFilter } from "@/components/category-filter";
import { getSoldOutIds, toggleSoldOut } from "@/lib/sold-out";

const ADMIN_CODE = "bzsports";

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("Todos");
  const [soldOutIds, setSoldOutIds] = useState<string[]>([]);
  const [adminMode, setAdminMode] = useState(false);
  const [typedKeys, setTypedKeys] = useState("");

  useEffect(() => {
    setSoldOutIds(getSoldOutIds());
  }, []);

  useEffect(() => {
    if (searchParams.get("admin") === ADMIN_CODE) {
      setAdminMode(true);
    }
  }, [searchParams]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      setTypedKeys((prev) => {
        const next = (prev + e.key).slice(-ADMIN_CODE.length);
        if (next === ADMIN_CODE) {
          setAdminMode((on) => !on);
        }
        return next;
      });
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleToggleSold = useCallback((id: string) => {
    const next = toggleSoldOut(id);
    setSoldOutIds(next);
  }, []);

  const filtered =
    category === "Todos"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section>
      <CategoryFilter selected={category} onSelect={setCategory} />

      {adminMode && (
        <div className="mt-4 rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-xs text-amber-400 flex items-center gap-2">
          <span className="font-bold">MODO ADMIN</span>
          <span>Toque no produto pra marcar/desmarcar como vendido</span>
          <button
            className="ml-auto text-amber-400 hover:text-white underline"
            onClick={() => setAdminMode(false)}
          >
            Sair
          </button>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            soldOut={soldOutIds.includes(product.id)}
            adminMode={adminMode}
            onToggleSold={handleToggleSold}
          />
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
