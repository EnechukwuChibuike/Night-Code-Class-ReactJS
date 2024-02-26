import { useState, useEffect } from "react";

function StickyHeader() {
  const [winScroll, setWinScroll] = useState(0);
  const [header, setHeader] = useState("static");

  useEffect(() => {
    const scroll = () => {
      const sticky = window.scrollY;
      const fixedHeader = sticky > 200 ? "fixed" : "static";
      setHeader(fixedHeader);
      setWinScroll(sticky);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      <header
        className={`${header} flex bg-white justify-center items-center w-full h-[10vh] shadow-md`}
      >
        Header
      </header>
      <section className="flex h-[90vh] justify-center items-center">
        <h1 className="text-5xl">{winScroll}px</h1>
      </section>
    </>
  );
}

export default StickyHeader;
