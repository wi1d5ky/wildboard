import React from "react";
import PureComponent from 'react-pure-render/component';

let style = {
	footer: {
		padding: ".25rem",
		display: "block",
		background: "#343434",
		textAlign: "center",
		color: "#fff"
	}
}

export default class Footer extends PureComponent {
	render() {
		return <footer style={style.footer}> Wildsky &copy; MIT</footer>;
	}
};
