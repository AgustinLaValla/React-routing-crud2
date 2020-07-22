import React from 'react'

export const Contact = () => {
    return (
        <div className="container">
            <h2 className="mt-3">Contact us!</h2>
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="email">Email adrress</label>
                    <input id="email" type="email" className="form-control" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">

                    <textarea name="query" id="query" className="form-control" rows="10" placeholder="Make your questions"></textarea>
                </div>

                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button className="btn btn primary_color text-light">Submit</button>
            </form>


        </div>
    )
}
