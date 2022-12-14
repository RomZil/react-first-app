import React from 'react';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function CommentsWindow({ close }) {
  return (
    // <div className={`Comment-Window ${show ? "show" : ""}`}>
    <div className='Comment-Window'>

      
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">NAME</InputGroup.Text>
        <Form.Control
          aria-label="NAME"
          aria-describedby="inputGroup-sizing-sm"
        />
        </InputGroup>

         <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">ADDRESS</InputGroup.Text>
        <Form.Control
          aria-label="ADDRESS"
          aria-describedby="inputGroup-sizing-sm"
        />
        </InputGroup>

        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">COMMENT</InputGroup.Text>
        <Form.Control
          aria-label="COMMENT"
          aria-describedby="inputGroup-sizing-sm"
        />
        </InputGroup>

        <button type="submit">Submit</button>
        <button type="button" onClick={close}>
          Cancel
        </button>
      
    </div>
  );
}

export default CommentsWindow;
