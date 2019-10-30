import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await Axios.get(`/api/test`);
        setData(fetchedData.data)

      } catch (error) {
          //
      }
    };

    fetchData();
  }, []);


  return(<>{data}</>)
};
export default Test;