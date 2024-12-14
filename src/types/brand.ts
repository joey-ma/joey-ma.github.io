export type Brand = {
  id: number;
  name?: string;
  href: string;
  image: string | BrandIcon;
  imageLight?: string | BrandIcon;
};

export type BrandIcon = {
  name: string;
  className?: string;
};
