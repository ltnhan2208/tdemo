import Header from "./components/header";
import Slide from "./components/slide";
import RecommendedCollection from "./components/home/recommended-collection";
import PinCollection from "./components/home/pin-collection";
import QuoteSection from "./components/home/quote";

export default function Home() {
  return (
    <>
      <Header />
      <Slide />
      <br />
      <div className="w-full">
        <PinCollection />
        <br /><br /><br />
        <RecommendedCollection />
        <br /><br /><br />
        <QuoteSection />
      </div>
      <br /><br /> <br /> <br /><br /><br />
    </>
  );
}
