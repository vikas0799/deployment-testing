const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50c7bb8858msh266ff9325450134p130a35jsnfb3263b5bbf5',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};
(async ()=>{
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
