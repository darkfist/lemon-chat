import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import lemonImg from './lemon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <img src={lemonImg} className="lemon" alt="lemon logo" />
            <h1>Lemon Chat - Realtime Chat Application</h1>
        </div>
        {
            users
                ? (
                    <div>
                        <h2>People currently chatting:</h2>
                        <div className="activeContainer">
                            <h4>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </h4>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;