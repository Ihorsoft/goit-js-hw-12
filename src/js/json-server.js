import "../css/styles.css";
import axios from "axios";

const fetchPosts = async() => {
console.log("Hello World");
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=2&_page=50");
        	
console.log("Posts: ", response.data);
return response;

};
console.log("prepear run ");
fetchPosts().then(data => console.log("after axios", data)).catch(error => colsole.error(error));


// const BASE_URL = "http:/lockalhost:3001/todos";
