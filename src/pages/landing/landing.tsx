import { FC } from 'react'
import Cover from '../../components/Cover/Cover'
import SponsorLine from '../../components/SponsorLine/SponsorLine'
import Services from '../../components/Services/Services'

const Landing:FC = () => {
	return (
		<>
			<Cover />
			<SponsorLine />
			<Services />
		</>
	)
}

export default Landing