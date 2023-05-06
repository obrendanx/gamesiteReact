import React from 'react'
import styled from '@emotion/styled'

const Form = styled.form`
  height:270px;
  width:85%;
  background:#1C1C1C;
  padding:20px;
  margin:auto;
  font-family:Roboto, sans-serif;
  border-radius:10px;
  margin-top:20px;
  margin-bottom:20px;
`

const Comment = styled.input`
  height:125px;
  width:100%;
  margin:2.5px 2.5px 7.5px 2.5px;
  padding:2.5px;
  border-radius:5px;
  border:solid 5px #F44336;
  color:#1C1C1C;
`

const Subject = styled.input`
  height:35px;
  width:60%;
  margin:2.5px;
  padding:2.5px;
  border-radius:5px;
  color:#1C1C1C;
  border: solid 5px #F44336;
`

const Label = styled.label`
  height:10px;
  padding:5px;
  color:#fff;
  margin-right:5px;
`

const Submit = styled.input`
  border:none;
  height:20px;
  width:70px;
  margin-left:2.5px;
  color:#F44336;
  border-radius:50px;
  font-weight:900;
`

function FourmInput() {
  return (
    <div>
        <Form>
            
            <Label for="title">Title: </Label><br></br>
            <Subject type="text" id="title" name="title" /><br></br>

            <Label for="message">Message: </Label><br></br>
            <Comment type="text" id="message" name="message" /><br></br>

            <Submit type="submit" label="Post" />

        </Form>
    </div>
  )
}

export default FourmInput