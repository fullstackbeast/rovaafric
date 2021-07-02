import React, {useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import BlogCard from '../../Components/Admin/BlogCard'
import firebase from '../../firebase';
import AddBlogModal from '../../Components/Admin/AddBlogModal';
 

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const BlogList = () => {

    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);
    
    const handleToggleOpen = () => {
        setModalOpen(!modalOpen);
    }

    //fetching data

    const [value, loading, error] = useCollection(
        firebase.firestore().collection('blogs'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <div>
            <AddBlogModal open={modalOpen} handleClose={handleToggleOpen}/>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            <div style={{ display: "flex", flexWrap: "wrap"}}>
                {value &&  value.docs.map(doc => <BlogCard blog={doc.data()} />)}
                
            </div>

            <Fab className={classes.fab} variant="extended" color="primary" onClick={handleToggleOpen} >
                <AddIcon className={classes.extendedIcon} />
                Add New
            </Fab>

        </div>
    )
}

export default BlogList;