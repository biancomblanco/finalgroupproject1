"use client";
import { Button, Link } from '@nextui-org/react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';


export const Community = () => {
	
	return (

		<>
            <section className="community-title-container">
                <h1 className="community-title font-head">Contribute to Your Community</h1>
            </section>
            <section className="community">

                <div className="community-content">
                    <p className="community-description font-column">
                        We have cared for our coffee through its complete life-cycle, selecting and roasting
                        the best coffee beans for your pleasure. Purchase a cup of coffee now and feel
                        the warmth we have imbued into every cup. Join our community today!
                    </p>
                    <Link href="/Partnerships">
                    <Button className="cta-button font-column" >
                        Our Active Partnerships
                    </Button>
                    </Link>
                </div>
                <div className="relative col-span-6 md:col-span-4">

                    <Image
                        src="/community-image.webp"
                        width={637}
                        height={378}
                        alt="community picture"
                        className='object-cover'

                    />
                </div>

            </section>
		</>
	);
};
