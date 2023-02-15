import { Col } from "react-bootstrap";
import { Button } from '../ButtonElements4.js';


export const ProjectCard = ({ title, description, imgUrl, lower}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h5>{lower}</h5>
          
          


        </div>
      </div>
    </Col>
  )
}