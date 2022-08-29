import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCompanyForm.module.css';

function NewCompanyForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const companyData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription
        };

        props.onAddCompany(companyData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Company name</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Company image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Company description</label>
                    <textarea required id='description' rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add company</button>
                </div>
            </form>
        </Card>
    )
}

export default NewCompanyForm;