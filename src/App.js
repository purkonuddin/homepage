import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import Utama from './components/utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'; 
import { AiFillHome, AiOutlineUser, AiOutlineComment, AiOutlineShop} from "react-icons/ai";

class App extends Component {
  constructor() {

    super();

    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };

    this.state = {
      windowWidth: document.body.clientWidth
    };
  }

  componentDidMount() { 
    window.addEventListener('resize', () => {
      this.setState({windowWidth: document.body.clientWidth})
    });
  }

  render() {
    return (
      <div style={{
        width: this.state.windowWidth > this.mediaQuery.phone
          ? '50%'
          : '100%',
        //more styling :)
      }}>
        {/* <!--  contents --> */}
        <div className="demo-big-content">  
           <Layout>
              <Header className="header-color" title="Portfolio" scroll>
                  <Navigation>
                      <Link to="/beranda">BERANDA</Link>
                      <Link to="/tentangsaya">PROFILE</Link>
                      <Link to="/karya">PORTPOLIO</Link>
                      <Link to="/kontak">KONTAK</Link>
                  </Navigation>
              </Header>
              <Drawer title="Portfolio">
                  <Navigation>
                  <Link to="/beranda"><AiFillHome/> Beranda</Link>
                  <Link to="/tentangsaya"><AiOutlineUser/> Tentang Saya</Link>
                  <Link to="/karya"><AiOutlineShop/> Karya</Link>
                  <Link to="/kontak"><AiOutlineComment/> Kontak</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" /> 
                     {/* //your routes here  */}
                   <Utama /> 
              </Content>
          </Layout> 
        </div>
        {/* end content */}
      </div> 
    );
  }
}

export default App; 