import React from 'react'
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Bilal Ahmed</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat