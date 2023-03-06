import React, { Component } from "react";

export default function Question (props) {
  const handleSubmit=(e)=>{
    console.log(e.target);   
    e.preventDefault();
  }
    return (
      <>
        <div className="container-fluid">
          <div className="col-md-5 m-auto">
            <div className="mt-3">
              <div className="card text-left">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="">
                        {" "}
                        <b>3.</b> What are you currently doing ?
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="teacher"
                        name="q1"
                        value="Teaching"
                        autoComplete="off"
                      />
                      <label htmlFor="teacher">Teaching</label>
                      <input
                        type="radio"
                        id="student"
                        name="q1"
                        value="Student"
                        className="mt-3"
                        autoComplete="off"
                      />
                      <label htmlFor="teacher">Student</label>
                      <input
                        type="radio"
                        id="programmer"
                        value="Programmer"
                        name="q1"
                        autoComplete="off"
                      />
                      <label htmlFor="teacher">Programmer</label>
                      <input
                        type="radio"
                        id="other"
                        name="q1"
                        // value="Other"
                        autoComplete="off"
                      />
                      <label htmlFor="teacher">Other</label>
                      <br />
                      <input
                        type="text"
                        className="form-control mt-3"
                        // disabled
                        name="other"
                        autoComplete="off"
                        placeholder="Type here if not listed"
                      />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="">
                            {" "}
                            <b>4.</b> Please rate our course.
                        </label>
                        <br />
                        <input  className="mt-3" type="radio" id="poor" name="q2" autoComplete="off" />
                        <label htmlFor="poor">Poor</label> {" "}
                        <input type="radio" id="good" name="q2" autoComplete="off" />
                        <label htmlFor="good">Good</label> {" "}
                        <input
                        type="radio"
                        id="excellent"
                        name="q2"
                        autoComplete="off"
                      />
                      <label htmlFor="excellent">Excellent</label>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="">
                            {" "}
                            <b>5.</b> Write your review here.{" "}
                        </label>
                        <textarea className="form-control mt-2" name="q3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Save
                    </button>
                  </form>
                  <center>
                    <span>1</span>
                    <span className="btn btn-primary m-2">2</span>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }



