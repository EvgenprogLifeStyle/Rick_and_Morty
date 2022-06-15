import React, {FC, useEffect, useState} from 'react';
import {Pagination} from "react-bootstrap";

interface PropsPages {
    pagesAll: number;
    onClickPage: (int: number) => void;
}

const PaginationBlock: FC<PropsPages> = ({pagesAll, onClickPage}) => {
    const [pages, setPages] = useState<any[]>([])
    const [activePage, setActivePage] = useState<number>(1)

    const pagesArr = () => {
        let arr = []
        for (let i = 1; i <= pagesAll; i++) {
            arr.push(i)
        }
        setPages(arr)
    }

    useEffect(() => {
        pagesArr()
    }, [])


    const onClickItem = (item: number) => {
        setActivePage(item)
        onClickPage(item)
    }

    return (
        <div className="d-flex justify-content-center">
            <Pagination>
                {pages.map((item, idx) =>
                    item === activePage
                        ? <Pagination.Item active key={idx} onClick={() => onClickItem(item)}>{item}</Pagination.Item>
                        : <Pagination.Item key={idx} onClick={() => onClickItem(item)}>{item}</Pagination.Item>
                )}
            </Pagination>
        </div>
    )
}

export default PaginationBlock;