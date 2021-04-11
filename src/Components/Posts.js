import React from 'react'
import ReactHtmlParser from 'react-html-parser'
export default function Posts(postData) {
    console.log(postData)
    var data=postData.postData
    var  dataShow=postData.postData.show
    var [score,showId,showName,language,summary]=[data.score,dataShow.id,dataShow.name,dataShow.language,dataShow.summary]
    // var styleInline={display: "inline"}

  
    return (
        <div className="border border-primary container">
           
            {/* <lable style={styleInline}>Score </lable>  */}
            <p  className="d-inline text-dark">SCORE </p> <p className="d-inline text-info">{score}</p>
            <br></br>
            <p  className="d-inline text-dark">SHOW NAME </p> <p className="d-inline text-info">{showName}</p>
            <br></br>
            <p  className="d-inline text-dark">LANGUAGE </p> <p className="d-inline text-info">{language}</p>
            <br></br>
            <p className="d-inline text-info">{ReactHtmlParser(summary)}</p>
           

        </div>
    )
}
