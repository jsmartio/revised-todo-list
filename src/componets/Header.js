import React from 'react'

class Header extends React.Component{
    render(){
        return (
            <div style={hstyle}>
                Todo List
            </div>
        )
    }
}

const hstyle = {
    fontSize:30,
    backgroundColor:'#333',
    color:'#fff',
    padding:'10px',
    fontFamily:'Trebuchet, Arial, Verdana'
}

export default Header