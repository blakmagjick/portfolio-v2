import '../App.css'

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProjectCards () {
    const projects = [{
        'img':'mayhem_ss.png', 
        'title':'Memory Mayhem', 
        'desc':'My first project for General Assembly\'s SEI.'},
    {
        'img':'dtg_ss.png',
        'title':'Down to Game',
        'desc':'Group project for General Assembly\'s SEI.'   
    },
    {
        'img':'booksom-buddies_ss.png',
        'title':'Booksom Buddies',
        'desc':'Final Project for General Assembly\'s SEI'
    }]

  if (projects.length) {  
  return (
    <Card style={{ width: '18rem' }}>
         {projects.map((project, i) => <div>
      <Card.Img variant="top" src={project.img} width='300px'/>
      <Card.Body>
        <Card.Title><strong>{project.title}</strong></Card.Title>
        <Card.Text>
        {project.desc}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body></div>)}
    </Card>
  )};
}