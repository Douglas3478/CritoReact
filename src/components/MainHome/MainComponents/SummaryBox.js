import React from 'react'


const SummaryBox = ({ linkText, url }) => {
    return (
        <div className="summary_end">
            <a href={url}>{linkText}</a>
        </div>
    )
}



export default SummaryBox