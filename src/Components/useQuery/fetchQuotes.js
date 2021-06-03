const fetchQuotes = async ({ queryKey }) => {
    const [, baseURL, name] = queryKey;
  
    const res = await fetch(`${baseURL}${name}`);
    return res.json();
  };
  
  export default fetchQuotes;