import React from 'react'

function MemoComp({name}) 
{
    console.log("renderMemoComp");
    return (
        
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
