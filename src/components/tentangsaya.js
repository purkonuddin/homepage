import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
const my_avatar = "https://avatars.githubusercontent.com/u/44079569?s=400&u=ba92b14af2ec1f8a16715e45e0c50b76c4c4dfff&v=4";

class TentangSaya extends Component {
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
    const isTablet = this.state.windowWidth < this.mediaQuery.desktop
    const isPhone = this.state.windowWidth < this.mediaQuery.tablet
    const imgUrl = isTablet
      ? '156px'
      : '256px'
    const contentList = isPhone ? "content-list2" : "content-list"

    return(
      <div className="content-body">
        <Grid className="content-grid2">
        <Cell col={3}>
          <div className={contentList}>
            <img
              src={my_avatar}
              alt="avatar"
              width={imgUrl}
               />
            <h4>Purkonuddin</h4>
            <hr style={{borderTop: '3px solid #833fb2'}}/>
            <p>Fullstuck Developer</p> 
          </div>
        </Cell>

        <Cell className="resume-right-col" col={9}>
            <h3>P :)</h3>
            <p>Seorang <i>Fullstack Developer</i>, bahasa pemrograman yang sering saya gunakan adalah Node Js, React dan React Native.</p>
            <p>selain di pemrograman saya juga freelancer pada bidang interior khususnya <i>Mebel Manufacture</i> dan telah mengerjakan cukup banyak project untuk perusahaan kontaktor interior dan sipil</p>
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h3>Pendidikan</h3>
            <Grid>
              <Cell col={4}>
                <p>0000 - 0000</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>Penjualan - SMK Pelita Ciampea</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>0000 - 0000</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>AMIK BSI - Manajement Informatika</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>0000 - 0000</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>Arkademy Tech Academy - Fullstack Developer</h5>
              </Cell>
            </Grid>
        </Cell>
        </Grid>
      </div>
    )
  }

}

export default TentangSaya;
