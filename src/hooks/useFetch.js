import { useEffect } from "react";
import { useState } from "react";
import  {BASE_URL}  from "../const/data";
export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const getData = async () => {
      fetch(`${BASE_URL}${url}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
        console.log('Fetching data');
        
    };
    useEffect(() => {
      setLoading(true);
      getData();
    }, [url]);
    return { data, loading, error };
  };
  