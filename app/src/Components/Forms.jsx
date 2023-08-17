// import React, { useState, useEffect } from 'react';

// export default function Forms() {
//   const [isValidName, setIsValidName] = useState(false);
//   const [isValidEmail, setIsValidEmail] = useState(false);
//   const [isValidTelephone, setIsValidTelephone] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     telephone: '',
//   });

//   const validateNameAndEmail = () => {
//     if (isValidName && isValidEmail && isValidTelephone) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   };

//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     const updateState = {
//       ...form,
//       [name]: value,
//     };
//     setForm(updateState);
//     validateNameAndEmail();
//   };

//   const formValidation = () => {
//     const isNameValid = form.name.length >= 3;
//     if (isNameValid) {
//       setIsValidName(true);
//     }

//     const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
//     const isTelephoneValid = form.telephone.length >= 11;

//     if (isNameValid && isEmailValid && isTelephoneValid) {
//       return true;
//     }
//     return false;
//   };

//   const onButtonClick = () => {

//   };

//   return (
//     <section className="signup">
//       <h3>Inscreva-se</h3>
//       <form
//         className="signup-form"
//         action="https://formsubmit.co/jgmoreira1809@gmail.com"
//         method="POST"
//       >
//         <div className="form-input">
//           <label htmlFor="nameInput">
//             Nome
//             <div>
//               <input
//                 id="nameInput"
//                 name="nameInput"
//                 type="text"
//                 placeholder="Nome Completo"
//                 required
//                 value={form.name}
//                 onChange={onInputChange}
//               />
//             </div>
//           </label>
//           {!isValidName && <span className="warning">O seu nome deve estar completo</span>}
//         </div>
//         <div className="form-input">
//           <label htmlFor="emailInput">
//             Email
//             <div>
//               <input
//                 id="emailInput"
//                 name="emailInput"
//                 type="text"
//                 placeholder="Email"
//                 required
//                 value={form.email}
//                 onChange={onInputChange}
//               />
//             </div>
//           </label>
//           {!isValidEmail && <span
//  className="warning">O seu email não tem um formato válido</span>}
//         </div>
//         <div className="form-input">
//           <label htmlFor="telephoneInput">
//             Telefone
//             <div>
//               <input
//                 id="telephoneInput"
//                 name="telephoneInput"
//                 type="text"
//                 placeholder="DDD + Telefone"
//                 required
//                 value={form.telephone}
//                 onChange={onInputChange}
//               />
//             </div>
//           </label>
//           {!isValidTelephone && <span
// className="warning">O seu número de telefone deve conter 2 dígitos de DDD + o seu número</span>}
//         </div>
//         <button
//           className="submit-button"
//           type="submit"
//           disabled={buttonDisabled}
//           onClick={onButtonClick}
//         >
//           Inscrever-se
//         </button>
//       </form>
//     </section>
//   );
// }
