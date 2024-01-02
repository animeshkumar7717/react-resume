import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Certification() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Institute</th>
								<th>Course</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Sinhgad Institute of Technologies</td>
								<td>B.Tech (Computer Science)</td>
								<td>2017 - 2021</td>
							</tr>
							<tr>
								<td>R.P.S College Patna</td>
								<td>HSC (BSEB)</td>
								<td>
									2014 - 2016
								</td>
							</tr>
							<tr>
								<td>React</td>
								<td>SSC (CBSE)</td>
								<td>
									2013 - 2014
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
