async function fetchData() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }
  console.log("hello")
  fetchData();
  