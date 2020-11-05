import React from 'react'

export default function ButtonComponent({color}) {
    return (
        <div>
                  <button style={{backgroundColor:color,color:"white"}} className="ui button">Follow</button>
        </div>
    )
}

ButtonComponent.defaultProps = {
    color : "gray"
  }
