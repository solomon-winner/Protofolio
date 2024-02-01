import  {Col} from 'react-bootstrap';
export const ProjectCard = ({ title, description, imgUrl, Link}) => {

    return (

        <Col size = {12} sm = {6} md = {4}>
            <div className = "proj-imgbx">
                <img src = {imgUrl} className='Project'/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href= {Link} target = "_blank">See The Code</a>
                </div>
            </div>
        </Col>

    )

}