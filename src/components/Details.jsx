import { useEffect, useState } from "react";

export function Details({ props, api }) {
   const {id} = props;
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   const getDetails = () => {
      setLoading(true);
      const callback = (error, response) => {
         if (error) {
            console.log(error);
            return;
         }
         setData(response);
         setLoading(false);
      };
      api.choose(callback, id);
   };

   useEffect((getDetails), []);

   useEffect(getDetails, [id]);

   useEffect(() => {
      return () => {
         setData([]);
      }
   }, [id]);

   if (loading) return (
      <div className="panel details loading">Loading...</div>
   );

   if (data.length !== 0) return (
   <ul className="panel details">
      <li className="entry">
         <img className="avatar" src={data.avatar}></img>
      </li>
      <li className="entry">
         <p className="value">{data.name}</p>
      </li>
      <li className="entry">
         <p className="value">City: {data.details.city}</p>
      </li>
      <li className="entry">
         <p className="value">Company: {data.details.company}</p>
      </li>
      <li className="entry">
         <p className="value">Position: {data.details.position}</p>
      </li>
   </ul>
   )
}
