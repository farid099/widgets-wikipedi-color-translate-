import React, { useState, useEffect } from "react";
import wikipedi from "../apis/wikipedi";

export default function SearchBox() {
  const [letter, setLetter] = useState("");
  const [text,setText] = useState(letter)
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
        setText(letter);
      }, 700);
      return () => {
          clearTimeout(interval);
      }
  }, [letter])

  useEffect(() => {

    const search = async () => {
      const {data} = await wikipedi.get("", {
        params: {
          srsearch: text,
        },
      });
      setData(data.query.search);
    };

    if(letter){
        search();
    }else{
        setData([])
    }
  }, [text]);



  const renderedData = data.map((wiki) => {
    return (
      <div key={wiki.pageid} style={{margin:"15px"}} className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <a
            href={`https://en.wikipedia.org?curid=${wiki.pageid}`}
            target="_blank"
            rel="noreferrer"
            className="header"
          >
            {wiki.title}
          </a>
          <div className="description">
          <span dangerouslySetInnerHTML={{ __html: wiki.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={letter}
            onChange={(e)=>setLetter(e.target.value)}
            className="input"
            type="text"
            placeholder="Common passwords..."
          ></input>
        </div>
      </div>
      <div className="ui relaxed divided list">{renderedData}</div>
    </div>
  );
}
