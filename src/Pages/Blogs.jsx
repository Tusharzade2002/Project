import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Button, InputGroup, FormControl, Dropdown, Pagination } from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
import { getblogs } from "../Store/Blog/blogThunk"
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import businessmetting from '../assets/Blog/business_meeting.webp'
function Blog() {
  
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.blog); 

  useEffect(() => {
    dispatch(getblogs()); 
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; 

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="px-4 my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blog...</h2>
        <Button variant="dark" onClick={handleShow}>+ New post</Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <div style={{ borderRadius: "12px", padding: "20px" }}>
            <Modal.Header closeButton>
              <Modal.Title>NEW POST</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>

      <div className="d-flex  justify-content-between mb-4">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text><FaCommentDots /></InputGroup.Text>
          <FormControl placeholder="Search post..." />
        </InputGroup>
        <Dropdown>
          <Dropdown.Toggle variant="light">Latest</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Popular</Dropdown.Item>
            <Dropdown.Item>Trending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {status === "loading" && <p>Loading posts...</p>}
      {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
<div className="d-flex flex-column " >
      <Row xs={1} md={2} lg={3} xl={4} >
        {currentPosts.map((post, idx) => (
          <Col key={idx}>
            <Card className="border-0 shadow-sm h-100 rounded-4 text-white overflow-hidden m-1">
              <div style={{ position: "relative" }}>
                <Card.Img src={businessmetting} className="rounded-4" style={{ height: "240px" }} />
                <Card.Body style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  padding: "50px"
                }}>
                  <Card.Title className="h6 fw-bold">{post.title}</Card.Title>
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-4">
        <Pagination>
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1} 
          />
          {[...Array(totalPages).keys()].map((num) => (
            <Pagination.Item 
              key={num + 1} 
              active={num + 1 === currentPage} 
              onClick={() => paginate(num + 1)}
            >
              {num + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPages} 
          />
        </Pagination>
      </div>
 </div>
    </div>
  );
}

export default Blog;