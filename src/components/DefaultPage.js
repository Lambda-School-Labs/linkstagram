import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { UncontrolledCarousel } from 'reactstrap';
import { Button } from 'reactstrap';

import Header from './Header';

class DefaultPage extends Component {
  render() {
    return (
      <div> 
          <Header/>
          
          <h1> LINKSTAGRAM </h1>
          <Button>
          <Link to="/Billing">BUY NOW </Link>
          </Button>
        </div>
      );
    //TODO
    
    //ADD carousel- of???
    
    }
  }
export default withRouter(DefaultPage);