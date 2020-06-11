import { useState } from "react";

//=============================================================//
// key : Passed a number to retireve nth key of a localStorage //
//=============================================================//
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {

    //=============================================================//
    //  getItem() : Retrieve a value by the key from localStorage. //
    //              Allows you to access the data stored in the    //
    //              browsers localStorage object.                  //
    //              Takes in only one parameter: a key.            //
    //               And returns the value as a string             //      
    //=============================================================//
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  //===============================================//
  // setItem() : Add key and value to localStorage //
  //             Allows you to store values in the //
  //             localStorage object               //
  //===============================================//
  const setValue = (value) => {
    setStoredValue(value);
    // setItem takes in two parameters: key and a value
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};


//===============================================================================================//
// NOTES :                                                                                       //
// setItem:                                                                                      //
// * localStorage can only store strings                                                         //
// * To store arrays or objects you would have to convert to strings                             //
//      - use JSON.stringify() method before passing to setItem()                                //
//      - Example: window.localStorage.setItem('user', JSON.stringify(person));                  //
// getItem:                                                                                      //
// * returns string but to use this value, you would have to convert it back to and object       //
//      - Example: JSON.parse(window.localStorage.getItem('user'));                              //
//===============================================================================================//