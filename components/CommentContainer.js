import React from 'react'

import CmtItem from './CmtItem'

const CommentContainer = props => {
    const { comments } = props
    return (
        <>
            {
                comments.map((comment, index) => <CmtItem key={index} name={comment[0]} comment={comment[1]} depth={0}/>)
            }
        </>
    )
}

export default CommentContainer