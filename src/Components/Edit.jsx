import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Edit({ user, setUser }) {
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');
  const [Name, setName] = useState(user?.Name|| '');
  const [Age, setAge] = useState(user?.Age|| '');
  const navigate = useNavigate();

  // load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
      setName(storedUser.Name);
      setAge(storedUser.Age);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  //Handle profile update from submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { email,Name,Age,password };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert('Edit updated successfully');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Container>
      <Row className="justify-content-md-center ">
        <Col md="6" className='m-3'>
          <h2> Your Information</h2>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" value={Name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="age" value={Age} onChange={(e) => setAge(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Update
            </Button>
          </Form>
          <Button variant="danger" onClick={handleLogout} className="mt-3">
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;
