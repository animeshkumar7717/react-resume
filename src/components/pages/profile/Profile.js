import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Animesh kumar' />
					<Link to="#" className="btn-floating halfway-fab waves-effect waves-light blue">
						<i className="material-icons activator">more_vert</i>
					</Link>
									
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						MERN Developer
					</span>
					<p>Full Stack Web Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<a href='https://www.facebook.com/animesh.kumar.140/' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						</a>
						<a href='https://github.com/animeshkumar7717' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-github grey-text text-darken-4 social_style'></i>
						</a>					
						<a href='https://www.linkedin.com/in/animeshkumar77/' target='_blank' rel='noopener noreferrer'>
						  <i className='fab fa-linkedin-in grey-text text-darken-4 social_style'></i>
						</a>
						<a href='https://www.instagram.com/animeshkumar341/' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						</a>
						<a href='https://in.pinterest.com/animeshkumar341/' target='_blank' rel='noopener noreferrer'>
							<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
