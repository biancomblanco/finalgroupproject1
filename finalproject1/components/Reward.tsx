"use client";
import { Button } from '@nextui-org/react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export const Reward = () => {
	
	return (

		<>
			
		<section className="reward">

			<div >
				
				<Image
					src="/coffeecup.png"
					width={188}
					height={512}
					alt="reward picture"
					
				/>
			</div>
			<div className="reward-content">
				<h1 className="reward-title font-head">Loyalty</h1>
				<p className="reward-description font-column">
				Get Discounted Prices or Free Items by placing frequent orders with us.
				</p>
				<h1 className="reward-title font-head">Community</h1>
				<p className="reward-description font-column">
				Join an embracing community that will generate the best connections possible.
				</p>
				<h1 className="reward-title font-head">Outreach</h1>
				<p className="reward-description font-column">
				Keep up to date with any organizations we have partnered with to give back.
				</p>
				
			</div>
			<div className="reward-content2">
				<h1 className="reward-title font-head">What Can I Earn?</h1>
				<ul>
				    <li><FontAwesomeIcon icon={faSun} color="yellow" /> <span className='reward-description font-column'>25 Warmth - Free Size Upgrade</span></li>
					<li><FontAwesomeIcon icon={faSun} color="yellow" /> <span className='reward-description font-column'>100 Warmth - 50% Off Next Drink</span></li>
					<li><FontAwesomeIcon icon={faSun} color="yellow" /> <span className='reward-description font-column'>250 Warmth - Free Drink Item on Us</span></li>
					<li><FontAwesomeIcon icon={faSun} color="yellow" /><span className='reward-description font-column'> 2000 Warmth - Free Bulk Coffee on Us</span></li>
					<li><FontAwesomeIcon icon={faSun} color="yellow" /> <span className='reward-description font-column'>4000 Warmth - Free Merchandise Item on Us</span></li>
				</ul>
				<p className="reward-description font-column">Become a cherished member of our community and enjoy exclusive rewards. Join our loyalty program today and start savoring the benefits!</p>
				<Button className="reward-button font-column font-bold">
					Reward Yourself
				</Button>				
			</div>

		</section>
		</>
	);
};
