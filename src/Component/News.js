import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles= [
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Richard Lawler",
        "title": "FTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail - The Verge",
        "description": "Sam Bankman-Fried was released from federal custody to live with his parents while awaiting trial on fraud and money laundering charges relating to his failed crypto exchange FTX.",
        "url": "https://www.theverge.com/2022/12/22/23523149/sam-bankman-fried-250m-bail-ftx-crypto-fraud",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/hKTsJ4kH95ULYiT6T8TXIYcteWE=/221x79:4775x2900/1200x628/filters:focal(2505x1214:2506x1215)/cdn.vox-cdn.com/uploads/chorus_asset/file/24312564/1245786421.jpg",
        "publishedAt": "2022-12-23T02:17:00Z",
        "content": "FTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail\r\nFTX co-founder Sam Bankman-Fried is back in the US, released on $250 million bail\r\n / Former executives from SBFs cr… [+4226 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Elon Musk says he will not sell more Tesla stock for about two years - Reuters",
        "description": "Cramer offered his take on what weighed stocks down during Thursday's trading session.",
        "url": "https://www.reuters.com/business/autos-transportation/elon-musk-says-he-will-not-sell-more-tesla-stock-another-two-years-2022-12-22/",
        "urlToImage": "https://www.reuters.com/resizer/AyVgxhhmnydNnMPLwc-iNXGG6o8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4M5SMPSF7VKYTIU24S7DTDHDAQ.jpg",
        "publishedAt": "2022-12-23T02:02:00Z",
        "content": "Dec 22 (Reuters) - Tesla (TSLA.O) Chief Executive Officer Elon Musk said on Thursday he will not sell any more Tesla stock for about two years.\r\nWhile speaking in a Twitter Spaces audio chat, Musk sa… [+2749 chars]"
        }]

        constructor(){
            super();
            console.log("Niten");
            this.state = {
                articles:this.articles
            }
        }

        async componentDidMount(){
            console.log("hello");
            let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1edc34a324844c1e9e8aedea137e3549";
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles : parsedData.articles})
        }

  render() {
    console.log("render");

    return (
      <>
      <div className="container my-3">
<h3 className='text-center my-3'>Top Headlines</h3>

<div className="row">
{this.state.articles.map((element)=>{
    return <div className="col-md-4  my-2" key={element.url}>
<Newsitem title={element.title.slice(0,40)} description={element.description.slice(0,85)} imageUrl={element.urlToImage} url={element.url}/>
    </div>
})}

</div>
      
      </div>
      </>
    )
  }
}

export default News

