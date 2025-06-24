import React from "react";
import "./AboutTaxes.css";
// import testimg from "../../../assets/blog-images/Tax8.jpg";
import Card from "../../../components/mis/Card/Card";

function AboutTaxes() {
  return (
    <section className="blog-container">
      <div className="blog-header">
        <div className="blog-author">
          <div className="blog-author-profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg"
              alt="TaxSarthi"
            />
          </div>
          <div className="blog-author-name">TaxSarthi</div>
        </div>
        <div className="blog-date">12 July, 2023</div>
      </div>
      <hr />
      <div className="blog-title">A Beginner's Guide to Taxes</div>
      <hr />
      <div className="blog-content">
        <div className="content-section">
          <div className="content-heading">What are taxes?</div>
          <div className="content-paragraph">
            Taxes are an integral part of our lives, shaping economies and
            funding public services. But for many, they remain a daunting and
            often confusing subject. Fear not! We're here to break it down for
            you. In this introductory post, we'll cover the basics. First and
            foremost, what are taxes? Taxes are compulsory financial
            contributions imposed by governments on individuals and businesses
            to fund public expenditures. These expenditures can range from
            infrastructure development to social welfare programs, education,
            healthcare, and more.
          </div>
        </div>
        <div className="content-section">
          <div className="content-paragraph">
            <div className="content-subheading">Types of Taxes</div>
            <div className="content-ul numbered">
              <li>
                Income Tax: Perhaps the most familiar form of taxation, income
                tax is levied on the earnings of individuals and businesses. The
                amount you pay typically depends on your income level, with
                different tax brackets applying to different income ranges.
              </li>
              <li>
                Sales Tax: Also known as consumption tax, sales tax is imposed
                on the sale of goods and services. It's usually a percentage of
                the purchase price and is collected by the seller at the point
                of sale.
              </li>
              <li>
                Property Tax: Property tax is based on the value of real estate
                owned by individuals or businesses. It's a significant source of
                revenue for local governments and is used to fund public
                services like schools and infrastructure.
              </li>
              <li>
                Corporate Tax: This tax is levied on the profits of
                corporations. The rate varies depending on the country and can
                have a significant impact on a company's bottom line.
              </li>
              <li>
                Value Added Tax (VAT): Common in many countries, VAT is a type
                of consumption tax that's levied on the value added at each
                stage of production or distribution of goods and services.
              </li>
              Understanding your tax obligations is crucial, but it's also
              essential to know your rights and available deductions and
              credits. Deductions and credits can help lower your taxable income
              or reduce the amount of tax you owe.
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-paragraph">
            Delve deeper into learning Taxes and start filing them using
            resources below :{" "}
          </div>
          <section id="blog-suggestions">
            <div className="cards-container">
              <Card
                title="What are taxes?"
                body="Get a deeper understand about taxes."
                useNavigateTo="/taxes/what-are-taxes"
              />
              <Card
                title="ITR Filing"
                body="Get started with filing your own ITRs."
                useNavigateTo="/taxes/itr-filing"
              />
              <Card
                title="Smart Savings"
                body="Explore Instruments to start saving big."
                useNavigateTo="/taxes/save-taxes"
              />
            </div>
          </section>
        </div>
      </div>
      <hr />
      <div className="blog-footer">
        <div className="blog-author">
          <div className="blog-author-profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Dollar_sign_in_circle_cleaned_%28PD_version%29.green.svg"
              alt="TaxSarthi"
            />
          </div>
          <div className="blog-author-name">TaxSarthi</div>
        </div>
        <div className="next-button">
          <button>Next</button>
        </div>
      </div>
    </section>
  );
}

export default AboutTaxes;
