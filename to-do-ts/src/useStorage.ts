import { useState, useEffect } from 'react'

const useStorage = () => {
    const [data, setData] = useState<any[]>([])
    
      useEffect(() => {
        if (data.length > 0) {
          localStorage.setItem("data", JSON.stringify(data));
        }
      }, [data]);

      function storeData(data:Array<any>){
        if (data.length > 0) {
            localStorage.setItem("data", JSON.stringify(data));
        }
        setData(data);
      }
    
      useEffect(() => {
        const storageData = localStorage.getItem("data");
        if (storageData) {
          setData(JSON.parse(storageData));
        }
      }, []);

      return [data, storeData] as const;

}

export {useStorage}