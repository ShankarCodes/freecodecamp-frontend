import styles from './MarkdownPreviewer.module.scss';
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Fullpage from './Fullpage';
import GridLayout from './GridLayout';
import Pane from './Pane';
import Textarea from './Textarea';
import Preview from './Preview';
import {useState} from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import { saveAs } from 'file-saver';
import marked from 'marked';
const MarkdownPreviewer = () =>{
    const [markdownText, setMarkdownText] = useState('');
    const [mdExpanded, setmdExpanded] = useState(false);
    const [rnExpanded, setrnExpanded] = useState(false);
    useEffect(()=>{
        axios
            .get(process.env.PUBLIC_URL + '/sample.md')
            .then(response=>{
                setMarkdownText(response.data);
            })
            .catch(error=>{
                setMarkdownText('Error obtaining sample markdown!');
                console.log(error);
            });
    }, []);

    const saveText = (event, text) =>
    {
        event.preventDefault();
        let blob = new Blob([text],
            {
                type: 'text/plain;charset=utf-8;'
            });
        saveAs(blob, `${markdownText.split('\n',1)[0].replace(/[^\w\s]/gi, '').trim().replace(/ /g,'_')}.md`);
    }
    const saveRendered = (event) =>{
        event.preventDefault();
        let content = `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
.markdown {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  color: #0c4842;
  height: 100%;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  color: #0c4842;
  vertical-align: middle;
}
.markdown h1 {
  font-weight: 720;
  font-size: 50px;
}
.markdown h2 {
  font-weight: 600;
  font-size: 44px;
}
.markdown h3 {
  font-weight: 480;
  font-size: 38px;
}
.markdown h4 {
  font-weight: 360;
  font-size: 32px;
}
.markdown h5 {
  font-weight: 240;
  font-size: 26px;
}
.markdown h6 {
  font-weight: 120;
  font-size: 20px;
}
.markdown h1:after {
  display: block;
  content: "";
  border-bottom: 2px solid turquoise;
  border-radius: 10px;
  margin-top: 0.09em;
  width: 100%;
}
.markdown code {
  background-color: #f1fbfa;
  border-radius: 5px;
  display: inline-block;
  padding: 0.2em;
  border: 1px solid #c4f5f0;
  margin: 0.5em 0 0.5em 0;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  box-shadow: 0 2px 4px #c4f5f0;
}
.markdown tr {
  width: 100%;
  margin: 0;
}
.markdown tr:nth-child(odd) {
  background-color: #c4f5f0;
}
.markdown tr:nth-child(even) {
  background-color: #6ce7db;
}
.markdown th {
  background-color: #0c4842;
  color: #f0fcfb;
}
.markdown td {
  padding: 0.8em;
  border-bottom: 1px solid turquoise;
}
.markdown table {
  margin: 0.5em 0 0.5em 0;
  border-top: 1px solid turquoise;
  border-bottom: 1px solid turquoise;
  padding: 0.5em;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
.markdown blockquote {
  background-color: #d5e4e3;
  border-left: 0.5em solid gray;
  padding: 0.5em;
}
    </style>
    
    <title>
        ${markdownText.split('\n',1)[0].replace(/[^\w\s]/gi, '').trim()}
    </title>
</head>
<body>
<div class="markdown">
${marked(markdownText)}
</div>
        
        </body>
        </html>

        `;
        let blob = new Blob([content],
            {
                type: 'text/plain;charset=utf-8;'
            });
        saveAs(blob, `output.html`)
    }
    return<>
    <Navbar/>
    <Fullpage center={false}>
        <GridLayout expanded={mdExpanded||rnExpanded}>
          {!rnExpanded
        ?<Pane>
            <Toolbar>
                <h1>
                    Input
                </h1>
                <div>
                <button onClick={(event)=>saveText(event,markdownText)} className="btn-left">
                    Save
                </button>
                <button onClick={(event)=>{setMarkdownText('')}}> 
                  Clear
                </button>
                <button className="btn-right" onClick={()=>{setmdExpanded(!mdExpanded)}}>
                  <i class={mdExpanded?"fas fa-compress":"fas fa-expand"}></i>
                </button>
                </div>
            </Toolbar>
            <Textarea textid={'editor'} handleOnChange={(event)=>{setMarkdownText(event.target.value)}} value={markdownText}/>
        </Pane>
        :null
          }
        {!mdExpanded
        ?<Pane>
            <Toolbar>
            <h1>Preview</h1>
               <div>
                <button onClick={(event)=>saveRendered(event)} className="btn-left">
                    Save
                </button>
                <button className="btn-right" onClick={()=>{setrnExpanded(!rnExpanded)}}>
                  <i class={rnExpanded?"fas fa-compress":"fas fa-expand"}></i>
                </button>
              </div> 
            </Toolbar>
            <Preview markdown={markdownText}/>
        </Pane>
        :null
        }
        </GridLayout>
    </Fullpage>
    </>
}
export default  MarkdownPreviewer;