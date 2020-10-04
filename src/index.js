import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { TypingDNA } from './typingdna'
import https from 'https'
import querystring from 'querystring'
// import TypingDnaClient from 'typingdnaclient';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const TypingDNALogin = (props) => {
  // const typingDnaClient = new TypingDnaClient('54999e43b3689f784d9f367844aaed96', '16e84a1d598dd27f366fb951a4c7120b');
  // typingDnaClient.
  const [email, setEmail] = useState('')
  const tdna = new TypingDNA()
  let tp = ''
  let currentQuote = ''
  useEffect(() => {
    tdna.start()
    tdna.addTarget('email')
    return () => {
      tdna.stop()
    }
  }, [])
  console.log(tdna)

  const signup = async (data) => {
    let apiKey = ''
    let apiSecret = ''
    var myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Basic '
    )

    var formdata = new FormData()
    formdata.append(
      'tp',
      data.tp
    )

    var requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }

    fetch('https://api.typingdna.com/save/testUser2', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
    // let response = await fetch('https://api.typingdna.com/save/testuser2', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': 'Basic ' + new Buffer(apiKey + ':' + apiSecret).toString('base64'),
    //   },
    //   body: querystring.stringify(data)
    // })
    // console.log(response.json())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    tp = tdna.getTypingPattern({ type: 1, extended: true, length: 300 })
    console.log(tp)
    let base_url = 'api.typingdna.com'
    let apiKey = '54999e43b3689f784d9f367844aaed96'
    let apiSecret = '16e84a1d598dd27f366fb951a4c7120b'
    let data = {
      tp: tp
    }
    signup(data)
    // var options = {
    //   hostname: base_url,
    //   port: 443,
    //   path: '/save/testuser',
    //   method: 'POST',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Cache-Control': 'no-cache',
    //     'Authorization': 'Basic ' + new Buffer(`${apiKey}:${apiSecret}`).toString('base64'),
    //   },
    // };
    // let responseData = '';
    // let req = https.request(options, function(res){
    //   res.on('data', function(chunk){
    //     responseData += chunk;
    //   });
    //   res.on('end', function(){
    //     console.log(JSON.parse(responseData));
    //   })
    // });
    // req.on('error', function(e){
    //   console.error(e);
    // });
    // req.write(
    //   querystring.stringify(data)
    // );
    // req.end();
    console.log(email)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='text' />
      <input type='submit' value='submit' />
    </form>
  )
}
