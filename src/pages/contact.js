

import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/layout2'
import { Helmet } from 'react-helmet'

import "../style/main.scss"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      
      <Layout>
 <Helmet>
        <title>Vyntrade  Contact</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>



        <div >
        

          
            <div >
            <h1>Contact Us</h1>
            <div className='contact'>
            <div>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    <p>Name</p>
                  </label>
                  <div className="control">
                    <input
                      className="contact-input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                   <p> Email</p>
                  </label>
                  <div className="control">
                    <input
                      className="contact-input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    <p>Message</p>
                  </label>
                  <div className="control">
                    <textarea
                      className="contact-input"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div >
                  <button className="primary-button" style={{margin: 0, textSize: "2em"}} type="submit">
                    Send
                  </button>
                </div>
              </form>
              </div>
              <div>
                <div>
                <p>Dan Nelson</p> 
                <p>Cell: +1 (813) 335 1295</p>
                <p>Email: dnelson@vyntrade.com</p>
                </div><br/>

                <div>
                



                <p>Steven M. Rowland</p> 
                <p>Cell: + 1 (240) 994 7565</p>
                <p>Email: srowland@vyntrade.com</p>
                </div>
     


               
              </div>
              </div>
            </div>
        
          
        </div>
      </Layout>
    )
  }
}