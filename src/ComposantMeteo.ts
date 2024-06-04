export  default class ComposantMeteo {
	static afficherMeteo(container: string, data: Meteo) {
		let table : string = `
        <table>
        <thead>
            <tr>
                <th>Jour</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
            </tr>
            </thead>
            <tbody>
                %s
            </tbody>
        </table>
        `;
		let tr : string = "";
		data.fcst.forEach((day) => {
			tr += `
            <tr>
                <td>${day.day_long}</td>
                <td>${day.condition}</td>
                <td>${day.tmin}</td>
                <td>${day.tmax}</td>
            </tr>
            `;
		});

		table = table.replace("%s", tr);
		document.querySelector(container).innerHTML = table;
	}
}