import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((result) => {
          const data = result;

          setData(data);
        })
        .catch((error) => console.log(error));
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap min-h-screen justify-around ">
      {data.map((product) => (
        <figure
          key={product.id}
          className="w-[20vw] h-[50vh] shadow-md bg-white mb-10"
        >
          <img
            src={product.image}
            alt="product img"
            className="w-full h-[25vh]"
          />
          <figcaption className="grid content-center h-fit">
            <p>{product.title}</p>
            <strong>{product.price}</strong>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}

export default FetchData;
