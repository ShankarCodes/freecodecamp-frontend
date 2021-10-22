import styles from './MarkdownPreviewer.module.scss';
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Fullpage from './Fullpage';
import GridLayout from './GridLayout';
import Pane from './Pane';
import Textarea from './Textarea';
import Preview from './Preview';
import { useState } from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import { saveAs } from 'file-saver';
import marked from 'marked';

const MarkdownPreviewer = () => {
    const [markdownText, setMarkdownText] = useState('');
    const [mdExpanded, setmdExpanded] = useState(false);
    const [rnExpanded, setrnExpanded] = useState(false);
    const [template, setTemplate] = useState('');
    useEffect(() => {
        axios
            .get(process.env.PUBLIC_URL + '/sample.md')
            .then(response => {
                setMarkdownText(response.data);
            })
            .catch(error => {
                setMarkdownText('Error obtaining sample markdown!');
                console.log(error);
            });
        axios
            .get(process.env.PUBLIC_URL + '/export_template.html')
            .then(response => {
                setTemplate(response.data);
            })
            .catch(error => {
                setTemplate('Error obtaining sample export template!');
                console.log(error);
            });
    }, []);

    const saveText = (event, text) => {
        event.preventDefault();
        let blob = new Blob([text],
            {
                type: 'text/plain;charset=utf-8;'
            });
        saveAs(blob, `${markdownText.split('\n', 1)[0].replace(/[^\w\s]/gi, '').trim().replace(/ /g, '_')}.md`);
    }
    const saveRendered = (event) => {
        event.preventDefault();
        let title = markdownText.split('\n', 1)[0].replace(/[^\w\s]/gi, '').trim()
        let content = template
            .replace(
                '<title></title>',
                `<title>${title}</title>`
            )
            .replace(
                '<div class="markdown"></div>',
                `<div class="markdown">${marked(markdownText)}</div>`
            );


        let blob = new Blob([content],
            {
                type: 'text/plain;charset=utf-8;'
            });
        saveAs(blob, `${title}.html`)
    }
    return <>
        <Navbar />
        <Fullpage center={false}>
            <GridLayout expanded={mdExpanded || rnExpanded}>
                {!rnExpanded
                    ? <Pane>
                        <Toolbar>
                            <h1>
                                Input
                            </h1>
                            <div>
                                <button onClick={(event) => saveText(event, markdownText)} className="btn-left">
                                    Save
                                </button>
                                <button onClick={(event) => { setMarkdownText('') }}>
                                    Clear
                                </button>
                                <button className="btn-right" onClick={() => { setmdExpanded(!mdExpanded) }}>
                                    <i class={mdExpanded ? "fas fa-compress" : "fas fa-expand"}></i>
                                </button>
                            </div>
                        </Toolbar>
                        <Textarea textid={'editor'} handleOnChange={(event) => { setMarkdownText(event.target.value) }} value={markdownText} />

                    </Pane>
                    : null
                }
                {!mdExpanded
                    ? <Pane>
                        <Toolbar>
                            <h1>Preview</h1>
                            <div>
                                <button onClick={(event) => saveRendered(event)} className="btn-left">
                                    Save
                                </button>
                                <button className="btn-right" onClick={() => { setrnExpanded(!rnExpanded) }}>
                                    <i class={rnExpanded ? "fas fa-compress" : "fas fa-expand"}></i>
                                </button>
                            </div>
                        </Toolbar>
                        <Preview markdown={markdownText} />
                    </Pane>
                    : null
                }
            </GridLayout>
        </Fullpage>
    </>
}
export default MarkdownPreviewer;