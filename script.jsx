import React from 'react';
import {Parse} from 'parse';
import {applications as config} from './config/global.json';
const { applicationId, javascriptKey } = config.rehouse;

document.addEventListener("DOMContentLoaded", () => {
	Parse.initialize(applicationId, javascriptKey);
	React.createFactory(require('./app.jsx'));
});

