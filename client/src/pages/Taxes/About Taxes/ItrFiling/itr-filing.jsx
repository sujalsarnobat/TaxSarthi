import React from "react";
import "../AboutTaxes.css";
import Documents from "../../../../assets/itr-filing-01.png";

function ItrFiling() {
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
      <div className="blog-title">ITR Filing</div>
      <hr />
      <div className="blog-content">
        <div className="content-section">
          <div className="content-heading">
            What are the important documents required for filing ITRs?
          </div>
          <div className="content-paragraph">
            Income Tax Return (ITR) documents differ as per the earning sources
            of the tax filer. But, certain documents are mandatory for every
            taxpayer, irrespective of income sources. Here is a list of such
            common ITR documents that are required to file ITR in FY 2022-23 (AY
            2023-24)
          </div>
          <br />
          <div className="content-image">
            <img src={Documents} alt="" />
            <div className="image-caption">Documents for filing ITR</div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">1. Pan Card</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                This is the first and foremost prerequisite if you are filing an
                income tax return. PAN is also required to deduct TDS and should
                be linked with your bank account for direct credit of income tax
                refund (if any). It is issued by the Income Tax Department, and
                a salaried employee can find the PAN number either on a PAN
                card, Form 26AS, Form 16, Form 12BB, etc.
              </li>
              <li>
                However, as per the recent amendment by the Govt, taxpayers can
                also file the ITR with their Aadhaar number instead of their PAN
                number.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">2. Aadhaar Card</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                According to Section 139AA of the Income Tax Act, individuals
                need to provide his/her Aadhaar card details while filing the
                returns.
              </li>
              <li>
                If you do not have your Aadhaar card but have applied for the
                same, you must provide the enrolment ID in your IT returns.
              </li>
              <li>
                Linking PAN and Aadhar helps in verifying your income tax return
                online through an OTP.
              </li>
              <li>
                UIDAI issues Aadhar card. In case you have lost it or couldn’t
                find your Aadhaar card, then you can also download it online.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">3. Form 16</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                This form consists of the details of the employee's salary and
                the amount of TDS deducted from the salary. Form 16 consists of
                two different parts, Part A and Part B. Part-A contains the
                details of the amount of tax deducted by the employer during the
                financial year, along with the PAN and TAN details of the
                employer. The Part B of the form consists of TDS calculations
                like gross salary breakup, exempt allowances, perquisites, etc.
              </li>
              <li>
                Please note that Form 16 is issued by the employer. It is a
                vital document for filing ITR by a salaried individual. If you
                do not have Form 16, know how to file your ITR without Form 16.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">
            4. Form-16A/ Form-16B/ Form- 16C
          </div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                Form-16A is issued for TDS deducted on payments other than
                salaries, such as income from recurring deposits, fixed
                deposits, etc. If a person sells his property, then Form-16B is
                issued. It has details about TDS deducted from the amount paid
                to the seller. Form 16C is a TDS certificate that reflects the
                TDS deducted on rent @5% by an individual or HUF under section
                194IB.
              </li>
              <li>
                Form 16A is issued by deductors like banks, contractors, etc.
                Form 16B, on the other hand, is issued by the buyer. Further, a
                person deducting TDS on rent is required to furnish Form 16C to
                the payee within a period of 15 days from the date of furnishing
                the Challan cum statement in Form 26QC.
              </li>
              <li>
                The details of TDS can alternatively be fetched from your Form
                26AS
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">5. Bank Account details</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                Disclosures of all active bank accounts are mandatory in the
                ITR. Bank account details like your bank name, account number,
                IFSC, and number of accounts you hold must be quoted in the
                income return.
              </li>
              <li>
                Also, one account shall be selected as primary to assist the
                Income Tax Department in refunding your tax refund by electronic
                transfer to such account.
              </li>
              <li>
                Bank details are used to check your income disclosures,
                high-volume transactions, etc. These details can be easily found
                in the bank passbooks, cheque book, statements, net banking
                account’s etc.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">6. Bank Statement/ Passbook</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                Bank statements show the information of the interest earned on a
                savings account, interest income on fixed deposits etc, during a
                financial year, these information are required while filing ITR.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">7. Form 26AS and AIS/TIS</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                It is an annual tax statement like a tax passbook that has
                details of all the taxes you have deposited against your PAN.
                These include:
                <div className="content-ul alpha">
                  <li>TDS deducted by the bank</li>
                  <li>TDS deducted by the employer</li>
                  <li>
                    TDS deducted by other organizations from the payments done
                    by you
                  </li>
                </div>
              </li>
              <li>
                The individual should ensure that all the taxes deducted in the
                financial year are reflected against the PAN in Form-26AS. In
                case of a mismatch, you will not be able to claim the tax credit
                for the TDS deduction. Therefore, the same should be rectified
                by getting in touch with the deductor.
              </li>
              <li>
                You can view Form 26AS for the relevant Assessment Year by
                signing into your account on the Income Tax India e-filing
                website. Recently Annual Information Statement (AIS) app has
                been launched for the taxpayers where you can access all
                information related to TDS, TCS, interest etc, on one app.
              </li>
              <li>
                AIS : Annual Information Statement (AIS) is comprehensive view
                of information for a taxpayer displayed in Form 26AS. Taxpayer
                can provide feedback on information displayed in AIS. AIS shows
                both reported value and modified value (i.e. value after
                considering taxpayer feedback) under each section (i.e. TDS,
                SFT, Other information).
              </li>
              <li>
                TIS: Taxpayer Information Summary (TIS) is an information
                category wise aggregated information summary for a taxpayer. It
                shows processed value (i.e. value generated after deduplication
                of information based on pre defined rules) and derived value
                (i.e. value derived after considering the taxpayer feedback and
                processed value) under each information category (e.g. Salary,
                Interest, Dividend etc.). The derived information in TIS will be
                used for prefilling of return, if applicable.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">8. Home Loan Statement</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                The individuals are provided with the details like principal and
                interest that they repay in their loan statement. This breakup
                information is needed as proof and to provide information while
                filing your income tax returns.
              </li>
              <li>
                If the individual has taken a home loan from financial
                institutions like banks etc., then he/she should collect the
                statement for the last financial year.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">9. Tax Saving Instruments</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                If you have invested in any tax-saving schemes like tax-saving
                FDs, ELSS, investment receipts, etc., you should have the
                relevant documents ready when you file your taxes.
              </li>
              <li>
                If you have sold shares, securities, or property, it will result
                in a capital gain or losses. For the same, you need to have
                documents like broker statements, property sale deeds, etc.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">10. Rental Income</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                If you are earning an income from your house or property, it
                should be reported while filing ITR. Also, in case you are
                paying rent, don't forget to collect receipts from the landlord.
              </li>
              <li>
                However, these documents are not required to be given with the
                ITR but should be kept safe to be submitted to your employer or
                Income Tax Department in case required in the future.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">11. Foreign Income</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                The documents for any income earned in or from a foreign country
                during a job deployment or for part of the year should be
                furnished with your tax consultant to help you claim the benefit
                of tax credits and DTAA.
              </li>
              <li>
                The documents for any foreign income need to be arranged with
                the employer or contractor.
              </li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-subheading">12. Dividend Income</div>
          <div className="content-paragraph">
            <div className="content-ul">
              <li>
                If you have invested in shares or mutual funds and have earned
                dividend income on the same, it should be reported while filing
                your income tax return.
              </li>
              <li>
                Details of dividends earned during the financial year can be
                taken from your broker statement or Demat account sum.
              </li>
            </div>
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

export default ItrFiling;
