import  {Col} from 'react-bootstrap';
export const ProjectCard = ({ title, description, imgUrl, Link}) => {

    return (

        <Col size = {12} sm = {6} md = {4}>
            <div className = "proj-imgbx">
                <img src = {imgUrl} className='Project' alt = "Project"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href= {Link} style={{ backgroundColor: '#ff6347', color: '#fff', padding: '5px', borderRadius: '5px', margin: '10px',textDecoration: 'none' }} target = "_blank" rel="noreferrer">See</a>
                </div>
            </div>
        </Col>

    )

}