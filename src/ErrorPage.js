// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import { Button } from './styles/Button'

// const Error = () => {
//   return (
//     <Wrapper>
//     <div className='container'>
//       <div>
//         <h2>404</h2>
//         <h2>UH OH! You're lost</h2>
//         <p>
//           The page you are looking for is not exist and how you reach to this page is Eigth mystery of the world. But you can click the button to go back to the home page.
//         </p>
//         <Button>
//           <NavLink to='/'>
//             Go Back to Home
//           </NavLink>
//         </Button>
//       </div>
//     </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
// .container{
//   padding: 9rem 0;
//   text-align: center;
// h2{
//   font-size: 6rem;
// }
// p{
//   margin: 2rem 0;
// }
// }
// `

// export default Error



import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage