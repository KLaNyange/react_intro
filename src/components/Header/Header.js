import img from "../../assets/img/img-1.jpg"
function Header(){
    let prenom = ''
    return(
        <div>
            <h1>Hello {prenom}</h1>
            <img src="./images/img-1.jpg" alt="" /> {/* Sans import avec l'image dans le public */}
            <img src={img} alt="" /> {/* Avec l'import avec l'image dans SRC*/}
            
        </div>
    )
}

export default Header;