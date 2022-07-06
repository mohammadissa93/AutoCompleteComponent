import React, { useState } from "react";
import "./AutoComplete.css";
import {StateModel,AutoCompleteProps} from './Type';


const AutoComplete: React.FunctionComponent<AutoCompleteProps> = (
    props
  ) => { 
  const [filteredData, setFilteredData] = useState<StateModel[]>([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
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
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
                <p className="dataResultParagraph"
                    key={value.id}
                    onClick={() => onDataResultClickHandler(value.capital)}
                 >
                {value.capital}
                </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;