import React, {FC} from 'react';
import {Form, Stack} from "react-bootstrap";
import {searchReposFx} from "../../effector/Episode";

const Search: FC = () => {
    const valueSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        searchReposFx(e.target.value)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="mr-auto" type="text" placeholder="Search" onChange={valueSearch}/>
                </Stack>
            </Form.Group>
        </Form>
    )
}

export default Search;