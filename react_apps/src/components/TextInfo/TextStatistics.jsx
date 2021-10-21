import {React} from 'react';
import List from './List';
import Row from './Row';

const TextStatistics = ({text}) =>{
    let all_chars = 0;
    let whitespaces = 0;
    let chars_no_whitespaces = 0;
    let words = text.trim().split(/\s+/);
    let wordmap = new Map();
    words.forEach(word => wordmap.set(word.toLowerCase(), (wordmap.get(word.toLowerCase()) || 0) + 1));
    for(let c of text){
        all_chars++;
        if(c === ' ')
            whitespaces++;
    }
    let arr = [];
    wordmap.forEach((value, key) => arr = arr.concat({value, key}))
    arr.sort((a, b) => a.value > b.value?-1: b.value > a.value? 1:0)
    chars_no_whitespaces = all_chars - whitespaces;

    let data = [
        {
            key: 'Characters',
            value: all_chars
        },
        {
            key: 'Characters(no whitespace)',
            value: chars_no_whitespaces
        },
        {
            key: 'Whitespaces',
            value: whitespaces
        },
        {
            key: 'Words',
            value: words.length
        },
        {
            key: 'Unique words',
            value: wordmap.size
        },
        {
            key: 'Lines',
            value: text.split('\n').length
        }
    ]
    return <div>
        <ul>
            <Row label="Info" labelSize='1.6em'>
                <List data = {data} />
            </Row>
            <Row label="Top words" labelSize='1.6em'>
                <List data = {arr.slice(0,10)}/>
            </Row>
        </ul>
    </div>
}
export default TextStatistics;