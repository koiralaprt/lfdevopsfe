import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function RouteParamsExample() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:3000/interns/${id}`).then(({ data: d }) => setData(d))
  }, [id])

  return (<>
    <div>Your route params is {id}</div>
    <div>{data && <p>Name of the intern is <b>
      {data.name}
    </b>
    </p>}</div>
  </>
  )
}
