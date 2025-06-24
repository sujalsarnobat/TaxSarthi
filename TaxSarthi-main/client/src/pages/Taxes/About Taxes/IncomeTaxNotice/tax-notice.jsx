import React from "react";
import { useNavigate } from "react-router-dom";
import "../AboutTaxes.css";
import NoticeReasons from "../../../../assets/tax-notice-01.png";
import SampleMail from "../../../../assets/tax-notice-02.png";

function TaxNotice() {
  const navigate = useNavigate();
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
      <div className="blog-title">Income Tax Notice</div>
      <hr />
      <div className="blog-content">
        <div className="content-section">
          <div className="content-heading">
            What is the Purpose of an Income Tax Notice?
          </div>
          <div className="content-paragraph">
            An income tax notice may be issued for the following reasons :{" "}
          </div>
          <div className="content-image">
            <img src={NoticeReasons} alt="" />
            <div className="image-caption">
              Reasons for an Income Tax Notice
            </div>
          </div>
          <div className="content-paragraph">
            For other reasons as the assessing officer might deem fit.
          </div>
        </div>
        <div className="content-section">
          <div className="content-heading">
            What should be done after receiving an income tax notice?
          </div>
          <div className="content-paragraph">
            When you receive an ITR notice under any of the aforementioned
            sections, the following steps should be taken :
            <div className="content-ul numbered">
              <li>
                Read the notice thoroughly to find out why it has been sent
              </li>
              <li>
                Check the basic details on the notice to ensure that the notice
                is meant for you. The notice should contain your correct name,
                PAN number, address, etc., to authenticate that it is sent to
                you. Also, check the assessment year mentioned in the ITR
                notice.
              </li>
              <li>
                Find out the discrepancy in your income tax return that caused a
                notice to be served, if any.
              </li>
              <li>
                Respond to the ITR notice within the stipulated time period to
                avoid penalties and prosecutions.
              </li>
              <li>
                Ensure that your response is backed by adequate information.
              </li>
              <li>
                Also, make sure to check the notice that you have received is
                reflected in your income tax account online.
              </li>
              <li>Take expert help.</li>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="content-heading">
            What documents are required to reply to an Income Tax Notice?
          </div>
          <div className="content-paragraph">
            The type of documents required for replying to an income tax notice
            depends on the type of notice received. Here are some basic
            documents that are common to every notice -
            <div className="content-ul">
              <li>The Income Tax Notice copy.</li>
              <li>
                Proof of Income source such as (Part B ) of Form 16, Salary
                receipts, etc.
              </li>
              <li> TDS certificates, Form 16 (Part A) Investment</li>
              <li>Proof if they are applicable.</li>
            </div>
          </div>
          <div className="content-section">
            <div className="content-paragraph">
              <b>Notice under section 142(1) : </b>
              <br />
              <br />
              <i>What is section 142(1) of the Income-tax Act? </i>
              <br />
              Section 142(1) of the Income-tax act 1961 empowers Income-tax
              authorities to issue a notice for more clarification or for
              further details about where a return has been filed or if the
              return has not been filed, then to furnish the required
              information in a prescribed manner.
              <br />
              <br />
              <i>When is the Notice under section 142(1) issued?</i> <br />
              Notice u/s 142(1) can be issued in both cases, where you file your
              income tax return u/s 139 (1) and also in the case you do not file
              your income tax return u/s 139 (1) and time specified to file a
              such return has been expired. However, Assessing Officer shall
              only require the production of accounts or information relating to
              a period of three years before the previous year.
            </div>
          </div>
          <div className="content-section">
            <div className="content-heading">Purpose of Notices: </div>
            <div className="content-paragraph">
              Notice u/s 142(1) is issued by the Income Tax Department for:
              <div className="content-ul numbered">
                <li>
                  <u>Filing of Income Tax Return:</u> <br />
                  If you’ve not filed your return within the specified period or
                  before the end of the relevant assessment year, you might
                  receive Notice u/s 142(1) asking you to file your return.
                </li>
                <li>
                  <u>Producing specific accounts and documents:</u> <br /> After
                  you’ve filed your income tax return, your Assessing Officer
                  (AO) may ask you to produce such specific accounts and
                  documents as required by him by way of Notice u/s 142(1). For
                  example, you might be required to produce your purchase books,
                  sales books, or proofs of any deductions availed by you, etc.
                </li>
                <li>
                  <u>
                    Any other information, notes, or workings as desired by the
                    AO:
                  </u>
                  <br />
                  The assessing officer may require you to furnish in writing
                  and in the prescribed manner the information, notes, or
                  workings on specific points as required by him, which may or
                  may not form part of books of accounts. For example, A
                  statement of your assets and liabilities.
                </li>
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="content-heading">
              Penalty for Non-Compliance of Section 142(1) Tax Notice:
            </div>
            <div className="content-paragraph">
              If you don’t comply with Notice u/s 142(1), then:
              <div className="content-ul">
                <li>
                  A penalty of Rs 10,000 can be imposed on you u/s 271(1) (b).
                </li>
                <li>
                  Your case can fall under “Best Judgement Assessment” u/s 144,
                  where the assessment will be carried out as per the best
                  judgment of the Assessing Officer on the basis of all the
                  relevant material he gathered.
                </li>
                <li>
                  You can be prosecuted u/s 276D for up to 1 year with or
                  without a fine.
                </li>
                <li>
                  A warrant may also be issued u/s 132 for conducting a search.
                </li>
              </div>
              <br />
              <u>Sample email of the Notice under Section 142(1) : </u>
            </div>
            <div className="content-image">
              <img src={SampleMail} alt="" />
            </div>
          </div>
          <div className="content-section">
            <div className="content-heading">
              How to submit a response to the notice U/S 142(1)?
            </div>
            <div className="content-paragraph">
              To respond to a notice under Section 142(1) of the Income Tax Act,
              you can use the online ‘e-Proceedings’ facility on the Income Tax
              portal. Here are the steps to follow:
              <div className="content-ul">
                <li>Log in to the Income Tax E-filing portal</li>{" "}
                <li>
                  Click on the “Pending Actions” Tab and then select
                  “E-proceedings.”
                </li>
                <li>Select the ‘View Notices’ option. </li>
                <li>‘Submit Response’ to go to a new page.</li>
                <li>Now click on the ‘Select Response type for Notice.’ </li>
                <li>
                  Choose either ‘Partial Response’ or Full Response’ to submit
                  your response.
                </li>
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="content-heading">
              Notice for defective return u/s 139(9) of the Income Tax Act
            </div>
            <div className="content-subheading">
              What is a defective return?
            </div>
            <div className="content-paragraph">
              <div className="content-ul">
                <li>
                  When any important information is missing or reported wrongly
                  on the return, it is known as a defective return. In any of
                  the above cases, the income tax department issues a defective
                  notice u/s 139(9) to the taxpayers, intimating them about the
                  same and asking them to correct the inaccuracies present in
                  the return.
                </li>
                <li>
                  You are required to make the necessary corrections in the
                  return within 15 days of receiving the notice. If you fail to
                  correct the ITR on time, it might have certain consequences in
                  the future.
                </li>
              </div>
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
          <button onClick={() => navigate("/taxes/faqs")}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default TaxNotice;
