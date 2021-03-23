import React, {useState} from 'react';
import { storageRef } from '../firebase';


function Pdf() {
    const [src, setSrc] = useState('')

    var gsReference = storageRef.refFromURL("gs://portafolio-5c5e8.appspot.com/cv.pdf")
    gsReference.getDownloadURL().then(function(url) {
        setSrc(url);
        console.log(url);
    })

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%'}}>
            <object width="100%" height="100%" data={src} type="application/pdf">
                <embed src={src} type="application/pdf" />
            </object>
        </div>
    )
}

export default Pdf
