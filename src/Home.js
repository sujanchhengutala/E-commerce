// import React from 'react'
// import FeaturesProducts from './Components/FeaturesProducts'
// import HeroSection from './Components/HeroSection'
// import Services from './Components/Services'
// import Trusted from './Components/Trusted'
// const Home = () => {

//   const data = {
//     name:'Sujan Store',
//   }
//   return (
//     <>
//     <HeroSection props= {data} />
//     <FeaturesProducts />
//     <Services />
//     <Trusted />
//     </>
//   )
// }

// export default Home

import FeatureProduct from "./Components/FeatureProduct";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "Sujan & Bishal Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;