import React from 'react';


const name = 'akash';
function FormatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {
            weekday : 'long'
        }
    );
}

export default FormatDate;
