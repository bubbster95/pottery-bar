import React, { useState } from "react";

import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, convertFromRaw, EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './text-editor.scss'

const TextEditor = ({ defaultValue=false, fieldChanged, id }) => {

    const [editorState, setEditorState] = useState(
        // Fills in a default value or empty editor state
        defaultValue ?
        () => EditorState.createWithContent(convertFromRaw(defaultValue))
        : () => EditorState.createEmpty()
    );

    // Each editor change set state then converts to raw
    const handleEditorChange = (state) => {
        setEditorState(state);
        fieldChanged(id, convertToRaw(editorState.getCurrentContent()))
    }
    
    return <div className="text-editor-preview-container">
        <div className="text-editor">  
            <h2>Editor</h2>
            <Editor
            defaultEditorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName={'wrapper-class'}
            editorClassName={'editor-class'}
            toolbarClassName={'toolbar-class'}
            toolbar={{
                options: [
                    'inline',
                    'blockType',
                    'list',
                    'textAlign',
                    'link',
                    'embedded',
                    'emoji',
                    // 'image',
                    // 'remove',
                    'history'
                ]
            }}
            />
        </div>
    </div>
}

export default TextEditor

