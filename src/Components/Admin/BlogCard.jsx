import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create';

import { format } from 'date-fns'
import firebase from '../../firebase';
import AddBlogModal from './AddBlogModal';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: "100%",
        margin: theme.spacing(1)
    },
    media: {
        height: 140,
    },
}));



const BlogCard = ({ blog }) => {

    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => {
        setModalOpen(!modalOpen);
    }

    const deleteBlog = () => {

        console.log(blog.title);

        firebase.firestore().collection('blogs')
            .where('title', '==', blog.title)
            .get().then(res => res.forEach(r => r.ref.delete()))
            .catch(err => console.log(err))

    }

    const updateBlog = () => {

        handleModalToggle();

    }


    const handleBlogClick = () => {
        const slug = blog.title.toLowerCase().replace(/ /g, "-");
        // history.push(`/blog/${slug}`);
        const win = window.open(`/blog/${slug}`, "_blank");
        win.focus();
    }

    return (
        <>
            <AddBlogModal
                open={modalOpen}
                handleClose={handleModalToggle}
                blogData={blog}
                type="update" />

            <Card className={classes.root}>
                <CardActionArea onClick={handleBlogClick}>
                    <CardMedia
                        className={classes.media}
                        image={blog.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {blog.title}
                        </Typography>
                        <Typography variant="subtitle2" >
                            {format(blog.date, 'PPP')}
                        </Typography>
                        <Typography variant="body2" noWrap={true} color="textSecondary" component="p" >
                            {blog.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        color="blue"
                        onClick={updateBlog}
                        className={classes.button}
                        startIcon={<CreateIcon />}>
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        onClick={deleteBlog}
                        className={classes.button}
                        startIcon={<DeleteIcon />}>
                        Delete
                    </Button>

                </CardActions>
            </Card>
        </>
    )
}

export default BlogCard;