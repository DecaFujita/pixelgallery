import React, { useState, useEffect, createContext } from "react";
import { INICIAL_VAL } from '../assets';
// import { uuid } from 'uuidv4';
// import useAPI from '../hooks/useAPI';

const GalleryContext = createContext();



const GalleryProvider = props => {
    const [ artList, setArtList ] = useState(INICIAL_VAL);
    const [formData, setFormData] = useState('')
  
    const loadArt = async() => {
        const art_response = await fetch('http://127.0.0.1:8000/api/art/'); 
        const art = await art_response.json();
        console.log(art)
        setArtList(art)
        // setState(art)
        // if (!art_response.ok) {
        //   throw new Error(`HTTP error! status:`);
        // }
    };
  
    // const saveNewArt = () => {
    //   fetch('http://127.0.0.1:8000/api/art/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: formData, // Use your own property name / key
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => setArtList(result.rows))
    //     .catch((err) => console.log('error'))
    // }
  
    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   saveNewArt() // Save games when form is submitted
    // }
  
    // const handleChange = (event) => {
    //   setFormData(event.target.value)
    // }

    useEffect(() => {
        console.log('ok')
        loadArt()
      }, [])

    return (
        <GalleryContext.Provider value={{artList, formData, setFormData}}>
            {props.children}
        </GalleryContext.Provider>
    )
};

export {GalleryContext, GalleryProvider};
  
    // return (
    //   <div className="App">
    //     {/* method="post" not needed here because `fetch` is doing the POST not the `form` */}
    //     {/* Also, note I changed the function name, handleSubmit */}
    //     <form onSubmit={handleSubmit}>
    //       <input type="text" name="name" value={formData} onChange={handleChange} />
    //       <button type="submit">click</button>
    //     </form>
  
    //     {data &&
    //       data.map((element, index) => (
    //         <GameTestResult name={element.name} key={element.index} />
    //       ))}
    //   </div>
    // )




    // const saveNewArt = value => {
    //     setArtList([...artList, { id: uuid(), name: 'deca', likes: 0, pixelart: value }]);
    // }
