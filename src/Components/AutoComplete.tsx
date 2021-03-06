import React, { useState,useRef } from "react";
import "./AutoComplete.css";
import {StateModel,AutoCompleteProps} from './Type';


const AutoComplete: React.FunctionComponent<AutoCompleteProps> = (
    props
  ) => { 
  const [filteredData, setFilteredData] = useState<StateModel[]>([]);
  const [wordEntered, setWordEntered] = useState("");
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;


  const handleFilter = () => {
    const searchWord = inputRef.current.value;
    setWordEntered(searchWord);
    const newFilter =  props.data.filter((value: StateModel) => {
      return value.capital.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const onDataResultClickHandler = (searchWord: string) =>{
    setWordEntered(searchWord);
    setFilteredData([]);
  }
  return (
    
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={props.placeholder}
          value={wordEntered}
          ref={inputRef}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
                <p className="dataResultParagraph" key={value.id} onClick={() => onDataResultClickHandler(value.capital)}>
                {value.capital.substring(0,value.capital.toLowerCase().indexOf(inputRef.current.value.toLowerCase()))}
                <span className="highlight">{inputRef.current.value}</span>
                {value.capital.substring(value.capital.toLowerCase().indexOf(inputRef.current.value.toLowerCase())+inputRef.current.value.length ,value.capital.length)}
                </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;