import React from 'react';
import {Link} from "@nextui-org/react";

const BulkBrew = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-white mb-4">Bulk Brew Coffee Options</h1>
      
      <p className="mb-4 text-white">
        Welcome to our selection of bulk brew coffee. At Cafe Casero ViBi, we take pride in offering high-quality coffee options for businesses, events, and coffee lovers who wish to enjoy our unique flavors in the comfort of their homes or workplaces.
      </p>

      <section className="mb-4 text-white">
        <h2 className="text-xl font-semibold">Our Coffees</h2>
        <p>
          We offer a variety of blends and roasts, each carefully selected and roasted to ensure freshness and exceptional flavor. From intense and robust flavors to softer and aromatic blends, we have options for every palate.
        </p>
      </section>

      <section className="mb-4 text-white">
        <h2 className="text-xl font-semibold">Orders and Pricing</h2>
        <p>
          You can place your bulk coffee orders directly by contacting us via phone or email. We offer competitive pricing and discounts on large orders.
        </p>
      </section>

      <section className="mb-4 text-white">
        <h2 className="text-xl font-semibold">Customization and Private Labeling</h2>
        <p>
          Interested in customizing your order or in private label options? We can work with you to develop a tailored solution that meets your specific needs.
        </p>
      </section>

      <section className="mb-4 text-white">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <p>
          For more information or to place an order, please contact us at:
          <br />
          Email: sales@yourcoffeeshop.com
          <br />
          Phone: 123-456-7890
        </p>
      </section>
      <Link href="/" color="primary">Return to the main page</Link>
    </div>
  );
};

export default BulkBrew;
