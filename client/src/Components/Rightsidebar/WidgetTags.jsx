import React from 'react'

const WidgetTags = () => {
    const arr =['c','css','php','java','express','python','css','firebase', 'mongoDb','spring boot','mySQL','html','react','nodejs'];
  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className="widget-tags-div">{
            arr.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))
        }
        </div>
      
    </div>
  )
}

export default WidgetTags
