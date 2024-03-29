import React, { useState, useEffect, useContext } from 'react';
import { css } from '@emotion/css';
import { EditorState} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { AuthContext } from '../User/Auth/AuthContext';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Input from '../Form/Input';
import Label from '../Form/Label';
import Submit from '../Form/Submit';
import Validator from '../Form/Validator';
import { toast } from 'react-toastify';
import useAddPost from '../../Querys/addPostQuery';

function FourmInput() {
  const [subject, setSubject] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [postedBy, setPostedBy] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');
  const { user, isLoggedIn } = useContext(AuthContext);
  const addPostMutation = useAddPost();

  const handleImageUpload = (file) => {
    // Check if the file URL starts with http or https
    if (!/^https?:\/\//.test(file.url)) {
      toast.error('Invalid image address. Please use a URL starting with http or https.');
      return;
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      setPostedBy(user.username);
    }
  }, [isLoggedIn, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
        const newPost = {
          subject,
          message: stateToHTML(editorState.getCurrentContent()),
          postedBy,
        };

        await addPostMutation.mutateAsync(newPost);
    
        // Reset form fields
        setSubject('');
        setEditorState(EditorState.createEmpty());
    } else {
      toast.error('Error: Invalid inputs');
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (subject.trim().length === 0) {
      setSubjectError('Subject is required');
      isValid = false;
    } else if (subject.split(' ').length > 10) {
      setSubjectError('Subject should have a maximum of 10 words');
      isValid = false;
    } else {
      setSubjectError('');
    }

    const messagePlainText = editorState.getCurrentContent().getPlainText();
    if (messagePlainText.trim().length === 0) {
      setMessageError('Message is required');
      isValid = false;
    } else if (messagePlainText.split(' ').length > 250) {
      setMessageError('Message should have a maximum of 250 words');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  return (
    <div
      className={css`
        min-height: 500px;
        width: 100%;
      `}
    >
      <form
        onSubmit={handleSubmit}
        className={css`
          display: block;
          min-height: 300px;
          width: 90%;
          background: #1c1c1c;
          padding: 25px;
          margin: auto;
          font-family: Roboto, sans-serif;
          border-radius: 10px;
          margin-top: 20px;
          margin-bottom: 40px;
          @media (max-width: 1330px) {
            width: 85%;
          }
          @media (max-width: 770px) {
            margin-bottom: 5px;
          }
        `}
      >
        <Label htmlFor="subject" text="Subject:" primary />
        <Input
          type="text"
          placeholder="Subject: "
          value={subject}
          onValueChange={setSubject}
          left="0"
        />
        {subjectError && <Validator text={subjectError} />}

        <Label htmlFor="message" text="Message:" primary />
        <div
          className={css`
            border: 1px solid #ccc;
            background-color: #fff;
            padding: 5px;
            border-radius: 5px;
            margin-top: 10px;
          `}
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName={css`
              min-height: 200px;
              padding: 10px;
              font-size: 16px;
              color: #000;
            `}
            toolbar={{
              image: {
                uploadCallback: handleImageUpload,
                alt: { present: true, mandatory: true },
              },
            }}
          />
        </div>
        {messageError && <Validator text={messageError} />}

        <Submit small />
      </form>
    </div>
  );
}

export default FourmInput;