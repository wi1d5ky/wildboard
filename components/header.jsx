import React from "react";
import ParseReact from 'parse-react';
import PureComponent from 'react-pure-render/component';

let style = {
	header: {
		padding: "1rem",
		backgroundColor: "#FAFAFA"
	},
	title: {
		display: "inline-block",
		margin: "0 .5rem",
		fontFamily: "Raleway",
		color: "#666",
		lineHeight: "3rem",
		fontSize: "2rem"
	},
	form: {
		display: "inline-block",
		verticalAlign: "top",
		padding: ".5rem 0",

		input: {
			margin: "0 .5rem",
			padding: "0.2rem",
			lineHeight: "1.5rem",
			fontSize: "1rem",
			verticalAlign: "top"
		}
	}
};

export default class Header extends PureComponent {
	addPost(event) {
		event.preventDefault();
		let message = {
			content: this.refs.content.value
		};
		ParseReact.Mutation.Create("Message", message).dispatch();
		this.refs.content.value = "";
	}
	render() {
	return <header style={style.header}>
				<h1 style={style.title}>
					Wildboard
				</h1>
				<form style={style.form} onSubmit={this.addPost.bind(this)}>
					<input type="text" style={style.form.input} ref="content"/>
					<input type="submit" value="送出" style={style.form.input} />
				</form>
			</header>;
	}
};

