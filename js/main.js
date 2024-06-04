import { ServiceMeteo } from "./ServiceMeteo.js";
import { ComposantMeteo } from "./ComposantMeteo.js";

window.onload = () => {
	document.querySelector("button").addEventListener("click", () => {
		console.log("bip boop");
		let ville = document.getElementById("ville").value;
		ServiceMeteo.getData(ville, (data) => {
			console.log(data);
			ComposantMeteo.afficherMeteo("#prev", data);
		});
	});
};
