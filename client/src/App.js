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
import './Navbar.css'

class App extends Component {
  state = {
    sideDrawerOpen:false,
    crossBtn: false    
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
      <SideDrawer show={this.state.sideDrawerOpen} closeClick={this.backDropClickHandler}/>
      {backDrop}
      <div className="root__container">
        <Home />
        <Menu />
        <About />
        <div className="contactAndMap">
          <Contact />
          <Map />
        </div>
        <Footer />
      </div>
    </>
  )}

}
export default App

