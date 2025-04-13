import type { Category, RouteProps } from "./types"

interface MenuItem {
  title: string
  image: string
  items: FoodItem[]
}

interface FoodItem {
  id: number
  name: string
  price: string
  content?: string
  description?: string
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Big plates",
  },
  {
    id: 2,
    title: "Entrees",
  },
  {
    id: 3,
    title: "Desserts",
  },
  {
    id: 4,
    title: "Drinks",
  },
  {
    id: 5,
    title: "Non gluten",
  },
]

export const menu: MenuItem[] = [
  {
    title: "POTAGE",
    image: "/menu/POTAGE.webp",
    items: [
      {
        id: 1,
        name: "Miso soup",
        price: "17",
        content: "",
      },
      {
        id: 2,
        name: "Miso Soup avec Fruit de Mer",
        price: "17",
        content: "Scampia, Moules, Crab",
      },
    ],
  },

  {
    title: "ENTREES",
    image: "/menu/ENTREES.webp",
    items: [
      {
        id: 1,
        name: "Takoyaki (5pcs) ",
        price: "9",
        content: "Boulettes de Poulpe avec Bonite Séchée",
      },
      {
        id: 2,
        name: "Poulet Yakitori (3pcs)",
        price: "9.20",
        content: "Brochettes de poulet a la sauce Japonaise ",
      },
      {
        id: 3,
        name: "Gyuniku",
        price: "12.80",
        content: "Boeuf grillé a la Sauce Japonaise",
      },
      {
        id: 4,
        name: "Dynamite Crevettes (5pcs)",
        price: "10.50",
        content: "Crevette frits a la sauce Japonaise",
      },
      {
        id: 5,
        name: "Karaage (5pcs)",
        price: "8.50",
        content: "Beignet de poulet avec sauce aigre-douce",
      },
      {
        id: 6,
        name: "Gyoza Ebi (5pcs)",
        price: "9.60",
        content: "Raviolis Japonaise aux Crevettes ",
      },
      {
        id: 7,
        name: "Gyoza Poulet (5pcs)",
        price: "9.00",
        content: "Raviolis Japonaise au Poulet ",
      },
      {
        id: 8,
        name: "Gyoza Végétarien (5pcs)",
        price: "8.50",
        content: "Raviolis Japonaise Vegetarien ",
      },
      {
        id: 9,
        name: "Edamame Spicy ",
        price: "7.20",
        content: "Haricots Verte  avec sauce épicée",
      },
      {
        id: 10,
        name: "Ebi Tempura (4pcs)",
        price: "8.50",
        content: "",
      },
      {
        id: 11,
        name: "Nems au Poulet (3pcs)",
        price: "7.20",
        content: "",
      },
      {
        id: 12,
        name: "Mini Loempia (8pcs)",
        price: "6.00",
        content: "Rouleaux de printemps aux légumes ",
      },
      {
        id: 13,
        name: "Wakamé",
        price: "7.00",
        content: "Algue Japonaise",
      },
      {
        id: 14,
        name: "Loempia aux fruits de mer (6pcs) ",
        price: "8.00",
        content: "",
      },
      {
        id: 15,
        name: "Ika Fried (5pcs) ",
        price: "7.00",
        content: "Calamar Frits",
      },
    ],
  },
  {
    title: "MAKI 6 PCS",
    image: "/menu/MAKI.webp",
    items: [
      {
        id: 1,
        name: "Maki Saumon",
        price: "6.20",
        description: "",
      },
      {
        id: 2,
        name: "Maki Thon Spicy Concombre (8pcs)",
        price: "9.80",
        description: "Thon tartare, Concombre",
      },
      {
        id: 3,
        name: "Maki Concombre ",
        price: "5",
        description: "",
      },
      {
        id: 4,
        name: "Maki Avocat",
        price: "5",
        description: "",
      },
      {
        id: 5,
        name: "Futo Maki Végan (8pcs) ",
        price: "10.50",
        description:
          "Japonaise Tofu Marine, Wakame, Concombre, Avocat, Radis Jaune",
      },
      {
        id: 6,
        name: "Maki Saumon Avocat (8pcs)",
        price: "9.20",
        description: "",
      },
      {
        id: 7,
        name: "O'BAO Futo Maki (8pcs)",
        price: "12.00",
        description:
          "Crab, Omelette Japonaise, Wakame, Masago, Concombre, Avocat, Radis Jaune, Mayo ",
      },
    ],
  },

  {
    title: "URAMAKI 8 PCS",
    image: "/menu/MAKI.webp",
    items: [
      {
        id: 1,
        name: "California",
        price: "9.20",
        description: "Crab, Concombre, Avocat, Masago ",
      },
      {
        id: 2,
        name: "Crispy Ebi Tempura",
        price: "9.80",
        description: "Tempura Scampis, Avocat, Oignon Frits",
      },
      {
        id: 3,
        name: "Crispy Chicken",
        price: "9.50",
        description: "Tempura Poulet, Concombre, Oignon Frits",
      },
      {
        id: 4,
        name: "Philadelphia Roll",
        price: "9.20",
        description: "Saumon, Avocat, Concombre, Fromages",
      },
      {
        id: 5,
        name: "California Saumon",
        price: "9.50",
        description: "Saumon, Avocat, Concombre, Masago",
      },
      {
        id: 6,
        name: "Thon Spicy ",
        price: "9.80",
        description: "Thon tartare, Avocat, Concombre, Chili Pepper ",
      },
      {
        id: 7,
        name: "Vegetarien",
        price: "9.00",
        description: "Radis Jaune, Omelette Japonaise, Avocat, concombre",
      },
    ],
  },

  {
    title: "SASHIMI",
    image: "/menu/SASHIMI.webp",
    items: [
      {
        id: 1,
        name: "Saumon (5pcs)",
        price: "9.50",
        description: "Tranches de Saumon",
      },
      {
        id: 2,
        name: "Saumon (5pcs)",
        price: "10.00",
        description: "Tranches de Saumon Flambé avec Sauce Japonaise",
      },
      {
        id: 3,
        name: "Thon (5pcs)",
        price: "10.50",
        description: "Tranches de Thon",
      },
      {
        id: 4,
        name: "Thon Tataki (5pcs) ",
        price: "11.00",
        description: "Tranches de Thon Flambé avec Sauce Japonaise",
      },
      {
        id: 5,
        name: "Deluxe Box (12pcs)",
        price: "21.50",
        description: "4pcs Saumon - 4pcs Thon - 4pcs Coquille Saint Jacques ",
      },
    ],
  },

  {
    title: "SALADES JAPONAISE",
    image: "/menu/SALADE.webp",
    items: [
      {
        id: 1,
        name: "Chicken",
        price: "16.50",
        description:
          "Tempura Poulet, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 2,
        name: "Ebi Tempura",
        price: "17.50",
        description:
          "Tempura Scampis, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 3,
        name: "Sashimi",
        price: "18.00",
        description:
          "Thon, Saumon, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Wasabi - citrus, Maïs",
      },
      {
        id: 4,
        name: "Wakame",
        price: "16.00",
        description:
          "Algue Japonaise, Salade, Carrote, Concombre, Tomate, Avocat, Radis, Mangue, Sauce Japonaise, Maïs",
      },
      {
        id: 5,
        name: "California",
        price: "16.00",
        description:
          "Crab, Masago, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 6,
        name: "Saumon Fume",
        price: "19.00",
        description:
          "Saumon Fume, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
    ],
  },

  {
    title: "DONBURI BOL A BASE DE RIZ",
    image: "/menu/DONBURI.webp",
    items: [
      {
        id: 1,
        name: "Yakitori Poulet",
        price: "17.00",
        description:
          "Morceau de Poulet Grille á la Sauce Japonaise avec Legumes",
      },
      {
        id: 2,
        name: "Gyuniku",
        price: "19.00",
        description:
          "Morceau de Boeuf Grille á la Sauce Japonaise avec Legumes",
      },
      {
        id: 3,
        name: "Saumon Grillé",
        price: "19.00",
        description: "Saumon Grillé a la Sauce Japonaise avec Brocolis",
      },
      {
        id: 4,
        name: "Ebi Tempura",
        price: "18.00",
        description: "Beignet de Scampis á la Sauce Aigre-Doux ",
      },
      {
        id: 5,
        name: "Canard Laque",
        price: "19.00",
        description: "Canard Laque á la Sauce Hoisin Piquant",
      },
    ],
  },
]

export const cateringMeal = [
  {
    title: "SEASONAL SALADS",
    image: "/catering/caters/salad.webp",
    description:
      "Crisp, colorful, and refreshing—our salads showcase the best of each season with Japanese-inspired dressings and textures.",
  },
  {
    title: "SASHIMI",
    image: "/catering/caters/sashimi.webp",
    description:
      "Pure, elegant cuts of the freshest fish, served with precision and care.",
  },
  {
    title: "SUSHI",
    image: "/catering/caters/sushi.webp",
    description:
      "Handcrafted rolls and nigiri that blend tradition with creativity in every bite.",
  },
  {
    title: "VEGAN SUSHI & BOWLS",
    image: "/catering/caters/vegan.webp",
    description:
      "Plant-based, flavor-packed, and beautifully balanced—crafted to satisfy with zero compromise on taste.",
  },
  {
    title: "VEGETARIAN SALADS, SUSHI & BOWLS",
    image: "/catering/caters/vegetarian.webp",
    description:
      "A vibrant mix of fresh vegetables, grains, and Japanese flavors designed for clean eating and full satisfaction.",
  },
  {
    title: "DONBURI",
    image: "/catering/caters/donburi.webp",
    description:
      "Hearty, flavorful, and satisfying—our donburi bowls are a true taste of Japan.",
  },
]
