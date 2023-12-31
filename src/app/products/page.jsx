import Link from "next/link";
import "./product.css";
import Image from "next/image";

export const metadata = {
  title: "E-commerce Next App - products",
  description: "Generated by create next app",
};

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function products() {
  const data = await getData();
  const products = data.products;
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {products.map((products) => (
            <div className="col-lg-4 col-xl-3 col-md-6" key={products.id}>
              <Link href={`/products/${products.id}`} className="post">
                <div className="card">
                  <dev className="image-container">
                    <Image
                      className="card-img-top image"
                      src={products.thumbnail}
                      fill={true}
                      // width={200}
                      // height={200}
                      alt="post image"
                    />
                  </dev>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
