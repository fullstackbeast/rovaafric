import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "80%",
        maxWidth: "700px"
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    formInput: {
        marginBottom: theme.spacing(2)
    }
}));

const AddBlogModal = ({ open, handleClose, blogData, type }) => {

    const classes = useStyles();

    const [userInputs, setUserInputs] = useState({
        title: blogData !== undefined ? blogData.title : "",
        category: blogData !== undefined ? blogData.category : "",
        image: blogData !== undefined ? blogData.image : "",
        text: blogData !== undefined ? blogData.text : "",
        author: "Admin",
        date: Date.now()

    })

    const history = useHistory();

    const handleUserInput = e => {

        if (e.target.id === "title") {
            setUserInputs({
                ...userInputs,
                'title': e.target.value,
                'slug': e.target.value.toLowerCase().replace(/ /g, "-")
            })
        }
        else {
            setUserInputs({
                ...userInputs,
                [e.target.id]: e.target.value
            })
        }

    }

    const handleBlogAdd = () => {

        firebase.firestore().collection('blogs').add(userInputs)

        setUserInputs({
            ...userInputs,
            title: "",
            category: "",
            image: "",
            text: "",
            slug: ""
        })

        handleClose();
    }

    const handleBlogUpdate = () => {

        let blogTitle = blogData !== undefined ? blogData.title : userInputs.title

        firebase.firestore().collection('blogs')
            .where('title', '==', blogTitle)
            .get().then(res => {
                res.forEach(r => r.ref.update(userInputs).then(p => history.go(0)))
            })
            .catch(err => console.log(err))

        handleClose();


    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <form noValidate autoComplete="off" className={classes.form}>
                        <TextField
                            className={classes.formInput}
                            id="title" label="Title"
                            variant="outlined"
                            value={userInputs.title}
                            onChange={handleUserInput} />
                        <TextField
                            className={classes.formInput}
                            id="category"
                            label="Category"
                            variant="outlined"
                            value={userInputs.category}
                            onChange={handleUserInput} />
                        <TextField
                            className={classes.formInput}
                            id="image"
                            label="Image"
                            variant="outlined"
                            value={userInputs.image}
                            onChange={handleUserInput} />
                        <TextField className={classes.formInput}
                            id="text"
                            className={classes.formInput}
                            label="Text"
                            multiline
                            rows={8}
                            value={userInputs.text}
                            onChange={handleUserInput}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={type === 'update' ? handleBlogUpdate : handleBlogAdd}
                            startIcon={<CloudUploadIcon />}
                        ></Button>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
}

export default AddBlogModal;