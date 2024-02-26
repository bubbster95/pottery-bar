import { compressAccurately} from 'image-conversion';
import React, {useState} from 'react';

const ImageConversion = ({ id, file, imageChanged }) => {
  const [reader, setReader] = useState(file)
  // or use an async function
  const view = async (e) => {
    const file = e.target.files[0];
    const res = await compressAccurately(file,1000)


    // Display File
    var tempReader = new FileReader();
    // Needs To run both to display file? 
    tempReader.onload = e =>  setReader(e.target.result)
    setReader(tempReader.readAsDataURL(res))

    imageChanged(id, res)
  }

  

  return <div>
    <input type='file' onChange={view} defaultValue={file && file}/>
    {(reader) &&
      <img
        src={reader}
        alt={'just a test'}
        style={{
          maxWidth: 200,
          maxHeight: 200
        }}
    />}
  </div>
}

export default ImageConversion