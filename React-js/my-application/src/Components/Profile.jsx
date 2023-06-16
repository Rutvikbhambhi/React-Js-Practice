import React, { useState } from 'react'

function Profile() {

    const [login, setLogin] = useState(1)

    return (
        <div>
            {login == 1 ?
                <h1>Rutvik</h1>
                : login == 2 ? <h1>User1</h1>
                : <h1>User2</h1>
            }
        </div>
    )
}

export default Profile;