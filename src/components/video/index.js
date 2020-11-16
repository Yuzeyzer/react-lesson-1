import React from 'react'
import './style.scss'

const video = () => {
	return (
		<section className="video">
			<div className="video__content">
				<iframe className="video__iframe" src="https://www.youtube.com/embed/07SFDUWYzzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</section>
	)
}

export default video
