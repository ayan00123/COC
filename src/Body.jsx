import React,{Component} from "react";
import Navigation from "./Navigation";
import Flix from "./Flix";
import Secondflix from "./Secondflix";
import Flexthree from "./Flexthree";
import Sliedimg from "./Sliedimg";
class App extends Component{
    render(){
    return(
        <>
        <div className="bacimg">
            <div className="coclogo">
            <img src="https://cdn.supercell.com/supercell.com/210416113614/all/themes/supercell/img/18/main_logo_clashofclans.png" alt=""/>
            </div>
        </div>
        <Flix/>
        <Secondflix/>
        <Flexthree/>
        <Sliedimg/>
        </>
    )
}
}
export default App;