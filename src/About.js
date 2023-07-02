import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./Context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Sujan & Bishal Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;