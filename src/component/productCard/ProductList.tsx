interface ProductData {
  image: {
    desktop: string;
  };
  category: string;
  name: string;
  price: number;
}

export const ProductList = ({ data }: { data: ProductData[] }) => {
  const imageSrc = data[0].image.desktop;
  const imageAlt = data[0].category;

  return (
    <>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.category}>{item.category}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
