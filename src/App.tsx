import { createContext } from 'react';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/Navigation/NavBar/NavBar';
import { Main } from './components/Main/Main';

const ConfigContext = createContext<string | number>(''); // { Provider, Consumer }

// // context

// const C = () => {
//   return (
//     <span>
//       <ConfigContext.Consumer>
//         {(value) => {
//           return <b>{value}</b>;
//         }}
//       </ConfigContext.Consumer>
//     </span>
//   );
// };

// const B = () => {
//   return <C />;
// };

// const A = () => {
//   return <B />;
// };

// <ConfigContext.Provider value='blabla'>
//   <A />
// </ConfigContext.Provider>
function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
