import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Typography, Grow, Tooltip, Fade } from '@material-ui/core';
import useStyles from './styles.js';

const infoCards = [
    { color: '#fcce03', title: 'Click the blue button below', text: "Give me the latest news" },
    { color: '#fc0341', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#8c03fc', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#03fce7', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles }) => {
    const classes = useStyles();

    if(!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                {infoCard.title===infoCards[0].title ? (<Tooltip interactive TransitionComponent={Fade} TransitionProps={{ timeout: 300 }} title="Then say a command"><Typography className={classes.tr} variant="h5">{infoCard.title}</Typography></Tooltip>) : <Typography variant="h5" className={classes.tr}>{infoCard.title}</Typography>}
                                {infoCard.info ? (<Typography variant="h6">{infoCard.info}</Typography>) : null}
                                <Typography variant="h7">Say something like "{infoCard.text}"</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} s={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} i={i} />
                    </Grid>
                ))}
            </Grid> 
        </Grow>
    ); 
}

export default NewsCards;
