import React, {FC} from 'react';
import {Table} from "react-bootstrap";

interface Props {
    data: any[]
}

const TableBlock: FC<Props> = ({data}) => {


    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Date</th>
                <th>Episode number</th>
                <th>Number of characters</th>
            </tr>
            </thead>
            <tbody>

            {data &&
                data.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.air_date}</td>
                        <td>{item.episode}</td>
                        <td>{item.characters.length}</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    )
}
export default TableBlock;