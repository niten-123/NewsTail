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
    let url =`https://newsapi.org/v2/top-headlines?&scategory=${props.catogary}&page=${page}&country=us&apiKey=1edc34a324844c1e9e8aedea137e3549&pagesize=${props.pagesize}`;
    setLoading(true); 
    let data = await fetch(url);
    props.setprogress(50)
    let parsedData = await data.json();
    props.setprogress(70)
    setArticles(parsedData.articles);
    setTotalResults( parsedData.totalResults);
    setLoading(false)
    props.setprogress(100)
      
  }
  useEffect(()=>{
   Updatenews();
    document.title = `Newstail - ${capitalizeFirstLetter(
      props.catogary
    )} News`;
  },[])

  const fetchMoreData = async () => {
   setPage(page + 1)
    let url =`https://newsapi.org/v2/top-headlines?&category=${props.catogary}&page=${page+1}&country=us&apiKey=1edc34a324844c1e9e8aedea137e3549&pagesize=${props.pagesize}`;   
    let data = await fetch(url);
    let parsedData = await data.json();    
    setArticles( articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)   
  };

  
    

    return (
      <>
       <div style={{}}>
          <h3 className="text-center pt-4 text-dark ">
            <strong>
              <u>NewsTail</u>
            </strong>
            {` - Top ${capitalizeFirstLetter(
              props.catogary
            )} News Headlines (${props.country})  `}
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
                {articles.map((item) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-xs-12 my-3" key={item.url}>
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
          </div>
      </>
    );
  }


export default News;



