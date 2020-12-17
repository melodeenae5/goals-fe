import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const DailyChecklist = () => {
	const [dailyItems, setDailyItems] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'http://localhost:8000/list_items/',
		}).then((res) => {
			setDailyItems(res.data);
		});
	}, []);
	if (!dailyItems) {
		return <div>Loading...</div>;
	}
	return <div>daily items</div>;
};

export default DailyChecklist;
