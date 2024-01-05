import "./NavBar.css";

function NavBar(){
    let nav = ['Home', 'Contact', 'About']
    function navigation(destination){
        console.log(`Navigation vers ${destination}`);
    }
    return(
    <div className="navbar">
        <ul>
            <li onClick={()=>navigation('Home')}>Home</li>
            <li onClick={()=>navigation('Contact')}>Contact</li>
            <li onClick={()=>navigation('About')}>About</li>
            {/* {nav.map((item, index)=> <li key={index} onClick={()=>navigation(item)}>{item}</li>)} */}
        </ul>
    </div>
    )
}

export default NavBar;


