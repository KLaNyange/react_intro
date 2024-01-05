import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import Header from "./components/Header/Header.js"
import DemoComponent from './components/DemoComponent/DemoComponent.js';
import DemoComponent2 from './components/DemoComponent2/DemoComponent2.js';

function App() {

  let age = 2
  // let pageContent;
  // if (age >= 18) {
  //   pageContent = <DemoComponent/>
  // }else{
  //   pageContent = (
  //     <div>
  //           <h1>Hello tu es mineur</h1>
  //       </div>
  //   )
  // }
  let pageContent = age >= 18 ? <DemoComponent/> : <DemoComponent2/>
  return (
    <div className="App">
      {/* <Header/> */}
      <NavBar />
      {/* {age}
      {pageContent} */}
      {age >= 18 && <DemoComponent/> }
      {age < 18 && <DemoComponent2/> }
      
      {age >= 18 ? <DemoComponent/> : <DemoComponent2/>}
    </div>
  );
}

export default App;
