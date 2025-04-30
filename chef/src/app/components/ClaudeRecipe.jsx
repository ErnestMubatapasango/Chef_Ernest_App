import React from 'react'
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = (props) => {
  return (
    <section>
        <ReactMarkdown>
            {props.recipe}
        </ReactMarkdown>
    </section>
  )
}

export default ClaudeRecipe