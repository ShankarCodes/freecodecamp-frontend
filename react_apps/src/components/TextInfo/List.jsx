import React from 'react';
import Row from './Row';

const List = ({data}) => {
    return <ul>
        {data.map(({key, value})=><Row label={key} value={value} key={key}/>)}
    </ul>
}
export default List;