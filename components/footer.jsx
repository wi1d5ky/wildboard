import React from "react";
import PureComponent from 'react-pure-render/component';

let style = {
	footer: {
		padding: ".25rem",
		display: "block",
		background: "#343434",
		textAlign: "center",
		color: "#fff"
	},
	link: {
		margin: "0 .25rem",
		color: "#fff",
		textDecoration: "none"
	}
}

export default class Footer extends PureComponent {
	render() {
		return <footer style={style.footer}>
			<a href="https://github.com/wi1d5ky" style={style.link}>Wildsky</a>
			&copy;
			<a href="https://github.com/wi1d5ky/wildboard/blob/master/LICENSE" style={style.link}>MIT</a>
			</footer>;
	}
};
