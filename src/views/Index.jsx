import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";
import Particles from 'react-particles-js';
import './../assets/css/style.css'

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted:false
    }
  }

  componentDidMount() {
    this.setState({mounted:true});
    console.log("%cCheckout my resume here => https://drive.google.com/file/d/1h0Azd5TEccOvFmP-KCKVTAKQzewtizfe/view ", "font-size:15px");
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    if(!this.state.mounted)
    {
      return null;
    }
    else
    {
    return (
      <>
      <Particles  style={{
          "position":"absolute"
        }} params={{
	    "particles": {
	        "number": {
	            "value": 20
	        },
	        "size": {
	            "value": 1
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}/>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <Footer />
        </div>
      </>
    );
  }
}
}

export default Index;
