import React, { Component } from "react";

export class Details extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="col-md-5 m-auto">
            <div className="mt-3">
              <div className="card text-left">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="">
                        {" "}
                        <b>1.</b> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Please enter your name"
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="">
                        {" "}
                        <b>2.</b> Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your email"
                        autoComplete="off"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Next</button>
                  </form>
                  <center>
                  <span className="btn btn-primary m-2">1</span>
                    <span>2</span>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
