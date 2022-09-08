import Video from '../components/Video';
import {useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import dataFromBD from '../utils/data';

const Videos = () => {
  const [data, setData] = useState([]);
  //componentDidMount
  useEffect(() => {
    // aqui hago lo que quiero hacer cuando el componente se monte en el DOM 
    // en este caso, consulto a la BD
    customFetch(2000, dataFromBD)
      .then(datos => setData(dataFromBD))
      .catch(err => console.log(err))
    }, []);  //hook

    const report = () => {
        console.log("Hola Mundo");
    }

    return (
        <>
        {
          data.map(item =>(
            <Video
            key={item.id}
            start={0}
            title={item.title}
            dateAdded={item.dateAdded}
            channel={item.channel}
            thumbnail={item.thumbnail}
            description={item.description} />
            ))
          }
    </>
    );
}

export default Videos;