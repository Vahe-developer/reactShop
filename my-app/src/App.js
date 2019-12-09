import React, {useState} from 'react'


function App() {
    const [name, setName] = useState({
        name: ""
    })
    const [filterInp, setFilterInp] = useState({
        name: ""
    })
    const [addName, setAddName] = useState([])
    const getValue = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value
        })
    }
    const [filter, setFilter] = useState([])

    const add = () => {
        setAddName([
            ...addName,
            name
        ])
    }


    const filterClick = (event) => {
        setFilterInp({
            ...name,
            [event.target.name]: event.target.value
        })
        const filteredName = addName.filter(word => word.name.includes(event.target.value));
        setFilter(filteredName)
    }

    return (
        <div>
            <div>
                <input name={"name"} onChange={getValue}/>
                <button onClick={add}>add</button>
            </div>

            <div>
                <input  name={"name"} onChange={filterClick}/>
                <div style={{border:"1px solid",marginTop: '321px',width: '40%',
                    margin: 'auto'}}>
                    {
                        filterInp.name===""?addName.map((item, index) =>
                            <h1 key={index}>{item.name}</h1>
                        ):filter.map((item, index) =>
                            <h1 key={index}>{item.name}</h1>


                        )
                    }


                </div>

            </div>
        </div>
    )
}

export default App
