import { useContext } from 'react'
import InfoContext from '../../../context/InfoContext';
import useCardSkill from '../../../hook/useCardSkill';

export default function SkillsCard1() {
	const { iconArray } = useContext(InfoContext)
	const iconArrayImprintCard = iconArray.slice(0, 6);
	const card = useCardSkill(iconArrayImprintCard, 70)
	return card
}
