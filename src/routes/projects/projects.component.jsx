import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './projects.styles.scss';

const Projects = ({repos}) => {

    return (
        <SimpleBar className="about-container">
            {repos.map( repo => {
                const formatName = repo.name.replace('ks-','').replace('-', ' ').replaceAll('-', ' ');
                return(
                    <p key={repo.id}>{formatName}</p>
                )
            })}
        </SimpleBar>
    )
}

export default Projects;

