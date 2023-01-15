import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './projects.styles.scss';

const Projects = ({repos}) => {

    return (
        <SimpleBar className="about-container">
            {repos.map( repo => {
                // console.log(repo.id)
                const formatName = repo.name.replace('ks-','').replace('wip',"").replace('-', ' ').replaceAll('-', ' ');
                return(
                    <p key={repo.id}>{formatName}</p>
                )
            })}
        </SimpleBar>
    )
}

export default Projects;

