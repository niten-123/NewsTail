import React from 'react'

const NewsItem=(props)=>{
 
    let {title, description, imageUrl,url,author,date,source}= props
    return (
    <>
    <div className="card " >
    <div className="position-absolute d-flex justify-content-end" style={{width: "100%",height: "2.5rem",}}> <p className='text-light bg-danger 'style={{height:" 1.5rem",borderRadius:"3px", padding:"0px 4px"}}>{source}</p> </div>
   
  <img src={imageUrl} className="card-img-top" alt="No Image"  style={{height: "13rem"}}/>
  <div className="card-body">
  
    <h5 className="card-title text-dark">{title}...  </h5>
    <p className="card-text text-dark">{description}...</p>
    <p className="card-text"><small className="text-muted">By <i><u>{author?author:"Unknown"}</u></i> At {new Date(date).toGMTString()}</small></p>
    <a href={url} rel="noreferrer"  target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
    </>
    )
  }


export default NewsItem
