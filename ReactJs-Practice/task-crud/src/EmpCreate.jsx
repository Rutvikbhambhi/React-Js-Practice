import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmpCreate = () => {

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [active, activechange] = useState(true);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  }

  const showToastMessage = () => {
    toast.success('Saved Successfully!', {});
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card mt-5">
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input value={id} disabled="disabled" className='form-control' />
                    </div>
                  </div>

                  <div className="col-lg-12 pt-3">
                    <div className="form-group">
                      <label>Name</label>
                      <input value={id} onChange={e=>namechange(e.target.value)} className='form-control' />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group pt-3 pb-3">
                      <label>Email</label>
                      <input value={email} onChange={e=>emailchange(e.target.value)} className='form-control' />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input value={phone} onChange={e=>phonechange(e.target.value)} className='form-control' />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check mt-2 mb-3">
                      <input checked={active} onChange={e=>activechange(e.target.checked)} type='checkbox' className="form-check-input" />
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button onClick={showToastMessage} className="btn btn-success" type='submit'>Save</button>
                      <Link to="/" className="btn btn-danger mx-2">Back</Link>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmpCreate
