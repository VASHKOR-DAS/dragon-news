import React from 'react';


/** home components theke news name a 1ti object pathano hoise ta amra akhane {news} parameter name a receive korlam 
 * ata amra ager niom like (props) parameter name a o receive kore use krr smy 
 * props.news o korte partam */
const NewsSummaryCard = ({news}) => {
    return (
        <div>
            {news.title}
        </div>
    );
};

export default NewsSummaryCard;