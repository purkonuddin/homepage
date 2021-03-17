import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
const my_avatar = "https://avatars.githubusercontent.com/u/44079569?s=400&u=ba92b14af2ec1f8a16715e45e0c50b76c4c4dfff&v=4"; 

class Beranda extends Component {
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
    return(
      <div style={{
        width: this.state.windowWidth > this.mediaQuery.phone
          ? '50%'
          : '100%',
          margin: 'auto'
      }}>
        <Grid className="beranda-grid">
          <Cell col={12}>
            <img
              src={my_avatar}
              alt="avatar"
              className="avatar-img" 
              />

            <div className="banner-text">
              <h1>Fullstuck Developer</h1>
              <hr/>
              <p>JavaScript | Node Js | React | React Native | AWS | Firebase</p>
              <div className="social-links">
                <a href="https://www.facebook.com/pur.din.3/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/Purdin86179332" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/purkonuddin" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Beranda;
