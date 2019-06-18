import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Map from './Map'
import Footer from './Footer'
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';

class App extends Component {
constructor(){
  super()
  this.state={
    sideDrawerOpen:false,
    crossBtn: false    
  }
}

hamburgerBtnClickHandler=()=>{
  this.setState((prevState)=>{
   return {sideDrawerOpen: !prevState.sideDrawerOpen}
  })

}
backDropClickHandler= ()=>{
  this.setState({sideDrawerOpen:false})
}
// handleCrossBtn=()=>{
//   this.setState((prevState)=>{
//     return{crossBtn:!prevState.crossBtn}
//   })
// }

  render(){
    let sideDrawer
    let backDrop

    if (this.state.sideDrawerOpen ){
     
      backDrop = <BackDrop click={this.backDropClickHandler}/>
    }
  return (
    <>
    <Navbar hamburgerClickHandler = {this.hamburgerBtnClickHandler} crossHandler={this.handleCrossBtn}/>
     <SideDrawer show={this.state.sideDrawerOpen}/>
     {backDrop}
      <div className="root__container">
        <Home />
        <Menu />
        <About />
        <Contact />
        <Map />
      </div>
      <Footer />
    </>
  )}

}
export default App

