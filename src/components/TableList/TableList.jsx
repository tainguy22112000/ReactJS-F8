import  {Table} from '@mantine/core'
import React from 'react'

function TableList({postList}) {

    const elements = [
        { description: 6, author: 12.011, title: 'C', name: 'Carbon' },
        { description: 7, author: 14.007, title: 'N', name: 'Nitrogen' },
        { description: 39, author: 88.906, title: 'Y', name: 'Yttrium' },
        { description: 56, author: 137.33, title: 'Ba', name: 'Barium' },
        { description: 58, author: 140.12, title: 'Ce', name: 'Cerium' },
      ];
      
    const rows = postList.map((data) => 
    <tr key = {data.id}>
        <td>1</td>
        <td>{data.title}</td>
        <td>{data.author}</td>
        <td>{data.description}</td>
        <td>{data.createdAt}</td>
        <td>{data.updatedAt}</td>
        <td><img src = {data.imageUrl}></img></td>
    </tr>
)

    return (
        <Table fontSize = "xl" striped>
            <thead>
                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Details</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    )
}

export default TableList