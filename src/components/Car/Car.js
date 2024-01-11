import './Car.css'

function Car(props) {
    return (
        <div className="car">
            <h1>{props.data.name}</h1>
            <h1>{props.data.year}</h1>
            <div className="wheels">
                <div className='wheel'></div>
                <div className='wheel'></div>
            </div>
        </div>
        // <div className="cars">
        //     <div className="car">
        //         <h1>BMW</h1>
        //         <h1>2005</h1>
        //     </div>
        //     <div className="car">
        //         <h1>Audi</h1>
        //         <h1>1999</h1>
        //     </div>
        //     <div className="car">
        //         <h1>Mercedes</h1>
        //         <h1>2002</h1>
        //     </div>
        //     <div className="car">
        //         <h1>Dacia</h1>
        //         <h1>2012</h1>
        //     </div>
        // </div>
        // <div className="cars">
        //     <div className="car">
        //         <h1>{data[0].name}</h1>
        //         <h1>{data[0].year}</h1>
        //     </div>
        //     <div className="car">
        //         <h1>{data[1].name}</h1>
        //         <h1>{data[1].year}</h1>
        //     </div>
        //     <div className="car">
        //         <h1>{data[2].name}</h1>
        //         <h1>{data[2].year}</h1>
        //     </div>
        //     <div className="car">
        //         <h1>{data[3].name}</h1>
        //         <h1>{data[3].year}</h1>
        //     </div>
        // </div>
        
    )
}
export default Car