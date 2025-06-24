import React from "react";
import "../AboutTaxes.css";
import DedAndExem from "../../../../assets/save-taxes-02.png";

function SaveTaxes() {
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
      <div className="blog-title">
        Simple Ways to Save Money in India Through Tax Planning
      </div>
      <hr />
      <div className="blog-content">
        <div className="content-section">
          <div className="content-heading">
            Investing in Tax-Saving Instruments
          </div>
          {/* <div className="content-image">
            <img src={TaxInstruments} alt="" />
            <div className="image-caption">Tax Saving Instruments</div>
          </div> */}
          <div className="content-paragraph">
            India offers several tax-saving investment options under Section 80C
            of the Income Tax Act. These investments not only help you save
            taxes but also provide avenues for wealth creation over time. Here
            are some key tax-saving instruments:
            <div className="content-ul">
              <li>
                Public Provident Fund (PPF): PPF is a long-term savings scheme
                that offers tax benefits. Contributions to PPF are eligible for
                a deduction of up to Rs. 1.5 lakh per year under Section 80C.
                The interest earned and the final maturity amount are tax-free.
              </li>
              <li>
                Employee Provident Fund (EPF): EPF is a mandatory retirement
                savings scheme for salaried employees. Both your and your
                employer's contributions to EPF are eligible for tax benefits
                under Section 80C.
              </li>
              <li>
                National Savings Certificate (NSC): NSC is a fixed-income
                investment with a lock-in period of 5 years. The interest earned
                is taxable, but the initial investment qualifies for a Section
                80C deduction.
              </li>
              <li>
                Tax-Saving Fixed Deposits: Many banks offer tax-saving fixed
                deposits with a lock-in period of 5 years. The interest earned
                on these deposits is taxable, but the principal amount is
                eligible for a Section 80C deduction.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-heading">
            Utilize Tax Deductions and Exemption
          </div>
          <div className="content-image">
            <img src={DedAndExem} alt="" />
            <div className="image-caption">Deductions and Exemptions</div>
          </div>
          <div className="content-paragraph">
            In addition to Section 80C, there are several other sections under
            the Income Tax Act that offer deductions and exemptions. Here are a
            few examples:
            <div className="content-ul">
              <li>
                Home Loan Interest (Section 24): If you have a home loan, you
                can claim deductions on the interest paid on the loan under
                Section 24. The maximum deduction limit is Rs. 2 lakh per year
                for a self-occupied property.
              </li>
              <li>
                Health Insurance Premium (Section 80D): Premiums paid for health
                insurance policies for yourself, your spouse, children, and
                parents are eligible for deductions under Section 80D. The
                maximum deduction limit varies depending on the age of the
                insured individuals and the type of policy.
              </li>
              <li>
                Education Loan Interest (Section 80E): If you have taken an
                education loan for higher studies, you can claim a deduction on
                the interest paid under Section 80E. This deduction is available
                for a maximum of 8 years.
              </li>
              <li>
                House Rent Allowance (HRA): If you are living in a rented house
                and receive HRA as part of your salary, you can claim exemptions
                under Section 10(13A) on the HRA received. The amount of
                exemption is calculated based on certain conditions.
              </li>
              <li>
                Long-Term Capital Gains (LTCG): If you invest in specified
                long-term assets like equity shares and mutual funds, you can
                enjoy tax exemptions on LTCG under Section 10(38) if certain
                conditions are met.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-heading">Plan for Retirement with NPS</div>
          <div className="content-paragraph">
            The National Pension System (NPS) is a government-sponsored
            retirement savings scheme that offers tax benefits:
            <div className="content-ul">
              <li>
                <u>Section 80CCD(1)</u>: You can claim deductions of up to 10%
                of your salary (for salaried individuals) or 20% of your gross
                income (for self-employed individuals) for contributions made to
                NPS, subject to a maximum of Rs. 1.5 lakh under Section
                80CCD(1).
              </li>
              <li>
                <u>Section 80CCD(2)</u>: If your employer contributes to your
                NPS account, the employer's contribution of up to 10% of your
                salary is eligible for a separate deduction under Section
                80CCD(2).
              </li>
            </div>
            <br />
            NPS provides an opportunity to build a retirement corpus while
            enjoying tax benefits. It allows you to choose between equity
            (higher risk) and debt (lower risk) investments based on your risk
            tolerance and retirement goals. <br />
            <br />
            Keep in mind that tax laws can change, so it's essential to stay
            updated and consider consulting a tax advisor or financial planner
            to create a customized tax-saving plan that aligns with your
            financial goals and takes advantage of the latest tax-saving
            opportunities in India.
          </div>
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

export default SaveTaxes;
