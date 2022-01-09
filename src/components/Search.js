import React, { useEffect, useState } from 'react';

/**
 * Don't touch these imports!
 */
import { 
  fetchAllCenturies,
  fetchAllClassifications,
  fetchQueryResults
} from '../api';

const Search = (setIsLoading, setSearchResults) => {
  // Make sure to destructure setIsLoading and setSearchResults from the props
  const { setIsLoading, setSearchResults } = props;

  /**
   * We are at the Search component, a child of app. This has a form, so we need to use useState for
   * our controlled inputs:
   * 
   * centuryList, setCenturyList (default should be an empty array, [])
   * classificationList, setClassificationList (default should be an empty array, [])
   * queryString, setQueryString (default should be an empty string, '')
   * century, setCentury (default should be the string 'any')
   * classification, setClassification (default should be the string 'any')
   */

  const [centuryList, setCenturyList] = useState([]);
  const [classificationList, setClassificationList] = useState([]);
  const [century, setCentury] = useState("any");
  const [classification, setClassification] = useState("any");


  /**
   * Inside of useEffect, use Promise.all([]) with fetchAllCenturies and fetchAllClassifications
   * 
   * In the .then() callback pass the returned lists to setCenturyList and setClassificationList
   * 
   * Make sure to console.error on caught errors from the API methods.
   */
  useEffect(() => {
    consr getCenturiesAndClassifications = async () => {
      const centuries = await fetchAllCenturies();
      const classifications = await fetchAllClassifications();
      setCenturyList(centuries);
      setClassificationList(classifications);
    };
    getCenturiesAndClassifications();
  }, []);

  /**
   * This is a form element, so we need to bind an onSubmit handler to it which:
   * 
   * calls event.preventDefault()
   * calls setIsLoading, set it to true
   * 
   * then, in a try/catch/finally block:
   * 
   * try to:
   * - get the results from fetchQueryResults({ century, classification, queryString })
   * - pass them to setSearchResults
   * 
   * catch: error to console.error
   * 
   * finally: call setIsLoading, set it to false
   */
  return (
    <form
    id="search"
    onSubmit={async (event) => {
      // write code here
      event.preventDefault();
      setIsLoading(true);

      try {
        const searchResults
      }
    }}
  );
    // write code here


export default Search;