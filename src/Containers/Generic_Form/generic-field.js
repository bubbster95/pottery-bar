import React from "react";
import ImageConversion from "../../Components/Image_Compressor/image-compressor";
import TextEditor from "../Text_Editor/text-editor";

const Field = ({ field, fieldChanged, value, imageChanged}) => <>
    <label htmlFor={field.key}>{field.label}</label>
    {field.type === 'text-editor' ? 
        <TextEditor
            id={field.key}
            name={field.key}
            defaultValue={value}
            fieldChanged={fieldChanged}
        />
        : (field.type === 'file') ?
            <ImageConversion
                defaultValue={value} 
                id={field.key}
                imageChanged={imageChanged}
            />
            : <input
                type={field.type}
                id={field.key}
                name={field.key}
                defaultValue={value}
                onChange={e => fieldChanged(field.key, e.target.value)}
            />
    }
</>;

export default Field;