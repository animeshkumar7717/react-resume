import React, { Component } from 'react';
import Profile from './profile/Profile';
import About from './about/About';
import Skills from './skills/Skills';
import Experiences from './experiences/Experiences';
import Educations from './educations/Educations';
import Certification from './certification/Certification';

export default class Home extends Component {
	render() {
		return (
			<section>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Experiences />
							<Certification />
							<Skills />
							<Educations />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
