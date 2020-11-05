import React, { useState } from "react";
import Convert from "./Convert";
import Dropdowns from "./Dropdowns";

export default function Translate() {
  const options = [
    {
        label: 'Azerbaijani',
        value: 'az',
      },
      {
        label: 'Turkish',
        value: 'tr',
      },
      {
        label: 'Russian',
        value: 'ru',
      },
      {
        label: 'German',
        value: 'de',
      },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [text, setText] =useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdowns
        label="Select a language"
        options={options}
        changeOption={setSelectedLanguage}
        selected={selectedLanguage}
      />
            <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={selectedLanguage}/>
    </div>
  );
}
