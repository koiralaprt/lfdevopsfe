/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Interns() {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function loadInterns() {
            setLoader(true)
            setError('')
            try {
                const list = await axios.get('http://localhost:3000/interns?_embed=thegos')
                setData(list.data)
            } catch (e) {
                console.log(e)
                setError('Oh no, Ghar bata interns aayenan!')
            } finally {
                setLoader(false)
            }
        }
        loadInterns()
    }, [])

    const AddIntern = (name = 'trump', paisa = 500) => {
        console.log(name, paisa)
        axios.post('http://localhost:3000/interns', { name, paisa })
    }

    return (<>
        <h1>Interns</h1>
        {loader &&
            <h2>You spin me right round</h2>
        }
        <div style={{ display: 'flex' }}>
            {data && data.map(item => {
                return <InternItemComponent key={`intern` + item.id} {...item} />
            })}
        </div>
        {error}
        <button onClick={() => AddIntern()}>New</button>
    </>
    )
}

const InternItemComponent = (props) => {
    const {id, name, paisa, thegos } = props
    return <div style={{ flex: 1, background: 'white', border: '1px solid grey', borderRadius: '10px', color: 'black', margin: '10px' }}>
        <h4><Link to={`interns/${id}`}>
            {name}
            </Link>
            </h4>
        <h3>${paisa}</h3>
        <h5>{thegos.map(thego => <i key={`thego${thego.id}`}>{thego.text}</i>)}</h5>
    </div>
}