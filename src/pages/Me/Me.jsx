import React from 'react';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import Layout from '../../components/./layout/Layout';
import useStyles from './MeStyles';
import {SectionTitle, Paragraph} from '../../styles';
import {ProfileLink} from './styles';

const Me = ({user}) => {
    const classes = useStyles();
    console.log('asas', user.skills)
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>{user.basics.summary}</Paragraph>
            </div>

            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map((skill, index) => (
                        <div key={index} className={classes.mainContainer}>
                            <span>{skill.name}</span>
                            <BorderLinearProgress variant="determinate" value={skill.rating * 20}/>{skill.rating * 20}%
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {user.basics.profiles.map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {
                                    profile.network !== 'gitconnected' ? profile.network : null
                                }
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Me;
