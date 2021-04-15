import styles from './Preview.module.scss';
import React  from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const Preview = ({markdown}) =>{
    let rendered = marked(markdown);
    console.log(rendered);
    return <div id="preview" className={styles.markdown} dangerouslySetInnerHTML={{'__html':rendered}}/>
}
export default Preview;