import { Header } from "./Header";
import { Carrousel } from "./Carrousel";
import { Prices } from "./Prices";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Carrousel></Carrousel>
      <Prices></Prices>
      <Footer></Footer>
    </div>
  );
}
