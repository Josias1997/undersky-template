import React from 'react';

const TeamMember = props => {
    return (
        <div style={{
            width: '40%'
        }}>
            <div>
                <img className="image-rounded" src="/images/avatar.png" alt="avatar"/>
            </div>
            <div>
                <hr/>
                <p>
                    Doron Francis - Co-Founder &amp; Director
                </p>
            </div>
            <div>
                <p>
                    Doron is is the strategic backbone of our team, full of big ideas on how to do things better. 
                    King of logistics, Doron ensures that every event runs smoothly from start to finish.
                </p>
            </div>
        </div>
    )
}

export default TeamMember;