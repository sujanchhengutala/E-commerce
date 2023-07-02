// import React from "react";
// import styled from "styled-components";

// const Contact = () => {
//   return (
//     <Wrapper>
//       <h2 className="common-heading">Contact page</h2>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56521.10546058998!2d85.33757644513874!3d27.699710141206573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae4db96d65%3A0xe5fac03979032025!2sBhaktapur%20Mini%20Mart!5e0!3m2!1sen!2snp!4v1666514046588!5m2!1sen!2snp"
//         width="100%"
//         height="300"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"
//       ></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/meqdlbbg"
//             method="POST"
//             className="contact-inputs"
//           >
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               required
//               autoComplete="off"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="Email"
//               required
//               autoComplete="off"
//             />
//             <textarea
//               name="Message"
//               col="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter your message"
//             />
//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };
// const Wrapper = styled.section`
//   padding: 9rem 0 5rem 0;
//   text-align: center;

//   .container {
//     margin-top: 6rem;

//     .contact-form {
//       max-width: 50rem;
//       margin: auto;

//       .contact-inputs {
//         display: flex;
//         flex-direction: column;
//         gap: 3rem;

//         input[type="submit"] {
//           cursor: pointer;
//           transition: all 0.2s;

//           &:hover {
//             background-color: rgb(98 84 243);
//             border: 1px solid ${({ theme }) => theme.colors.btn};
//             color: ${({ theme }) => theme.colors.hr};
//             transform: scale(0.9);
//           }
//         }
//       }
//     }
//   }
// `;

// export default Contact;



import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56521.10546058998!2d85.33757644513874!3d27.699710141206573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae4db96d65%3A0xe5fac03979032025!2sBhaktapur%20Mini%20Mart!5e0!3m2!1sen!2snp!4v1666514046588!5m2!1sen!2snp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/meqdlbbg"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
