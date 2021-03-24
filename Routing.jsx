import React from 'react';
import { useHistory } from "react-router-dom";
import Login from './Login'

export function HomeSection() {
  const history = useHistory();
  const goLogin = () => history.push('login');

  return (
    <Grid>
      <Row className="text-center">          
        <Col md={12} xs={12}>
          <div className="input-group">
            <span className="input-group-btn">
              <button  type="button" />
              <Login/>
            </span>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}