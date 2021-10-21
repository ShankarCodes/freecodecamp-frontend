import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from './Quotebox.module.scss';
import uniqueId from 'lodash.uniqueid';

const copyToClipBoard = (txt) =>{
navigator.clipboard.writeText(txt).then(function() {
    console.log('Copied')
});
}


const Quotebox = ()=>{
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")
    const [reload, setReload] = useState(true)
    const [quotes, setQuotes] = useState([])

    useEffect(()=>{
        axios
            .get(process.env.PUBLIC_URL + '/quotes.json')
            .then(response=>{
                setQuotes(response.data["quotes"]);
                console.log('Got the quotes')
                let quote = response.data["quotes"][Math.floor(Math.random()*response.data["quotes"].length)];
                console.log(quote)
                if(quote){
                    console.log('Setting text and author')
                    setText(quote["content"]);
                    setAuthor(quote["author"]);
                }
                })
            .catch(err=>{
                setText('Error getting quotes')
            })
    },[]);

    useEffect(()=>{
        let quote = quotes[Math.floor(Math.random()*quotes.length)];
        if(quote){
        setText(quote["content"]);
        setAuthor(quote["author"]);
        }
    },[reload]);
        return <div className={styles.container}>
        <div id="quote-box" className={styles.card}>
            <div id="text" className={styles.quoteText} key={uniqueId('quote-')}>
                {text}
            </div>
            <div id="author" className={styles.quoteAuthor} key={uniqueId('author-')}>
                {author}
            </div>
            <hr/>
            <div className={styles.btns}>
                <div className={styles.share}>
                    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text+'\n—'+author)}&hashtags=quotes`}>
                        <i className={`fab fa-3x fa-twitter-square ${styles.btn} ${styles.twitterBtn}`}></i>
                    </a>
                    <a href="#doesnothing">
                        <i className={`fab fa-facebook-square fa-3x ${styles.btn} ${styles.facebookBtn}`}></i>
                    </a>
                    <a href="#copy">
                        <i className={`far fa-copy fa-3x ${styles.copyBtn}`} onClick={()=>{copyToClipBoard(text+'\n—'+author)}} ></i>
                    </a>
                </div>
                <a id="new-quote" href="new" onClick={(e)=>e.preventDefault()}>
                    <i className={`fas fa-sync fa-3x ${styles.btn} ${styles.newBtn}`} onClick={()=>setReload(!reload)}></i>
                </a>
            </div>
        </div>
        </div>
}

export default Quotebox;