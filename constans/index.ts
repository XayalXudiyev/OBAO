import type { Category, RouteProps } from "./types"

interface MenuItem {
  title: string;
  image: string;
  items: FoodItem[];
}

interface FoodItem {
  id: number;
  name: string;
  price: string;
  content?: string;
  description?: string;
}

export const routes: RouteProps[] = [
  { id: 0, href: "/", title: "Home" },
  { id: 1, href: "/menu", title: "Menu" },
  { id: 2, href: "/#about-us", title: "About Us" },
  { id: 3, href: "/#restaurants", title: "Restaurants" },
  { id: 4, href: "/catering", title: "Catering" },
]

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
        price: "5",
        content: "Scampia, Moules, Crab"
      },
      {
        id: 2,
        name: "Miso Soup avec Fruit de Mer",
        price: "17",
        content: "Scampia, Moules, Crab"
      }
    ]
  },

  {
    title: "MAKI 6 PCS",
    image: "/menu/MAKI.webp",
    items: [
      {
        id: 1,
        name: "Maki Saumon",
        price: "6.20",
        description: ""
      },
      {
        id: 2,
        name: "Maki Thon Spicy Concombre (8pcs)",
        price: "9.80",
        description: "Thon tartare, Concombre"
      },
      {
        id: 3,
        name: "Maki Concombre ",
        price: "5",
        description: ""
      },
      {
        id: 4,
        name: "Maki Avocat",
        price: "5",
        description: ""
      },
      {
        id: 5,
        name: "Futo Maki Végan (8pcs) ",
        price: "10.50",
        description: "Japonaise Tofu Marine, Wakame, Concombre, Avocat, Radis Jaune"
      },
      {
        id: 6,
        name: "Maki Saumon Avocat (8pcs)",
        price: "9.20",
        description: ""
      },
      {
        id: 7,
        name: "O'BAO Futo Maki (8pcs)",
        price: "12.00",
        description: "Crab, Omelette Japonaise, Wakame, Masago, Concombre, Avocat, Radis Jaune, Mayo "
      }
    ]
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
    ]
  },

  {
    title: "SALADES JAPONAISE",
    image: "/menu/SALADE.webp",
    items: [
      {
        id: 1,
        name: "Chicken",
        price: "16.50",
        description: "Tempura Poulet, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 2,
        name: "Ebi Tempura",
        price: "17.50",
        description: "Tempura Scampis, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 3,
        name: "Sashimi",
        price: "18.00",
        description: "Thon, Saumon, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Wasabi - citrus, Maïs",
      },
      {
        id: 4,
        name: "Wakame",
        price: "16.00",
        description: "Algue Japonaise, Salade, Carrote, Concombre, Tomate, Avocat, Radis, Mangue, Sauce Japonaise, Maïs",
      },
      {
        id: 5,
        name: "California",
        price: "16.00",
        description: "Crab, Masago, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
      {
        id: 6,
        name: "Saumon Fume",
        price: "19.00",
        description: "Saumon Fume, Salade, Carotte, Concombre, Tomate, Avocat, Mangue, Radis, Sauce Japonaise, Maïs",
      },
    ]
  },

  {
    title: "DONBURI BOL A BASE DE RIZ",
    image: "/menu/DONBURI.webp",
    items: [
      {
        id: 1,
        name: "Yakitori Poulet",
        price: "17.00",
        description: "Morceau de Poulet Grille á la Sauce Japonaise avec Legumes",
      },
      {
        id: 2,
        name: "Gyuniku",
        price: "19.00",
        description: "Morceau de Boeuf Grille á la Sauce Japonaise avec Legumes",
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
      }
    ]

  }
]