import React from 'react';
import ReactDOM from 'react-dom';
import {Parse} from 'parse';
import ParseReact from 'parse-react';
let ParseComponent = ParseReact.Component(React);

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

let style = {
	main: {
		flex: "1",
		color: "#333"
	}
};

export default class App extends ParseComponent {
	constructor(props) {
		super(props);
	}
	observe(props, state) {
		return {
			mngs: new Parse.Query('Message')
						.descending("createdAt")
		};
	}
	render() {
		let {mngs} = this.data;
		return (
			<div style={{
				display: "flex",
				minHeight: "100vh",
				flexDirection: "column"
			}}>
				<Header />
				<ul style={style.main}>
					{
						mngs.map((mng) => {
							return <li key={mng.objectId}> {mng.content} </li>;
							})
					}
				</ul>
				<Footer />
			</div>
		);
	}
};

ReactDOM.render(<App/>, document.getElementById("app"));
