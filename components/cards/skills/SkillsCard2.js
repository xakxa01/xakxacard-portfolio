import { useContext } from 'react'
import InfoContext from '../../../context/InfoContext';
import useCardSkill from '../../../hook/useCardSkill';

export default function SkillsCard2() {
	const { iconArray } = useContext(InfoContext)
	const iconArrayImprintCard = iconArray.slice(6, 13);
	const card = useCardSkill(iconArrayImprintCard, 70)

	return card
}
