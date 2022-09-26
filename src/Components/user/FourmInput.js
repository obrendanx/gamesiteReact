import React from 'react'

function FourmInput() {
  return (
    <div className='fourm_input_box'>
        <form>
            
            <label for="title">Title: </label><br></br>
            <input type="text" id="title" name="title" /><br></br>
            <label for="message">Message: </label><br></br>
            <input type="text" id="message" name="message" /><br></br>

        </form>
    </div>
  )
}

export default FourmInput