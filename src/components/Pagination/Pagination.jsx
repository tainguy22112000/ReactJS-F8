import React from 'react'
import {Button} from '@mantine/core'
import styles from './Pagination.module.sass'

const Pagination = ({pagination, onPageChange}) => {
    const {_page, _limit, _totalRows} = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);
    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div className= {styles.container}>
            <Button
                disabled = {_page <= 1}
                onClick = {() => handlePageChange(_page - 1)}
            >
                Prev
            </Button>

            <Button
                disabled = {_page >= totalPages}
                onClick = {() => handlePageChange(_page + 1)}
            >
                Next
            </Button>

        </div>
    )
}

export default Pagination