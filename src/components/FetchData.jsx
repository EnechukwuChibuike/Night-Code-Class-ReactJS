import { useEffect, useLayoutEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    // const fetchData = () => {
    //   fetch("https://fakestoreapi.com/products")
    //     .then((response) => response.json())
    //     .then((result) => {
    //       const data = result;

    //       setData(data);
    //     })
    //     .catch((error) => console.log(error));
    //   console.log(data);
    // };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap min-h-screen justify-around ">
      {loading && <h1 className="text-5xl">Loading...</h1>}

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
