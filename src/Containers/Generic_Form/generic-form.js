import React, { useState }  from "react";
import { uploadHeroImageToStorage } from '../../firebase.js'

import * as uuid from 'uuid';

import Field from "./generic-field";

const GenericForm = ({ callBack, formConstructor, existingValues={}, closeForm }) => {
    const [values, setValues] = useState(existingValues)
    const [imagesToUpload, setImagesToUpload] = useState([])

    const fieldChanged = (fieldKey, value) => {
        setValues(currentValues => {
            currentValues[fieldKey] = value;
            return currentValues;
        })
    }

    const imageChanged = (id, image) => {
        // Set state with the image
        fieldChanged(id, image)
        // Push state id into an array for later
        setImagesToUpload(currentValues => {
            currentValues.push(id)
            return currentValues
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        // Toggle between editing or creating a new submission
        setValues(currentValues => {
            if (existingValues.id) currentValues.id = existingValues.id
            else currentValues.id = uuid.v4()
            return currentValues
        })

        if(imagesToUpload.length > 0) {
           imagesToUpload.map(async image => {
                // upload image to Firestore
                let imageUrl = await uploadHeroImageToStorage(values[image], image)
                // Replace file with download url
                fieldChanged(image, imageUrl)
                // Update DB then close form
                callBack(values)
                return cancelForm(e)
           })
        } else { // Update DB then close form
            callBack(values)
            cancelForm(e)
        }
    }

    // Runs the function passed to close this perticular Form
    const cancelForm = (e) => {
        e.preventDefault()
        closeForm()
    }

    return <form className="backend-form" onSubmit={onSubmit}>
        <button className="close-form" onClick={(e)=> cancelForm(e)}> X </button>

        {formConstructor.fields.map(field => {
            return <Field
                key={field.key}
                field={field}
                fieldChanged={fieldChanged}
                imageChanged={imageChanged}
                value={values[field.key]}
            />
        })}

        <div className="backend-form-buttons">
            <button type='submit'>Submit Form</button>
            <button type='reset'>Reset</button>
        </div>
    </form>
};

export default GenericForm;
