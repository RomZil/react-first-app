import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function CommentsWindow({ close , items }) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    address: "",
    comment: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const submit = () => {
    const requestOptions = {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contactInfo.name,
        address: contactInfo.address,
        comment: contactInfo.comment,
        items: items,
      }),
    };
    fetch("http://localhost:3000/order", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(contactInfo.name, contactInfo.address, contactInfo.comment);
    console.log(requestOptions.body);
    close();
  };



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

        <Button type="submit" onClick={submit}>Submit</Button>
        <Button type="button" onClick={close}>
          Cancel
        </Button>
      
    </div>
  );
}

export default CommentsWindow;
