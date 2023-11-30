import Image from "next/image";
import "./product.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}
export default async function page({ params }) {
  const product = await getData(params.id);

  return (
    <>
      <div className="container one-product p-5">
        <div className="row">
          <div className="images col-xl-6">
            <div className="image-container">
              <Image
                src={product.thumbnail}
                alt="product image"
                fill={true}
                // width={500}
                // height={400}
              />
            </div>
            <dev className="gallery">
              {product.images.map((image) => (
                <Image
                  key={product.id}
                  src={image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              ))}
            </dev>
          </div>
          <div className="info col-xl-6">
            <h2 className="title">{product.title}</h2>
            <p className="desc">{product.description}</p>
            <p className="price"> Price: {product.price}$</p>
            <button className="btn">buy</button>
          </div>
        </div>
      </div>
    </>
  );
}
