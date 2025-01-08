import { Header } from "./Header";
import { Carousel } from "./Carousel";
import { Prices } from "./Prices";
import { Footer } from "./Footer";

export function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Carousel></Carousel>
      <Prices></Prices>
      <Footer></Footer>
    </div>
  );
}
