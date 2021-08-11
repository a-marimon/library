import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 190,
    marginTop: 5,
    marginLeft: 5,
    padding: 0,
  },
  media: {
    height: 280,
    width: 190
  },
  title: {
    whiteSpace: 'pre',
    padding: 0,
    margin: 10,
    overflow: 'hidden'
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="book"
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="div" component="h3">
            <Link href={props.url} target="_blank" color="inherit">
              {props.title}
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard