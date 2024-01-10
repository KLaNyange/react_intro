import img from "../../assets/img/img-1.jpg" 
import { useState } from "react"
function Header(){
    // const [prenom, setPrenom] = useState("Alixe")
    const stat = useState(0)
    const [state, setState] = useState(0)
    // console.log(state);
    // let prenom = 'Quentin'
    // let changeName =  () => {
    //     if (prenom == 'Alixe') {
    //         setPrenom('Quentin')
    //     }else{
    //         setPrenom('Alixe')
    //     } 
    //     console.log(prenom);
    // }
    return(
        <div>
            {/* {stat[0] = 'Alixe'}
            {state} */}
            {/* <img src="./images/img-1.jpg" alt="" /> Sans import avec l'image dans le public */}
            {/* <img src={img} alt="" /> Avec l'import avec l'image dans SRC */}
            {/* <button onClick={changeName}>Change prenom</button> */}
            {/* <h1>Hello {prenom}</h1> */}
        </div>
    )
}

export default Header;