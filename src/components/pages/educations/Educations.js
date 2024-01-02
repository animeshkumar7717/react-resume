import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>CERTIFICATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>The MongoDB Aggregation Framework</td>
								<td>April 2022</td>
								<td>
								<td>
									<a href='https://university.mongodb.com/course_completion/537009d8-22bc-4fa0-bec2-b56dd9522c37' target='_blank' rel='noopener noreferrer' className='btn blue lighten-2'>
										View
									</a>	
								</td>
								</td>
							</tr>
							<tr>
								<td>MongoDB for JavaScript Developer</td>
								<td>April 2022</td>
								<td>
									<a href='https://university.mongodb.com/course_completion/e8003d9f-b309-4c47-951d-3427d2addecf' target='_blank' rel='noopener noreferrer' className='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>React</td>
								<td>Nov 2022</td>
								<td>
									<a href='https://www.udemy.com/certificate/UC-676830cb-8684-4b0b-a0f1-927637858286/' target='_blank' rel='noopener noreferrer' className='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>Node</td>
								<td>Sep 2022</td>
								<td>
									<a href='https://www.udemy.com/certificate/UC-fb6cd257-baca-4b01-8630-068dc5191fb2/' target='_blank' rel='noopener noreferrer' className='btn blue lighten-2'>
										View
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
