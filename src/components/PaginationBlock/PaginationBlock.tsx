import React, {FC} from 'react';
import {Pagination} from "react-bootstrap";

const PaginationBlock:FC = () =>
    <div className="d-flex justify-content-center">
        <Pagination>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
        </Pagination>
    </div>
export default PaginationBlock;