import { ProductCatalog } from "@/components/product-catalog";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BZ Sports" className="h-10 w-auto rounded" />
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-semibold text-primary">
                Novas pecas toda semana
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Vista o{" "}
              <span className="text-primary">esporte</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm sm:text-base">
              Roupas esportivas de qualidade com precos que cabem no bolso.
              Entrega pra todo o Brasil.
            </p>
          </div>
        </section>

        <Separator className="max-w-7xl mx-auto opacity-50" />

        <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-6">
            <h2 className="text-xl font-bold">Catalogo</h2>
            <span className="text-xs text-muted-foreground">
              Toque em &quot;Comprar&quot; pra falar direto no WhatsApp
            </span>
          </div>
          <ProductCatalog />
        </section>
      </main>

      <footer className="border-t border-border/50 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src="/logo.jpg" alt="BZ Sports" className="h-8 w-auto rounded" />
            <span className="font-bold">BZ Sports</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Bazar de Roupas Esportivas &mdash; Precos imbativeis
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; 2026 BZ Sports. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
