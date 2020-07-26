import React from 'react';
import {useLocation} from 'react-router-dom';
import {ArrowRight16} from '@carbon/icons-react';

import {HeaderContainer, Header, Image, ViewResumeLink} from './styles';

const UserHeader = ({user}) => {
    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture}/>
                <div>
                    <h2>{user.basics.name}</h2>
                    <p>{user.basics.label}</p>
                    <p>Coding in {user.basics.region}</p>
                    <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
                    <p>{user.basics.headline}</p>
                    <p>{user.basics.email}</p>
                    <p>{user.basics.phone}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={`https://gitconnected.com/${user.basics.username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Résumé</span>
                    <ArrowRight16/>
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    );
};

export default UserHeader;
