
import useCardPortfolio from "../../../hook/useCardPortfolio";

export default function MelaniCard() {
	const card = useCardPortfolio(
		"portafolio de meliani",
		"/assets/images/img3.png",
		'https://github.com/xakxa01/portafolio-de-disenadora',
		"https://portafolio-de-disenadora.vercel.app/",
	);

	return card
}
