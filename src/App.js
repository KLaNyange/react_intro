import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import Header from "./components/Header/Header.js"
import DemoComponent from './components/DemoComponent/DemoComponent.js';
import DemoComponent2 from './components/DemoComponent2/DemoComponent2.js';
import Car from './components/Car/Car.js';
import { useState } from 'react';


function App() {

  let age = 2
  let pageContent;
  let userSubscribed = true
  // if (userSubscribed == true) {
  //   pageContent = <DemoComponent/>
  // }else{
  //   pageContent = <DemoComponent2/>
  // }
  pageContent = userSubscribed === true ? <DemoComponent2 /> : <DemoComponent />
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
  // let pageContent = age >= 18 ? <DemoComponent/> : <DemoComponent2/> // condition ternaire, on met la condition suivi d'un "?" puis le resultat de si la condition est true suivi de ":" pour  à la fin rajouter le resultat de si la condition est false
  const [cars, setCars] = useState([
    {
      id:1,
      name: "BMW",
      year: 2005
    },
    {
      id:2,
      name: "Audi",
      year: 1999
    },
    {
      id:3,
      name: "Mercedes",
      year: 2002
    },
    {
      id:1,
      name: "Dacia",
      year: 2012
    },
  ])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className='cars'>
        {/* <Car/> */}
        {/* <Car data ={cars}/> */}
        {cars.map((item, index)=> (
          <Car key={index} name = {item.name} year = {item.year}/>
          // <Car key={item.id} name = {item.name} year = {item.year}/>
        ))}
      </div>
      {/* {age} */}
      {pageContent}
      {/* {age >= 18 && <DemoComponent/> } La on met la condition ET si elle est vrai elle return le component */}

      {/* {age < 18 && <DemoComponent2/> } La on met la condition ET si elle est vrai elle return le component */}

      {/* {age >= 18 ? <DemoComponent/> : <DemoComponent2/>} condition ternaire, on met la condition suivi d'un ? puis le resultat de si la condition est true suivi de : pour  à la fin rajouter le resultat de si la condition est false */}
    </div>
  );
}

export default App;
