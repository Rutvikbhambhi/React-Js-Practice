import { Button, Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Details = () => {
	const [ logindata, setLoginData ] = useState([]);
    console.log(logindata);

    const hostory = useNavigate();

    var todayDate = new Date().toISOString().slice(0, 10);
    // console.log(todayDate);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

	const Birthday = () => {
		const getuser = localStorage.getItem('user_login');

		if (getuser && getuser.length) {
			const user = JSON.parse(getuser);
			// console.log(user);
			setLoginData(user);

			const userbirth = logindata.map((el, k) => {
				return el.date === todayDate;
			});

            if (userbirth) {
                setTimeout(()=>{
                    setTimeout(()=>{
                        console.log("Done");
                        handleShow();
                    },3000)
                })
            }
		}
		// console.log("ok");
	};

    const userlogout = () => {
        localStorage.removeItem("user_login")
        hostory("/");
    }

	useEffect(() => {
		Birthday();
	}, []);

	return(
        <div>
            {
                logindata.length === 0 ? "error" : 
                <>
                    <h1>details page</h1>
                    <h1>{logindata[0].name}</h1>
                    <button onClick={userlogout}>LogOut</button>

                    {
                    logindata[0].date === todayDate ?
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{logindata[0].name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Wish you many many happy return of the day</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                            Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>:""
                    }



                </>
            }
        </div>
    ) 
};

export default Details;
