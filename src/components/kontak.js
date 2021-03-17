import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe'

class Kontak extends Component {
  constructor() {

    super();

    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };

    this.state = {
      windowWidth: document.body.clientWidth,
      windowHeight:document.body.clientHeight,
      btnkirim:'kirim',
      pesanError:'',
      pesanSuccess:''
    };
  } 

  contactRef = React.createRef()
  errormsgRef= React.createRef()

  validateEmail=(mail)=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
      return (true)
    }
      return (false)
  }

  handleFormContact =(e)=> {
    this.setState({btnkirim:'mengirim...'})

    e.preventDefault()
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzk_7Q7X_pKZSaUOxSEFtflYLUYbqoSyN1opYG7c8ZmbyE1OiYyFmgM2I2g4Pe399I/exec'
    const form = document.forms['submit-to-google-sheet']
    const fields = this.contactRef.current.children;
    const nama = fields[0].value;
    const email = fields[1].value;
    const pesan = fields[2].value;


    if(nama === '' || email === '' || pesan === ''){
      this.setState({pesanError:'Please Fillout the fields!'})
      this.setState({btnkirim:'Kirim'})
    }else if(!this.validateEmail(email)){
      this.setState({pesanError:'You have entered an invalid email address!'})
      this.setState({btnkirim:'Kirim'})
    }else {
      this.setState({pesanError:''})
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{ 
          this.setState({btnkirim:'Kirim'})
          this.setState({pesanSuccess:'terimakasih, pesan telah dikirim!'})
          form.reset()
          setTimeout(() => {
            this.setState({pesanSuccess:''})
          }, 5000);
        })
        .catch(error => {
          this.setState({btnkirim:'Kirim'})
          console.log(error);
          this.setState({pesanError:'pesan tidak terkirim!, pastikan anda terkoneksi internet'})
      })
    } 

    
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({windowWidth: document.body.clientWidth})
      this.setState({windowHeight: document.body.clientHeight})
    });
  }

  render() {
    const isTablet = this.state.windowWidth <= this.mediaQuery.tablet
    const isPhone = this.state.windowWidth <= this.mediaQuery.phone
    const frameWidth = isTablet ? this.state.windowWidth : '450px'
    const frameHeight = isPhone ? this.state.windowHeight : '400px'
    const framePosition = isTablet ? 'absolute' : 'relative';

    return(
      <div className="content-body">
        <Grid className="content-grid">
          <Cell col={5}>
          <h3>Hubungi Saya</h3>
          <hr/>
          <div className="content-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square kecil " aria-hidden="true"/>
                  085-779-9191-12
                </ListItemContent>
              </ListItem> 
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope kecil" aria-hidden="true"/>
                  purkonud2508@bsi.ac.id
                </ListItemContent>
              </ListItem> 
            </List>
            <div>
              <form name="submit-to-google-sheet" className="contact-form">
                <div className="cf-label">
                  <label>Nama</label>
                  <label>Email</label>
                  <label className="lbl-pesan">Pesan</label>
                </div>
                <div className="cf-input" ref={this.contactRef}>
                  <input name="nama" type="text" placeholder="mr. bucin" required/>
                  <input name="email" type="email" placeholder="myemail@bucin.com" required/>
                  <textarea name="pesan" type="textarea" placeholder="purkonuddin, is it your's ..." required/>
                </div>
                <div className="cf-pesan">
                  <span className="pesan-error" ref={this.errormsgRef}>{this.state.pesanError}</span>
                  <span className="pesan-success">{this.state.pesanSuccess}</span>
                </div>
                <div className="cf-bottom">
                  <button type="button" onClick={(e)=>this.handleFormContact(e)}>{this.state.btnkirim}</button>
                </div>
              </form>
            </div>
          </div>
          </Cell>

          <Cell col={7}>
            <h3>Alamat Rumah</h3>
             <p  className="content-list"></p>
             {/* <div className="content-list"> */}
             <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.8454274430698!2d106.6220100818029!3d-6.599393921515314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15482e3e5f22f6b4!2sPP%20Daarutta&#39;lim!5e0!3m2!1sid!2sid!4v1613236245218!5m2!1sid!2sid"
                width={frameWidth}
                height={frameHeight}
                id="myId"
                className="myClassname"
                display="initial"
                position={framePosition}
                allowFullScreen/>
            {/* </div> */}
          </Cell> 
        </Grid> 
      </div>
    )
  }
}

export default Kontak;
