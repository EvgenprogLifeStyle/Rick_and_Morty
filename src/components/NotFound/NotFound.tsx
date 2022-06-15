import React, {FC} from 'react';
import {Link} from "react-router-dom";

const NotFound: FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-4" style={{minHeight:"80vh"}}>
            <h1>Error 404</h1>
            <Link to="/episode" className="text-info fs-2 fw-bold mt-2 text-decoration-none"> Home</Link>
        </div>
    );
};

export default NotFound;