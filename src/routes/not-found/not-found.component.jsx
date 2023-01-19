import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './not-found.styles.scss'

const NotFound = () => {
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
    
        return (
            <SimpleBar className="not-found-container">
                <p>
                    {
                        `   
                            \u00A0\u00A0___\u00A0\u00A0\u00A0\u00A0___\u00A0\u00A0\u00A0\u00A0\u00A0_________\u00A0\u00A0\u00A0\u00A0\u00A0___\u00A0\u00A0\u00A0\u00A0___
                            \u00A0|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0\u00A0|${charCode(codes.backSlash)}\u00A0\u00A0\u00A0__\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0\u00A0|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}
                            \u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}_${charCode(codes.backSlash)}_${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}_${charCode(codes.backSlash)}_${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}
                            \u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}______\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}______\u00A0\u00A0\u00A0${charCode(codes.backSlash)}
                            \u00A0\u00A0\u00A0${charCode(codes.backSlash)}|______|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}|______|${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}
                            \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}_${charCode(codes.backSlash)}${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}
                            \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}__${charCode(codes.backSlash)}\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}________${charCode(codes.backSlash)}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}\u00A0${charCode(codes.backSlash)}__${charCode(codes.backSlash)}
                            \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}|__|\u00A0\u00A0\u00A0${charCode(codes.backSlash)}|_________|\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.backSlash)}|__|
                        `
                    } 
                </p><br/>
                <p className="code">
                        {
                            `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${charCode(codes.leftBrace)}${charCode(codes.forwardSlash)}* ERROR: PAGE NOT FOUND *${charCode(codes.forwardSlash)}${charCode(codes.rightBrace)}`
                        }
                </p>
                <p>
                    {
                        `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The requested page was not found.`
                    }
                </p>
            </SimpleBar>
    )
}

export default NotFound;