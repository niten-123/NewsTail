import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

const News= (props)=> {
 const [articles, setArticles]=useState([])
 const [page , setPage]= useState(1)
 const [loading , setLoading]= useState(true)
 const [totalResults , setTotalResults]= useState(0)

  
 

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
   

  const Updatenews =async()=>{
    props.setprogress(10)
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.catogary}/${props.country}.json`;
    setLoading(true); 
    let data = await fetch(url);
    props.setprogress(50)
    let parsedData = await data.json();
    props.setprogress(70)
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults( parsedData.totalResults);
    setLoading(false)
    props.setprogress(100)
      
  }
  useEffect(()=>{
   Updatenews();
    document.title = `Newsline - ${capitalizeFirstLetter(
      props.catogary
    )} News`;
  },[])

  const fetchMoreData = async () => {
   setPage(page + 1)
    let url =`https://saurav.tech/NewsAPI/top-headlines/category/${props.catogary}/${props.country}.json`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles( articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
    
    
  };

  
    

    return (
      <>
       
          <h3 className="text-center pt-4 ">
            <strong>
              <u>NewsLine</u>
            </strong>
            {` - Top ${capitalizeFirstLetter(
              props.catogary
            )} News Headlines   `}
          </h3>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {
                articles.map((item) => {
                    return (
                      <div className="col-md-6 col-sm-12 my-3" key={item.url}>
                        <Newsitem
                          title={item.title ? item.title.slice(0, 40) : ""}
                          description={
                            item.description
                              ? item.description.slice(0, 85)
                              : ""
                          }
                          imageUrl={item.urlToImage}
                          url={item.url}
                          author={item.author}
                          date={item.publishedAt}
                          source={item.source.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
        
      </>
    );
  }


export default News;
