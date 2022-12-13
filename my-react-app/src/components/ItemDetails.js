import '../style/ItemDetails.css'
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from 'react-router-dom';
import {data} from '../data/mockdata.js'
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle
} from "mdb-react-ui-kit";


const ItemDetails = (props) => {
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBCardImage
              src={props.sec_img}
              position="top"
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{props.title}</MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>{props.desc}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>{props.store}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <h2>{ data[useParams().id].desc }</h2>
                <h2>{"from"}</h2>
                <h2>{ data[useParams().id].store }</h2>
                <img src={data[useParams().id].sec_img[0].url} alt="" />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ItemDetails;

