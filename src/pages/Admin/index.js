import React from "react"
import {
  Container,
} from "reactstrap"


const Admin = () => {
  //meta title
  document.title="Admin Dashboard | Soda Machine App";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Admin Dashboard</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Admin;
