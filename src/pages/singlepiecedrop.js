import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Dropzone from 'react-dropzone'
import { Preview } from 'react-dropzone-uploader';


const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
    }

/*
POST Uploader code
const getUploadParams = async ({ meta: { name } }) => {
  const { fields, uploadUrl, fileUrl } = await myApiService.getPresignedUploadParams(name)
  return { fields, meta: { fileUrl }, url: uploadUrl }
}

Switch info

import Switch from 'react-switch'

const handleChange = nextChecked => {
  setChecked(nextChecked)
}

<Switch 
      onChange={handleChange}
        />

*/


const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
    }


    const registerUser = async event => {
      event.preventDefault()
  
      const res = await fetch(
        'https://hooks.zapier.com/hooks/catch/123456/abcde',
        {
          body: JSON.stringify({
            name: event.target.name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
    }






export default function SingleDroPage() {

  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {preview: URL.createObjectURL(file)})))
    }
  })

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          className={styles.img2}
        />
      </div>
    </div>
  ))

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
    
  return (
    <div className={styles.container}>
      <Head>
        <title>Mint NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.title}>So Close</div>
        <div className={styles.container1}>
          <h1><a href="/Instadroppage">&larr; <i>"Oh snap, I wanted to drop many"</i></a></h1>


<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}>
            {({getRootProps, getInputProps}) => (
            <section className={styles.card}>
              <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside className={styles.thumbContainer}>
                {thumbs}
              </aside>
            </section>
  )}
</Dropzone>
<br></br>
<form onSubmit={registerUser}>
  <div className={styles.bWQTJz}>
      <div className={styles.row}>
        <div className="col-25">  
          <label htmlFor="name">Name: </label>
        </div>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Leonardo da Vinci" required />
      </div>
      <hr></hr>
      <div className={styles.row}>
        <div className="col=25">
          <label htmlFor="description">Description: </label>
        </div>
            <textarea id="description" type="text" autoComplete="text" required /><br></br>
      </div>
      <hr></hr>
      <label htmlFor="royal">Royalties: &rarr;</label>
      <input type="range" id="royal" name="vol" min="0" max="50" /><br></br>
      <button type="submit">Submit</button>
      </div>
    </form>

          </div>
      </main>

      <footer className={styles.footer}>
      <a href={"/"}><img src="/home.svg" alt="Home Logo" className={styles.logo} /></a>
      <a href={"https://github.com"}><img src="/githublogo.png" alt="Github Icon" className={styles.logo} /></a>
      <a href={"https://discord.com"}><img src="/discord.svg" alt="Discord Icon" className={styles.logo} /></a>
      </footer>
    </div>
  )
}
