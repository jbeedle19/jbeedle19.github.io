import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import fridgeImage from '../../assets/images/fridge.svg';
import moversImage from '../../assets/images/movers-not-shakers.jpg';
import techImage from '../../assets/images/blog-favicon.png';
import codeImage from '../../assets/images/quiz-favicon.png';
import weatherImage from '../../assets/images/weather-favicon.png';

function Project(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: '#7389ae',
        },
        gridList: {
            width: '75%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        title: {
            color: '#7389ae',
        },
        icon: {
            color: '#7389ae',
            '&:hover': {
                color: '#1d3461',
            }
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.6) 100%)',
        }
    }));

    const classes = useStyles();

    const getGridListHeight = () => {
        if (isWidthUp('md', props.width)) {
            return 350;
        }
    
        if (isWidthUp('sm', props.width)) {
            return 275;
        }
    
        if (isWidthUp('xs', props.width)) {
            return 350;
        }
    
        return 1;
    }

    const getGridListCols = (project) => {
        if (isWidthUp('sm', props.width)) {
            return project.cols;
        }
    
        if (isWidthUp('xs', props.width)) {
            return 3;
        }
    
        return 1;
    }

    const projectData = [
        {
            img: fridgeImage,
            title: 'Fridge Friend',
            description: 'Express / Sequelize / Handlebars.js / Tailwind / Nodemailer',
            gitLink: 'https://github.com/jbeedle19/fridge-friend',
            deployedLink: 'https://fridg3-fri3nd.herokuapp.com/',
            cols: 2,
        },
        {
            img: moversImage,
            title: 'Movers Not Shakers',
            description: 'jQuery / Bulma CSS / Google Maps API / OpenWeather API',
            gitLink: 'https://github.com/jbeedle19/movers-not-shakers',
            deployedLink: 'https://jbeedle19.github.io/movers-not-shakers/',
            cols: 1,
        },
        {
            img: techImage,
            title: 'Tech Blog',
            description: 'Express / Sequelize / Handlebars.js',
            gitLink: 'https://github.com/jbeedle19/tech-blog',
            deployedLink: 'https://the-t3ch-blog.herokuapp.com/',
            cols: 1,
        },
        {
            img: codeImage,
            title: 'Code Quiz',
            description: 'HTML / CSS / JavaScript',
            gitLink: 'https://github.com/jbeedle19/code-quiz',
            deployedLink: 'https://jbeedle19.github.io/code-quiz/',
            cols: 1,
        },
        {
            img: weatherImage,
            title: 'Weather Dashboard',
            description: 'jQuery / Bootstrap / Moment.js',
            gitLink: 'https://github.com/jbeedle19/weather-dashboard',
            deployedLink: 'https://jbeedle19.github.io/weather-dashboard/',
            cols: 1,
        }
    ];

    return (
        <div className={classes.root}>
            <GridList cellHeight={getGridListHeight()} className={classes.gridList} cols={3} spacing={10}>
            {projectData.map((project) => (
                <GridListTile className={classes.gridList} key={project.title} cols={getGridListCols(project)}>
                    <img src={project.img} alt={project.title} />
                    <GridListTileBar 
                        title={<a href={project.deployedLink} target="_blank" rel="noreferrer">{project.title}</a>}
                        subtitle={<span>{project.description}</span>}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                            subtitle: classes.title,
                        }}
                        actionIcon={
                            <IconButton aria-label={`${project.title} GitHub`} onClick={() => window.open(project.gitLink, "_blank")}>
                                <GitHubIcon className={classes.icon} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
            </GridList>
        </div>
    );
}

export default withWidth()(Project);