export interface Montre {
  bracelet?: string;
  cadran_extérieur?: string;
  cadran_intérieur?: string;
  écran?: string;
  boitier?: string;

}

export const colors = {
  "#47484D": "Gris Matte",
  "#3F4953": "Bleu Tempête",
  "#C0CCC8": "Vert Triste",
  "#EFD5D4": "Rose Pale",
  "#38A3A5": "Bleu Jade",
  "#FDCA8B": "Jaune Soleil",
  "#E3DEDA": "Blanc Crème",
};

export const materiaux = [
  {
    value: "https://www.pliage-tole.fr/wp-content/uploads/2016/06/nos-pieces-acier.png",
    label: "Acier",
  },
  {
    value: "https://www.linverse.fr/sites/default/files/styles/blog_full/public/2021-05/article-polyester.png?h=9da7ae08&itok=abVyWYoO",
    label: "Polyester",
  },
];
