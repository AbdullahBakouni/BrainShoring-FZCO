import { FeaturesSectionDemo } from "./components/FeaturesSectionDemo";

import { Footer } from "./components/Footer";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { HeroParallax } from "./components/HeroParallax";
import { products } from "./lib/constans";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HeroParallax products={products} />

        <FeaturesSectionDemo />

        <HeroHighlightDemo />

        <Footer />
      </div>
    </>
  );
}
