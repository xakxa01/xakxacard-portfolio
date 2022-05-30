import { useContext } from 'react'
import InfoContext from '../../../context/InfoContext';
import useCardHabilidades from '../../../hook/useCardHabilidades';
export default function HabilidadesCard1() {

	const { iconArray } = useContext(InfoContext)
	const iconArrayImprintCard = iconArray.slice(0, 6);
	const card = useCardHabilidades(iconArrayImprintCard, 70)

	return card
}
