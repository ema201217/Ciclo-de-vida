import React from 'react';

function Genre({name}){
    console.log(name);
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;