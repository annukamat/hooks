import React, {useState} from 'react'

function ArrayData() {
    let data = [
        {
            id:0,
            name: "Annu",
            occupation: "Staudent"
        },
        {
            id:1,
            name: "Pooja",
            occupation: "Collouge"
        },
        {
            id:2,
            name: "Ranjan",
            occupation: "Apprentice"
        }
    ]
    const [myArray, setMyArray] = useState(data);

    const clearArray = () => {
        setMyArray([]);
    }

    const deleteComp = (id) => {
        let arrayAfterDel = myArray.filter((curr) => {
            return curr.id !== id
        })

        setMyArray(arrayAfterDel);
    }


    return (
        <div>
            {myArray.map((ele) => {
                return(
                    <>
                        <div>
                            <p key={ele.id}>Name : {ele.name} | Occupation : {ele.occupation}</p>
                            <button onClick={() => deleteComp(ele.id)}>Delete</button>
                        </div>
                    </>
                )
            })
            }
            <button onClick={clearArray}>Delete All</button>
        </div>
    )
}

export default ArrayData;
