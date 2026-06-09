export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes?: string[];
  image: string;
  badge?: string;
  stock?: number;
  specs?: Record<string, string>;
};

export const categories = [
  "Todos",
  "Bikes",
  "Bermudas",
  "Surf",
  "Acessorios",
] as const;

export const products: Product[] = [
  // === BIKES ===
  {
    id: "bike-fun-evo",
    name: "Sense Fun Evo 2025",
    description:
      "MTB 29 aluminio 6061, Shimano Alivio 9v, freio hidraulico, suspensao RST Blaze 100mm com trava.",
    price: 0,
    category: "Bikes",
    sizes: ["15", "17", "19"],
    image: "/products/bike-fun-evo.jpeg",
    badge: "Destaque",
    specs: {
      Quadro: "Aluminio Sense 6061 T4/T6 - Dupla Espessura | Nova Geometria Esportiva",
      Suspensao: "RST Blaze 29 100mm com trava",
      Cambio: "Shimano Alivio 9v RD-M3100 Shadow",
      Pedivela: "Shimano FC-MT-210-2 Duplo 36x22D",
      Cassete: "Shimano HG201 9v 11x36D",
      Freios: "Shimano Hidraulico BL-MT200",
      Rodas: "Sense Disc 29\" Raios Sapim | Cubo Shimano TX-505",
      Pneus: "Michelin Force 29x2.25",
    },
  },
  {
    id: "bike-impact-sl",
    name: "Sense Impact SL 2025",
    description:
      "MTB 29 aluminio hidroformado 6069, Shimano SLX 12v, Rock Shox Recon Silver RL 100mm, selim Fizik Taiga.",
    price: 0,
    category: "Bikes",
    sizes: ["15", "17", "19"],
    image: "/products/bike-impact-sl.jpg",
    badge: "Premium",
    specs: {
      Quadro: "Sense Aluminio Hidroformado 6069 T4/T6 - Tripla Espessura | Cabeamento Interno | Geometria Racing",
      Suspensao: "Rock Shox Recon Silver RL 100mm com trava no guidao",
      Cambio: "Shimano SLX RD-M7100",
      Pedivela: "Shimano Deore MT611 32D",
      Cassete: "Shimano Deore CS-M6100 10x51",
      Freios: "Shimano BL-MT4100/BR-M4100",
      Rodas: "Cubo Shimano MT400 Boost / Aro Sentec Aluminio TLR / Raios Sapim Leader 2.0",
      Pneus: "Michelin Force XC Performance Line 29x2.25 TLR",
      Selim: "Fizik Taiga",
      "Mov. Central": "FSA PF30 73mm Redutor 24mm",
    },
  },

  // === BERMUDAS SURF MASCULINAS ===
  {
    id: "bermuda-hic-colorida",
    name: "Bermuda Surf HIC Psychedelic",
    description: "Bermuda boardshort HIC com estampa colorida. Tecido leve e secagem rapida.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-hic-colorida.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-billabong-folhas",
    name: "Bermuda Surf Billabong Tropical",
    description: "Boardshort Billabong Recycler com estampa de folhas. Material reciclado.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-billabong-folhas.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-south-azul",
    name: "Bermuda Surf South to South Ocean",
    description: "Boardshort South to South com estampa marinha em tons de azul.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-south-azul.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-billabong-verde",
    name: "Bermuda Surf Billabong Floral",
    description: "Boardshort Billabong com estampa floral em tons de verde.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-billabong-verde.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-rvca-estampada",
    name: "Bermuda Surf RVCA Balance",
    description: "Boardshort RVCA Balance of Opposites com estampa grafica.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-rvca-estampada.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-billabong-tropical",
    name: "Bermuda Surf Billabong Sundays",
    description: "Boardshort Billabong Recycler com folhagem tropical.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-billabong-tropical.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-hic-floral",
    name: "Bermuda Surf HIC Aloha",
    description: "Boardshort HIC com estampa floral em cores vibrantes.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-hic-floral.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-south-tropical",
    name: "Bermuda Surf South to South Tropical",
    description: "Boardshort South to South Old School com estrelicia e palmeiras.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-south-tropical.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-south-floral",
    name: "Bermuda Surf South to South Strelitzia",
    description: "Boardshort South to South com estampa floral vibrante.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-south-floral.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-rvca-logos",
    name: "Bermuda Surf RVCA Logos",
    description: "Boardshort RVCA com all-over print de logos.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-rvca-logos.jpeg",
    stock: 23,
  },
  {
    id: "bermuda-listrada",
    name: "Bermuda Surf Listrada Waves",
    description: "Bermuda elastico com estampa de ondas listradas. Uso casual e praia.",
    price: 110,
    category: "Bermudas",
    image: "/products/bermuda-listrada.jpeg",
    stock: 23,
  },

  // === SHORT FEMININO ===
  {
    id: "short-feminino",
    name: "Short Surf Feminino South to South",
    description: "Short feminino South to South com estampa de quilhas. Leve e confortavel.",
    price: 69,
    category: "Bermudas",
    image: "/products/short-feminino.jpeg",
    badge: "Feminino",
    stock: 1,
  },

  // === ACESSORIOS ===
  {
    id: "bolsinha-bike",
    name: "Bolsa de Selim Topeak",
    description: "Bolsa de selim Topeak com faixa refletiva. Ideal pra ferramentas e camara reserva.",
    price: 59,
    category: "Acessorios",
    image: "/products/bolsinha-bike.jpeg",
    stock: 2,
  },
  {
    id: "capacete-infantil",
    name: "Capacete Ciclista Infantil High One",
    description: "Capacete infantil High One com ventilacao e ajuste traseiro.",
    price: 89,
    category: "Acessorios",
    image: "/products/capacete-infantil.jpeg",
    stock: 1,
    badge: "Ultimo",
  },
  {
    id: "chinelo-rvca",
    name: "Chinelo RVCA Tropical 37/38",
    description: "Chinelo RVCA com estampa de araras tropicais.",
    price: 39,
    category: "Acessorios",
    image: "/products/chinelo-rvca.jpeg",
    stock: 1,
    badge: "Ultimo",
  },
  {
    id: "canga-farm",
    name: "Canga Pareo Farm Flores",
    description: "Canga Farm com estampa floral colorida. Composicao 100% algodao.",
    price: 89,
    category: "Acessorios",
    image: "/products/canga-farm.jpeg",
    stock: 1,
    badge: "Ultimo",
  },
];
