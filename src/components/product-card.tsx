"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function getWhatsAppLink(product: Product) {
  const priceText =
    product.price > 0 ? ` - ${formatPrice(product.price)}` : "";
  const message = encodeURIComponent(
    `Oi! Tenho interesse no produto: *${product.name}*${priceText}. Ainda tem disponivel?`
  );
  return `https://wa.me/5522981746261?text=${message}`;
}

const BADGE_STYLES: Record<string, string> = {
  Destaque: "bg-primary text-primary-foreground hover:bg-primary",
  Premium: "bg-amber-500/90 text-black hover:bg-amber-500",
  Ultimo: "bg-red-500/90 text-white hover:bg-red-500",
  Feminino: "bg-pink-500/90 text-white hover:bg-pink-500",
};

export function ProductCard({ product }: { product: Product }) {
  const [showSpecs, setShowSpecs] = useState(false);
  const hasSpecs = product.specs && Object.keys(product.specs).length > 0;

  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {product.badge && (
          <Badge
            className={`absolute top-3 left-3 z-10 font-bold text-xs ${
              BADGE_STYLES[product.badge] ??
              "bg-primary text-primary-foreground hover:bg-primary"
            }`}
          >
            {product.badge}
          </Badge>
        )}

        {product.stock === 1 && (
          <Badge className="absolute top-3 right-3 z-10 bg-red-500/90 text-white hover:bg-red-500 font-bold text-xs">
            Ultimo!
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {product.sizes && (
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {hasSpecs && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground"
              onClick={() => setShowSpecs(!showSpecs)}
            >
              {showSpecs ? "Ocultar" : "Ver"} especificacoes
              <svg
                className={`w-3 h-3 ml-1 transition-transform ${showSpecs ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            {showSpecs && (
              <div className="space-y-1.5 text-[11px] border-t border-border/50 pt-2">
                {Object.entries(product.specs!).map(([key, val]) => (
                  <div key={key}>
                    <span className="font-semibold text-foreground">{key}:</span>{" "}
                    <span className="text-muted-foreground">{val}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <div className="flex items-end justify-between">
          <div>
            {product.price > 0 ? (
              <span className="text-lg font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            ) : (
              <span className="text-sm font-bold text-amber-400">
                Consulte o preco
              </span>
            )}
          </div>

          <a
            href={getWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs gap-1.5"
            )}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {product.price > 0 ? "Comprar" : "Consultar"}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
