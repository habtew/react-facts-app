import img from '../img/reactjs-icon.png'
export default function Navbar(){
    return (
        <div className="Navbar">
            <img src={img} alt="icon"/>
            <h1>ReactFacts</h1>
            <p>React Course - Project 1</p>
        </div>
    )
}