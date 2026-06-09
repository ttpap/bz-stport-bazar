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
