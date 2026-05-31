const PRODUCTS = [
  {
    id: "cahiers-magiques",
    name: "Cahiers d'écriture magiques® (Coffret cadeau)",
    price: 29.90,
    oldPrice: 39.90,
    badge: "En promo",
    category: "coffrets",
    description: "Les cahiers d'écriture magiques préscolaires sont une approche innovante pour éveiller l'intérêt des enfants pour l'apprentissage de l'écriture tout en préservant l'environnement. Grâce à leur encre magique, les écrits disparaissent après 10 minutes, rendant chaque cahier réutilisable à l'infini.",
    longDescription: `<p>Les cahiers d'écriture magiques préscolaires sont une approche innovante pour éveiller l'intérêt des enfants pour l'apprentissage de l'écriture tout en préservant l'environnement. Grâce à leur encre magique, les écrits disparaissent après 10 minutes, rendant chaque cahier réutilisable à l'infini.</p><p>Votre enfant peut écrire et apprendre encore et encore, sans aucun gaspillage de papier. Cette propriété unique transforme chaque séance d'apprentissage en une expérience passionnante et favorise l'amélioration continue de l'écriture et de la motricité fine.</p><p>Les cahiers couvrent 4 thèmes essentiels pour une rentrée scolaire réussie : les lettres, les chiffres, le calcul et le dessin. Développés avec des pédagogues, ils guident l'enfant pas à pas à travers chaque matière de manière ludique, pour un départ en douceur vers l'école.</p>`,
    image: "https://edubini.com/cdn/shop/files/Image_49_cfopy.webp?v=1741685445&width=600",
    images: [
      "https://edubini.com/cdn/shop/files/Image_49_cfopy.webp?v=1741685445&width=600",
      "https://edubini.com/cdn/shop/files/bild_heft_2.webp?v=1765292768&width=600",
      "https://edubini.com/cdn/shop/files/Image_104_Kopie.webp?v=1765292768&width=600",
      "https://edubini.com/cdn/shop/files/bild_heft_4.webp?v=1765292768&width=600"
    ],
    rating: 5,
    reviews: 532,
    usps: ["Qualité premium", "Réutilisable après 10 min", "Écologique", "Livraison offerte"],
    variants: [
      { qty: 1, price: 29.90, oldPrice: 39.90, label: "1 coffret", sub: "29,90€" },
      { qty: 2, price: 54.90, oldPrice: 69.90, label: "2 coffrets", sub: "27,45€/coffret" },
      { qty: 3, price: 74.90, oldPrice: 99.90, label: "3 coffrets", sub: "24,97€/coffret" }
    ],
    details: [
      { title: "Pour qui ?", text: "Enfants dès 5 ans – une préparation idéale pour l'école" },
      { title: "Contenu", text: "18 pages par cahier · Format 18,5 × 26 cm" },
      { title: "Matériau", text: "Papier 500 g/m² · Surface hydrofuge · Reliure à spirale" },
      { title: "Inclus", text: "Stylo ergonomique + 5 recharges · Guide avec conseils" }
    ],
    faqs: [
      { q: "Comment fonctionnent les cahiers magiques ?", a: "Les cahiers utilisent une encre spéciale qui disparaît automatiquement après 10 minutes. Votre enfant peut ainsi réutiliser chaque page à l'infini. La structure en relief 3D guide le stylo et facilite l'apprentissage des bons gestes d'écriture." },
      { q: "Comment se passe la livraison ?", a: "L'expédition se fait depuis notre entrepôt en Allemagne avec DHL ou DPD (suivi inclus). France : 2–4 jours (3,90€, offert dès 25€). Belgique & Suisse : 3–5 jours (4,90€, offert dès 50€)." },
      { q: "Puis-je retourner les cahiers ?", a: "Oui, vous disposez de 30 jours à compter de la réception pour retourner votre commande. Les frais de retour sont de 4,90€. Contactez simplement notre service client et nous nous occupons du reste." }
    ]
  },
  {
    id: "microscope-educatif",
    name: "Microscope éducatif enfant",
    price: 39.90,
    oldPrice: 49.90,
    badge: "Populaire",
    category: "science",
    description: "Un microscope adapté aux enfants dès 6 ans pour découvrir le monde fascinant de la biologie. Grossissement jusqu'à 1200x.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
    ],
    rating: 4,
    reviews: 218,
    usps: ["Grossissement 1200x", "Lunettes LED incluses", "Coffret de lames", "Garantie 2 ans"],
    variants: [
      { qty: 1, price: 39.90, oldPrice: 49.90, label: "1 microscope", sub: "39,90€" },
      { qty: 2, price: 74.90, oldPrice: 89.90, label: "2 microscopes", sub: "37,45€/pièce" }
    ],
    details: [
      { title: "Âge recommandé", text: "Dès 6 ans" },
      { title: "Grossissement", text: "100x – 1200x" },
      { title: "Alimentation", text: "Piles AAA (incluses)" },
      { title: "Accessoires", text: "5 lames préparées + 10 lames vierges" }
    ],
    faqs: [
      { q: "Le microscope est-il facile à utiliser ?", a: "Oui, la mise au point est simplifiée et la platine de préparation est adaptée aux petites mains. Le manuel illustré guide l'enfant pas à pas." },
      { q: "Quels sont les modes d'observation ?", a: "Le microscope propose 3 niveaux de grossissement (100x, 600x, 1200x) avec un éclairage LED réglable." }
    ]
  },
  {
    id: "journal-emotions",
    name: "Journal des émotions",
    price: 19.90,
    oldPrice: 24.90,
    badge: "Nouveau",
    category: "bien-etre",
    description: "Un journal intime guidé pour aider les enfants à comprendre et exprimer leurs émotions de manière positive et créative.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?w=600&q=80"
    ],
    rating: 5,
    reviews: 147,
    usps: ["Développement émotionnel", "Activités guidées", "Autocollants inclus", "Dès 4 ans"],
    variants: [
      { qty: 1, price: 19.90, oldPrice: 24.90, label: "1 journal", sub: "19,90€" },
      { qty: 2, price: 34.90, oldPrice: 44.90, label: "2 journaux", sub: "17,45€/pièce" },
      { qty: 3, price: 49.90, oldPrice: 64.90, label: "3 journaux", sub: "16,63€/pièce" }
    ],
    details: [
      { title: "Âge recommandé", text: "Dès 4 ans" },
      { title: "Format", text: "21 × 15 cm · 64 pages" },
      { title: "Contenu", text: "30 activités + stickers émotions" },
      { title: "Conçu avec", text: "Pédopsychiatre et éducateurs" }
    ],
    faqs: [
      { q: "Comment ce journal aide-t-il mon enfant ?", a: "Chaque page propose une activité ludique pour identifier et nommer l'émotion ressentie. Le journal aide à développer l'intelligence émotionnelle et la confiance en soi." }
    ]
  },
  {
    id: "tableau-recompenses",
    name: "Tableau de récompenses magnétique",
    price: 24.90,
    oldPrice: 29.90,
    badge: "Meilleure vente",
    category: "coffrets",
    description: "Un tableau magnétique ludique pour encourager les bonnes habitudes et la routine quotidienne des enfants.",
    image: "https://images.unsplash.com/photo-1584697964407-1aa8e1f6a1e3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584697964407-1aa8e1f6a1e3?w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80"
    ],
    rating: 4,
    reviews: 305,
    usps: ["Tableau magnétique", "50 aimants inclus", "Routine quotidienne", "Réutilisable"],
    variants: [
      { qty: 1, price: 24.90, oldPrice: 29.90, label: "1 tableau", sub: "24,90€" },
      { qty: 2, price: 44.90, oldPrice: 54.90, label: "2 tableaux", sub: "22,45€/pièce" }
    ],
    details: [
      { title: "Âge recommandé", text: "Dès 3 ans" },
      { title: "Format", text: "45 × 32 cm" },
      { title: "Contenu", text: "Tableau + 50 aimants + feutre" },
      { title: "Thèmes", text: "Habitudes, école, maison, hygiène" }
    ],
    faqs: [
      { q: "Comment utiliser le tableau ?", a: "Fixez le tableau au mur ou au frigo. L'enfant déplace les aimants au fur et à mesure de ses accomplissements. À la fin de la semaine, comptez les points ensemble !" }
    ]
  },
  {
    id: "puzzle-alphabet",
    name: "Puzzle alphabet en bois",
    price: 14.90,
    oldPrice: 18.90,
    badge: "-21%",
    category: "apprentissage",
    description: "Un puzzle alphabet en bois naturel pour apprendre les lettres en s'amusant. Chaque lettre est une pièce à encastrer.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
      "https://images.unsplash.com/photo-1596063876637-2b2c8c0e6a3f?w=600&q=80"
    ],
    rating: 4,
    reviews: 89,
    usps: ["Bois certifié FSC", "26 lettres", "Peinture non toxique", "Dès 2 ans"],
    variants: [
      { qty: 1, price: 14.90, oldPrice: 18.90, label: "1 puzzle", sub: "14,90€" },
      { qty: 2, price: 26.90, oldPrice: 34.90, label: "2 puzzles", sub: "13,45€/pièce" }
    ],
    details: [
      { title: "Âge recommandé", text: "Dès 2 ans" },
      { title: "Matériau", text: "Bois d'érable certifié FSC" },
      { title: "Dimensions", text: "30 × 30 cm" },
      { title: "Sécurité", text: "Peinture à l'eau non toxique" }
    ],
    faqs: [
      { q: "Est-ce adapté aux tout-petits ?", a: "Oui, les pièces sont larges (5 cm) et faciles à attraper. Le bois est léger et les bords sont arrondis." }
    ]
  },
  {
    id: "horloge-apprentissage",
    name: "Horloge d'apprentissage interactive",
    price: 22.90,
    oldPrice: 27.90,
    badge: "Populaire",
    category: "apprentissage",
    description: "Une horloge interactive colorée pour apprendre à lire l'heure de façon ludique. Avec aiguilles mobiles et cadran magnétique.",
    image: "https://images.unsplash.com/photo-1594322436404-5e0526f3e7c3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594322436404-5e0526f3e7c3?w=600&q=80",
      "https://images.unsplash.com/photo-1563861826100-9cb8680ae0f6?w=600&q=80"
    ],
    rating: 4,
    reviews: 176,
    usps: ["Aiguilles mobiles", "Cadran magnétique", "Dès 5 ans", "Guide inclus"],
    variants: [
      { qty: 1, price: 22.90, oldPrice: 27.90, label: "1 horloge", sub: "22,90€" },
      { qty: 2, price: 39.90, oldPrice: 49.90, label: "2 horloges", sub: "19,95€/pièce" }
    ],
    details: [
      { title: "Âge recommandé", text: "Dès 5 ans" },
      { title: "Format", text: "25 × 25 cm" },
      { title: "Fonctionnalités", text: "Aiguilles mobiles + aimants" },
      { title: "Inclus", text: "Guide d'apprentissage offert" }
    ],
    faqs: [
      { q: "Mon enfant peut-il apprendre seul ?", a: "Le cadran gradué et les couleurs facilitent l'apprentissage en autonomie. Le guide propose 10 leçons progressives." }
    ]
  }
];
