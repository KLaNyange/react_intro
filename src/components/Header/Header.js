import img from "../../assets/img/img-1.jpg"
function Header(){
    let prenom = ''
    return(
        <div>
            <h1>Hello {prenom}</h1>
            <img src="./images/img-1.jpg" alt="" />
            <img src={img} alt="" />
        </div>
    )
}

export default Header;