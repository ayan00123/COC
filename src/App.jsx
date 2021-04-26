import React,{Component} from "react";
import Navigation from "./Navigation";
import Flix from "./Flix";
class App extends Component{
    render(){
    return(
        <>
        <div className="bacimg">
            <Navigation/>
            <div className="coclogo">
            <img src="https://cdn.supercell.com/supercell.com/210416113614/all/themes/supercell/img/18/main_logo_clashofclans.png" alt=""/>
            </div>
        </div>
        <Flix/>
        </>
    )
}
}
export default App;