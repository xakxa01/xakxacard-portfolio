
import useCardPortfolio from "../../../hook/useCardPortfolio";

export default function AnteriorPortafolio() {
	const card = useCardPortfolio(
		"anterior portafolio",
		"/assets/images/img2.png",
		'https://github.com/xakxa01/portafolio',
		"https://anteriorportafolio.vercel.app/",
	);

	return card
}

