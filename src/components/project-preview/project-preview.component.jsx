import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './project-preview.styles.scss';
import { 
    VscGithubInverted
} from 'react-icons/vsc';

const ProjectPreview = ({ repo, index }) => {
    const { name, formattedName, imageUrl, url, description, techStackBadges } = repo;

    const codes = {
        leftBrace: 123,
        rightBrace: 125,
        greaterThan: 62,
    }
    const charCode = (code) => { return String.fromCharCode(code) }

    return (
        <>
            <div className='active-line'>{charCode(codes.leftBrace)}/* PROJECT {index+1} */{charCode(codes.rightBrace)}</div>
            
            <div className='project-container'>
                <div className='project-img'> 
                    <img src={imageUrl} alt={`Screenshot of ${repo.formattedName}`} className='img-popup' />
                </div>
                <div className='project-info'>
                    <div className='project-content'>
                        <div className='dots'>. . . .</div>
                        <p className='identifier'>{charCode(codes.leftBrace)}/* {formattedName.toUpperCase()} */{charCode(codes.rightBrace)}</p>
                        <div className='dots'>. . . .</div>
                        <div className='tech-stack' dangerouslySetInnerHTML={{ __html: techStackBadges }}></div>
                        <div className='dots'>. . . .</div>
                        <div className='text'>
                            <p>{description}</p>
                        </div>
                        <div className='dots'>. . . .</div>
                        <div className='links'>
                            <NavLink to={name} className='project-page-link' state={repo}>
                                <p>LEARN MORE {charCode(codes.greaterThan)}</p>
                            </NavLink>
                            <a href={url} target="_blank" rel="noreferrer"  className='project-repo-link'>
                                <span><VscGithubInverted /></span> 
                                <p>GITHUB {charCode(codes.greaterThan)}</p>
                                    
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPreview;

