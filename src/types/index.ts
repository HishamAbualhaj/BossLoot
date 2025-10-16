export type productType = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string[];
  rating: number;
  reviews: number;
};

export type blog = {
  id:string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: {
    title: string;
    link: string;
  };
};
