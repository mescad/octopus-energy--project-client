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
import "./Chart.scss";

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
			const thisTime = usage.readAt;
			const consumptionDelta = usage.consumptionDelta;
			const renewable = consumptionDelta * Number(usage.renewable);
			const nonRenewable = consumptionDelta * Number(usage["non-renewable"]);
			const hour = moment(thisTime).hour();
			const hourIndex = labels.indexOf(hour);
			const labelLength = labels.length;
			if (hourIndex === -1) {
				labels.push(hour);
				renewableData.push(renewable);
				nonRenewableData.push(nonRenewable);
			}
			if (hourIndex !== -1) {
				renewableData[labelLength - 1] =
					renewableData[labelLength - 1] + renewable;
				nonRenewableData[labelLength - 1] =
					nonRenewableData[labelLength - 1] + nonRenewable;
			}
		});

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
		color: "white",
		scales: {
			x: {
				stacked: true,
				grid: {
					display: false,
				},
				ticks: { color: "white", beginAtZero: true },
			},
			y: {
				stacked: true,
				grid: {
					display: false,
				},
				ticks: { color: "white", beginAtZero: true },
			},
		},
		elements: {
			bar: {
				borderRadius: 4,
			},
		},
	};

	if (isLoading) {
		return;
	}

	return (
		<div className="chart-wrapper">
			<div className="chart">
				<Bar options={options} data={chartData} />
			</div>
		</div>
	);
}

export default Chart;
