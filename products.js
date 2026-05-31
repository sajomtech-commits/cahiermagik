/* ═══════════════════════════════════════════════════════════════════
   CAHIERMAGIK — Données produits
   Catalogue complet pour le site e-commerce
   ═══════════════════════════════════════════════════════════════════ */

const STORE_PRODUCTS = [
  {
    id: 1,
    name: "CahierMagik – Coffret découverte",
    category: "coffrets",
    price: 29.90,
    oldPrice: 39.90,
    badge: { label: "Offre magique", type: "sale" },
    rating: 4.8,
    reviewCount: 124,
    description: "Le coffret idéal pour découvrir la magie de l'écriture. Contient 3 cahiers réutilisables (lettres, chiffres, formes), 2 stylos magiques et 5 recharges. Offrez à votre enfant le plaisir d'apprendre sans gaspillage !",
    longDescription: "Les cahiers CahierMagik utilisent une encre thermosensible brevetée qui disparaît après 10 minutes. Votre enfant peut écrire, effacer et recommencer à l'infini. Fini le gaspillage de papier ! Chaque coffret contient tout le nécessaire pour des heures d'apprentissage ludique.",
    features: [
      "3 cahiers thématiques (lettres, chiffres, formes)",
      "2 stylos magiques avec encre violette",
      "5 cartouches de recharge",
      "Guide pédagogique pour les parents",
      "Âge recommandé : 3-6 ans"
    ],
    images: [
      "https://picsum.photos/seed/cahier-coffret-1/400/400",
      "https://picsum.photos/seed/cahier-coffret-2/400/400",
      "https://picsum.photos/seed/cahier-coffret-3/400/400",
      "https://picsum.photos/seed/cahier-coffret-4/400/400"
    ],
    usps: [
      { icon: "star", text: "Apprentissage ludique" },
      { icon: "recycle", text: "Réutilisable à l'infini" },
      { icon: "leaf", text: "Éco-conçu" },
      { icon: "truck", text: "Livraison offerte" }
    ],
    faq: [
      {
        q: "Comment fonctionne l'encre magique ?",
        a: "L'encre thermosensible disparaît au bout de 10 minutes sous l'effet de l'air ambiant. Pas de chaleur nécessaire, pas de produit chimique. Votre enfant peut écrire, voir son travail, puis recommencer."
      },
      {
        q: "Quels sont les délais de livraison ?",
        a: "La livraison standard prend 3 à 5 jours ouvrés. L'expédition est offerte dès 30€ d'achat. Nous livrons dans toute l'Europe."
      },
      {
        q: "Puis-je retourner un produit ?",
        a: "Oui, vous disposez de 30 jours pour retourner votre commande si elle ne vous convient pas. Les produits doivent être retournés dans leur emballage d'origine."
      }
    ],
    reviews: [
      {
        name: "Sophie M.",
        avatar: "https://picsum.photos/seed/avatar-sophie/60/60",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "Mon fils de 4 ans adore ces cahiers ! Il passe des heures à tracer les lettres sans se lasser. Le concept de l'encre qui disparaît le fascine."
      },
      {
        name: "Thomas L.",
        avatar: "https://picsum.photos/seed/avatar-thomas/60/60",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Excellent rapport qualité-prix. Les cahiers sont solides et le stylo est facile à tenir pour les petites mains."
      },
      {
        name: "Julie R.",
        avatar: "https://picsum.photos/seed/avatar-julie/60/60",
        rating: 4,
        date: "Il y a 1 semaine",
        text: "Idée géniale ! Je recommande pour préparer l'entrée en maternelle. Les exercices sont progressifs et bien conçus."
      }
    ]
  },
  {
    id: 2,
    name: "CahierMagik – Pack famille (2 coffrets)",
    category: "coffrets",
    price: 54.90,
    oldPrice: 69.90,
    badge: { label: "Économie 22%", type: "sale" },
    rating: 4.9,
    reviewCount: 87,
    description: "Le pack idéal pour les fratries ou pour équiper la maison et l'école. 2 coffrets complets avec 6 cahiers, 4 stylos et 10 recharges. Parfait pour que chaque enfant ait le sien !",
    longDescription: "Notre pack famille offre tout le nécessaire pour que deux enfants puissent apprendre simultanément. Chaque coffret contient 3 cahiers thématiques, 2 stylos et 5 recharges. L'économie réalisée par rapport à l'achat individuel vous permet d'offrir la magie à tous vos enfants.",
    features: [
      "2 coffrets découverte complets",
      "6 cahiers thématiques au total",
      "4 stylos magiques + 10 recharges",
      "Économie de 15€ par rapport à l'achat individuel",
      "Idéal pour fratrie ou copains"
    ],
    images: [
      "https://picsum.photos/seed/cahier-famille-1/400/400",
      "https://picsum.photos/seed/cahier-famille-2/400/400",
      "https://picsum.photos/seed/cahier-famille-3/400/400",
      "https://picsum.photos/seed/cahier-famille-4/400/400"
    ],
    usps: [
      { icon: "star", text: "Économie famille" },
      { icon: "recycle", text: "6 cahiers réutilisables" },
      { icon: "leaf", text: "Éco-conçu" },
      { icon: "heart", text: "Cadeau parfait" }
    ],
    faq: [
      {
        q: "Les deux coffrets sont-ils identiques ?",
        a: "Oui, chaque coffret contient les mêmes 3 cahiers (lettres, chiffres, formes) pour que chaque enfant puisse suivre le même programme d'apprentissage."
      },
      {
        q: "Peut-on acheter des recharges d'encre séparément ?",
        a: "Absolument ! Le 'Stylo magique + 5 recharges' est disponible dans notre boutique. Chaque recharge permet environ 20 heures d'écriture continue."
      },
      {
        q: "Y a-t-il un âge minimum recommandé ?",
        a: "Les cahiers sont conçus pour les enfants de 3 à 7 ans. Les exercices sont adaptés à chaque tranche d'âge avec une progression naturelle."
      }
    ],
    reviews: [
      {
        name: "Céline D.",
        avatar: "https://picsum.photos/seed/avatar-celine/60/60",
        rating: 5,
        date: "Il y a 1 mois",
        text: "Acheté pour mes jumeaux de 4 ans. Ils ont chacun leur coffret et adorent faire leurs exercices en même temps. Un vrai jeu pour eux !"
      },
      {
        name: "Marc P.",
        avatar: "https://picsum.photos/seed/avatar-marc/60/60",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "Format familial très économique. Les cahiers sont de grande qualité et tiennent bien dans le temps."
      }
    ]
  },
  {
    id: 3,
    name: "CahierMagik – Pack super magicien (3 coffrets)",
    category: "coffrets",
    price: 74.90,
    oldPrice: 99.90,
    badge: { label: "Économie 25%", type: "sale" },
    rating: 5.0,
    reviewCount: 52,
    description: "Le pack ultime pour les super magiciens ! 3 coffrets complets : 9 cahiers, 6 stylos et 15 recharges. Idéal pour les grandes familles, les crèches ou les écoles maternelles.",
    longDescription: "Notre pack le plus complet pour les apprentis sorciers de l'écriture. Avec 9 cahiers réutilisables, vous avez de quoi occuper toute une classe ou une grande famille. Chaque coffret couvre les fondamentaux : écriture, chiffres et formes géométriques.",
    features: [
      "3 coffrets complets (9 cahiers)",
      "6 stylos magiques + 15 recharges",
      "Économie de 25€ vs achat individuel",
      "Parfait pour écoles et crèches",
      "Coffret cadeau premium"
    ],
    images: [
      "https://picsum.photos/seed/cahier-magicien-1/400/400",
      "https://picsum.photos/seed/cahier-magicien-2/400/400",
      "https://picsum.photos/seed/cahier-magicien-3/400/400",
      "https://picsum.photos/seed/cahier-magicien-4/400/400"
    ],
    usps: [
      { icon: "star", text: "Économie max" },
      { icon: "recycle", text: "9 cahiers réutilisables" },
      { icon: "school", text: "Idéal collectivités" },
      { icon: "gift", text: "Coffret prestige" }
    ],
    faq: [
      {
        q: "Y a-t-il un tarif dégressif pour les écoles ?",
        a: "Oui, nous proposons des tarifs spéciaux pour les établissements scolaires et les crèches. Contactez-nous via notre formulaire pour un devis personnalisé."
      },
      {
        q: "Peut-on utiliser ces cahiers avec d'autres stylos ?",
        a: "Non, seuls nos stylos à encre thermosensible fonctionnent. Nous les fournissons dans chaque coffret avec des recharges de rechange."
      }
    ],
    reviews: [
      {
        name: "Émilie T.",
        avatar: "https://picsum.photos/seed/avatar-emilie/60/60",
        rating: 5,
        date: "Il y a 2 mois",
        text: "Utilisés dans ma classe de maternelle, les enfants sont captivés ! La directrice va commander pour toute l'école."
      },
      {
        name: "Nicolas B.",
        avatar: "https://picsum.photos/seed/avatar-nicolas/60/60",
        rating: 5,
        date: "Il y a 1 mois",
        text: "Génial pour nos 3 enfants. Chacun a son coffret et ils s'amusent à faire les exercices ensemble."
      }
    ]
  },
  {
    id: 4,
    name: "Stylo magique + 5 recharges",
    category: "accessoires",
    price: 9.90,
    oldPrice: 14.90,
    badge: { label: "Éco-recharge", type: "eco" },
    rating: 4.6,
    reviewCount: 203,
    description: "Le stylo magique supplémentaire ou de remplacement pour vos cahiers CahierMagik. Ergonomique, adapté aux petites mains, avec 5 cartouches de recharge. L'encre violette disparaît en 10 minutes.",
    longDescription: "Notre stylo magique est conçu spécialement pour les mains des enfants : grip ergonomique, pointe adaptée à l'apprentissage du geste d'écriture, capuchon sécurisé. Chaque recharge permet environ 20 heures d'écriture continue. L'encre thermosensible disparaît naturellement en 10 minutes.",
    features: [
      "Stylo ergonomique pour enfants",
      "5 cartouches de recharge incluses",
      "Encre violette thermosensible",
      "Disparaît en 10 minutes",
      "Âge recommandé : 3+"
    ],
    images: [
      "https://picsum.photos/seed/stylo-magique-1/400/400",
      "https://picsum.photos/seed/stylo-magique-2/400/400",
      "https://picsum.photos/seed/stylo-magique-3/400/400",
      "https://picsum.photos/seed/stylo-magique-4/400/400"
    ],
    usps: [
      { icon: "magic", text: "Rechargeable" },
      { icon: "hand", text: "Design ergonomique" },
      { icon: "leaf", text: "Éco-conçu" },
      { icon: "truck", text: "Livraison offerte" }
    ],
    faq: [
      {
        q: "L'encre est-elle toxique ?",
        a: "Non, notre encre thermosensible est totalement non-toxique et sans danger pour les enfants. Elle est certifiée conforme aux normes européennes de sécurité (CE)."
      },
      {
        q: "Combien de temps dure une recharge ?",
        a: "Chaque cartouche permet environ 20 heures d'écriture continue, soit plusieurs semaines d'utilisation pour un enfant."
      },
      {
        q: "Le stylo fonctionne-t-il avec tous les cahiers ?",
        a: "Oui, il est compatible avec tous nos cahiers CahierMagik ainsi qu'avec les tableaux effaçables de la marque."
      }
    ],
    reviews: [
      {
        name: "Aurélie K.",
        avatar: "https://picsum.photos/seed/avatar-aurelie/60/60",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Très bon stylo, ma fille le tient bien mieux qu'un stylo classique. Les recharges durent longtemps."
      },
      {
        name: "Romain S.",
        avatar: "https://picsum.photos/seed/avatar-romain/60/60",
        rating: 4,
        date: "Il y a 1 mois",
        text: "Pratique d'avoir des recharges supplémentaires. Le stylo est solide même après plusieurs semaines d'utilisation intensive."
      },
      {
        name: "Carine F.",
        avatar: "https://picsum.photos/seed/avatar-carine/60/60",
        rating: 5,
        date: "Il y a 3 jours",
        text: "Idéal pour compléter le coffret découverte. Mon fils a perdu son premier stylo, content d'avoir pu le remplacer rapidement."
      }
    ]
  },
  {
    id: 5,
    name: "Poster alphabet effaçable",
    category: "accessoires",
    price: 12.90,
    oldPrice: 19.90,
    badge: { label: "Nouveau", type: "magic" },
    rating: 4.7,
    reviewCount: 38,
    description: "Un grand poster A2 effaçable avec l'alphabet illustré. Accroché au mur, votre enfant peut tracer les lettres au stylo magique et recommencer à l'infini. Un outil pédagogique magnifique pour la chambre !",
    longDescription: "Notre poster alphabet transforme l'apprentissage en jeu quotidien. Chaque lettre est illustrée par un dessin enfantin (A comme Abracadabra, B comme Baguette magique...). Le poster est laminé et s'utilise avec nos stylos magiques. Inclus : kit de fixation murale.",
    features: [
      "Format A2 (42×59,4 cm)",
      "Alphabet illustré façon abécédaire",
      "Surface effaçable réutilisable",
      "Kit de fixation murale inclus",
      "Âge recommandé : 3-7 ans"
    ],
    images: [
      "https://picsum.photos/seed/poster-alphabet-1/400/400",
      "https://picsum.photos/seed/poster-alphabet-2/400/400",
      "https://picsum.photos/seed/poster-alphabet-3/400/400",
      "https://picsum.photos/seed/poster-alphabet-4/400/400"
    ],
    usps: [
      { icon: "magic", text: "Abécédaire illustré" },
      { icon: "recycle", text: "Réutilisable" },
      { icon: "frame", text: "Déco chambre" },
      { icon: "heart", text: "Apprentissage ludique" }
    ],
    faq: [
      {
        q: "Quel stylo utiliser avec le poster ?",
        a: "Le poster est compatible avec tous nos stylos magiques vendus séparément ou dans les coffrets. L'encre disparaît en 10 minutes."
      },
      {
        q: "Le poster peut-il être encadré ?",
        a: "Oui, il est aux dimensions standards A2 et peut être encadré. Sa surface laminée permet une utilisation quotidienne sans s'abîmer."
      },
      {
        q: "Les fixations sont-elles incluses ?",
        a: "Oui, un kit de fixation adapté à tous types de murs est fourni avec le poster."
      }
    ],
    reviews: [
      {
        name: "Laure N.",
        avatar: "https://picsum.photos/seed/avatar-laure/60/60",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Magnifique poster ! Ma fille l'a accroché dans sa chambre et s'entraîne chaque jour à écrire les lettres. Les illustrations sont adorables."
      },
      {
        name: "Vincent G.",
        avatar: "https://picsum.photos/seed/avatar-vincent/60/60",
        rating: 4,
        date: "Il y a 1 semaine",
        text: "Très belle qualité d'impression. Le format est généreux, les lettres bien lisibles. Mon fils de 5 ans adore."
      }
    ]
  },
  {
    id: 6,
    name: "Cahier de dessin magique",
    category: "cahiers",
    price: 19.90,
    oldPrice: 29.90,
    badge: { label: "Nouveauté", type: "magic" },
    rating: 4.9,
    reviewCount: 67,
    description: "Le cahier de dessin qui se transforme en livre d'artiste ! 30 pages épaisses avec des modèles à reproduire et des espaces libres pour laisser libre cours à l'imagination. Dessins, coloriages, gribouillages magiques !",
    longDescription: "Bien plus qu'un simple cahier de coloriage : chaque page propose une activité créative différente. Dessins guidés, points à relier, coloriages magiques (les motifs apparaissent au passage du stylo !) et pages blanches pour les chefs-d'œuvre de votre enfant. 32 pages en papier épais 200g.",
    features: [
      "32 pages en papier 200g (couverture rigide)",
      "Activités : dessins guidés, coloriages, points à relier",
      "Pages à motif magique (apparaît au contact du stylo)",
      "Couverture rigide avec ferreture élastique",
      "Âge recommandé : 4-10 ans"
    ],
    images: [
      "https://picsum.photos/seed/cahier-dessin-1/400/400",
      "https://picsum.photos/seed/cahier-dessin-2/400/400",
      "https://picsum.photos/seed/cahier-dessin-3/400/400",
      "https://picsum.photos/seed/cahier-dessin-4/400/400"
    ],
    usps: [
      { icon: "star", text: "Créativité débordante" },
      { icon: "recycle", text: "Réutilisable" },
      { icon: "leaf", text: "Papier certifié FSC" },
      { icon: "gift", text: "Cadeau idéal" }
    ],
    faq: [
      {
        q: "Ce cahier est-il compatible avec les stylos classiques ?",
        a: "Non, il est conçu pour être utilisé avec nos stylos à encre magique. L'encre classique ne disparaîtrait pas et les motifs magiques ne sont visibles qu'avec notre encre spéciale."
      },
      {
        q: "Combien de temps dure une page ?",
        a: "Chaque page peut être utilisée des centaines de fois. L'encre disparaît en 10 minutes, ce qui permet à votre enfant de dessiner, voir son œuvre, et recommencer."
      },
      {
        q: "Quels sont les thèmes des dessins ?",
        a: "Le cahier contient des thèmes variés : animaux magiques, châteaux, sirènes, dinosaures, espace, nature. De quoi plaire à tous les goûts !"
      }
    ],
    reviews: [
      {
        name: "Manon P.",
        avatar: "https://picsum.photos/seed/avatar-manon/60/60",
        rating: 5,
        date: "Il y a 5 jours",
        text: "Ma fille de 6 ans passe des heures à dessiner. Les pages à motifs magiques sont bluffantes, on voit le dessin apparaître comme par enchantement !"
      },
      {
        name: "Alexandre W.",
        avatar: "https://picsum.photos/seed/avatar-alex/60/60",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Super concept ! Mon fils qui n'aime pas le coloriage classique a complètement accroché. Le fait que le dessin 'apparaisse' le motive énormément."
      }
    ]
  }
];
