interface ProductData {
  image: {
    desktop: string;
  };
  category: string;
  name: string;
  price: number;
}

export const ProductList = ({ data }: { data: ProductData }) => {
  const imageSrc = data.image.desktop;
  const imageAlt = data.category;

  return (
    <>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </>
  );
};
