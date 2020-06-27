import React from 'react'
// THIS COMPONENT IF DOR DROPDOWN 
export default function Category(props) {
    return (
    <option value={props.categoryName.id}>{props.categoryName.name}</option>
    )
}
