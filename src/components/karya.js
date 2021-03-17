import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';
// const bgUrl = 'white';// url("https://nyu-dataservices.github.io/Intro-Git-GitHub/imgs/github-logo.png") no-repeat fixed center'


class Karya extends Component {
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
    const isTablet = this.state.windowWidth < this.mediaQuery.tablet
    const imgUrl = isTablet
      ? '100px'
      : '256px'

    return(
      <div className="content-body">
        <Grid className="content-grid">
          <Cell col={12}>
            <h3>Portfolio</h3>
            <hr /><br />
            <div className="projects-grid">

              {/* Project 1 */}
              <Card shadow={5} className="wrap-karya" >
                <p className="karya-p"><a href="http://3.92.225.2:8001/api-docs/">Backend - Ecommerce</a></p>
                <div><img alt="images" src={'https://user-images.githubusercontent.com/44079569/107855204-8523f800-6e53-11eb-8489-b5c9d4365d93.png'} width={imgUrl}/></div>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} className="wrap-karya" >
                <p className="karya-p">Mebel - Kitchen set</p>
                <div><img alt="images" src={'https://user-images.githubusercontent.com/44079569/107855203-848b6180-6e53-11eb-8523-f42225933d66.jpg'} width={imgUrl}/></div>
              </Card>

              {/* Project 3 */}
              <Card shadow={5} className="wrap-karya" >
                <p className="karya-p">React Native - UMKM</p>
                <div><img alt="images" src={'https://user-images.githubusercontent.com/44079569/107855201-835a3480-6e53-11eb-86ac-a159a6d77618.jpg'} width={imgUrl}/></div>
              </Card>

          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Karya;
