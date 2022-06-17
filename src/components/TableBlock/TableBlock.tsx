import React, {FC} from 'react';
import {Table} from "react-bootstrap";
import {useStore} from "effector-react";
import {$error, getEpisodeDetail} from "../../effector/Episode";
import {Link} from "react-router-dom";

interface Props {
    data: any[];
    disabledData: boolean;
    disabledEN: boolean;
    disabledCharacter: boolean;
}

const TableBlock: FC<Props> = ({data, disabledData, disabledEN, disabledCharacter}) => {

    const notError = useStore($error)
    const onclickEpisode = (id: string) => {
        getEpisodeDetail(id)
    }

    if (notError) return <div className="d-flex justify-content-center align-items-center fs-4 fw-bold">{notError}</div>

    return (
        <Table striped bordered hover className="table-responsive">
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                {disabledData &&
                    <th>Date</th>
                }
                {disabledEN &&
                    <th>Episode number</th>
                }
                {disabledCharacter &&
                    <th>Number of characters</th>
                }
            </tr>
            </thead>
            <tbody>

            {data &&
                data.map(item => {
                        let path: any = "/episode/" + item.id
                        return (
                            <tr key={item.id}>
                                <td>
                                    <Link to={path}
                                          className="text-secondary fw-bold text-decoration-none mask  rgba-red-strong"
                                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => onclickEpisode(item.id)}>{item.id}</Link>
                                </td>
                                <td>
                                    <Link to={path}
                                          className="text-secondary   text-decoration-none "
                                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => onclickEpisode(item.id)}> {item.name}</Link>
                                </td>
                                {disabledData &&
                                    <td>{item.air_date}</td>
                                }
                                {disabledEN &&
                                    <td>{item.episode}</td>
                                }
                                {disabledCharacter &&
                                    <td>{item.characters.length}</td>
                                }
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </Table>
    )
}
export default TableBlock;