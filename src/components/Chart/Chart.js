import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dataJson from "../../assets/data/user-consumption.json";
import moment from "moment/moment";

function Chart() {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const [isLoading, setIsLoading] = useState(true);
	const [chartData, setChartData] = useState(null);

	useEffect(() => {
		const usages = dataJson.data.smartMeterTelemetry;
		let labels = [];
		let renewableData = [];
		let nonRenewableData = [];
		usages.forEach((usage) => {
			console.log(usage);
			const thisTime = usage.readAt;
			const consumptionDelta = usage.consumptionDelta;
			const renewable = consumptionDelta * Number(usage.renewable);
			const nonRenewable = consumptionDelta * Number(usage["non-renewable"]);
			const hour = moment(thisTime).hour();
			const hourIndex = labels.indexOf(hour);
            const labelLength = labels.length;
			console.log(hourIndex);
			if (hourIndex === -1) {
				labels.push(hour);
				renewableData.push(renewable);
				nonRenewableData.push(nonRenewable);
			}
			if (hourIndex !== -1) {
                renewableData[labelLength-1] = renewableData[labelLength-1] + renewable;
                nonRenewableData[labelLength-1] = nonRenewableData[labelLength-1] + nonRenewable;
			}
		});
		console.log(labels);

		setChartData({
			labels,
			datasets: [
				{
					label: "Renewable Energy",
					data: renewableData,
					backgroundColor: "#F050F8",
				},
				{
					label: "Non-renewable Energy",
					data: nonRenewableData,
					backgroundColor: "#600E6B",
				},
			],
		});

		setIsLoading(false);
	}, []);

	const options = {
		plugins: {
			title: {
				display: false,
			},
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	};

	if (isLoading) {
		return;
	}

	return <Bar options={options} data={chartData} />;
}

export default Chart;
