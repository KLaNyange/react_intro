import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import Header from "./components/Header/Header.js"
import DemoComponent from './components/DemoComponent/DemoComponent.js';
import DemoComponent2 from './components/DemoComponent2/DemoComponent2.js';

function App() {

  let age = 2
  // let pageContent;
  // if (age >= 18) { //condition comme vous en avez deja fait
  //   pageContent = <DemoComponent/>
  // }else{
  //   pageContent = (
  //     <div>
  //           <h1>Hello tu es mineur</h1>
  //       </div>
  //   )
  // }
  let pageContent = age >= 18 ? <DemoComponent/> : <DemoComponent2/> // condition ternaire, on met la condition suivi d'un "?" puis le resultat de si la condition est true suivi de ":" pour  à la fin rajouter le resultat de si la condition est false
  
  return (
    <div className="App">
      {/* <Header/> */}
      <NavBar />
      {/* {age}
      {pageContent} */}
      {age >= 18 && <DemoComponent/> } {/* La on met la condition ET si elle est vrai elle return le component*/}
      
      {age < 18 && <DemoComponent2/> } {/* La on met la condition ET si elle est vrai elle return le component*/}

      {age >= 18 ? <DemoComponent/> : <DemoComponent2/>} {/* condition ternaire, on met la condition suivi d'un ? puis le resultat de si la condition est true suivi de : pour  à la fin rajouter le resultat de si la condition est false */}
    </div>
  );
}

export default App;
