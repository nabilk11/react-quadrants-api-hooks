import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";

import "./styles.scss";

const apiKey = "S0VVLw34GJnIpAZetlFRjhTF6VvgKD5h";
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;

function App() {
	const [apiData, setApiData] = React.useState([]);
	React.useEffect(() => {
		(async () => {
			const response = await fetch(fetchUrl);
			const incomingData = await response.json();
			setApiData(incomingData.data);
			console.log(apiKey);
			console.log(incomingData);
		})();
	}, []);

	return (
		<div className="main">
			<Section apiData={apiData} />
			<Section apiData={apiData} />
			<Section apiData={apiData} />
			<Section apiData={apiData} />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
