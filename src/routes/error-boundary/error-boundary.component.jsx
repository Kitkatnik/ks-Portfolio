import { useRouteError } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './error-boundary.styles.scss'

const ErrorBoundary = () => {
    const codes = {
        leftBrace: 123,
        rightBrace: 125,
        greaterThan: 62,
        lessThan: 60,
        forwardSlash: 47,
        backSlash: 92,
        leftBracket: 91,
        rightBracket: 93,
        space: 32,
    }

    const charCode = (code) => { return String.fromCharCode(code) }

    let error = useRouteError();

    return (
        <SimpleBar className="error-boundary-container"><br/>
            <p className="code">
                {
                    `${charCode(codes.leftBrace)}${charCode(codes.forwardSlash)}* ERROR *${charCode(codes.forwardSlash)}${charCode(codes.rightBrace)}`
                }
            </p>
            <br/>
            <p>
                Well that didn't work...
            </p>
            <br />
            <p>
                <span className='comment'>ERROR MESSAGE:</span> {error.message}
            </p>
        </SimpleBar>
    )
}

export default ErrorBoundary;