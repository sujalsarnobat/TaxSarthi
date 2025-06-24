import React from "react";
import "../AboutTaxes.css";
// import testimg from "../../../../assets/what-are-taxes-01.png";
import data from "./tables/types-of-taxes.json";

function TypesOfTaxes() {
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
      <div className="blog-title">Types Of Taxes</div>
      <hr />
      <div className="blog-content">
        <div className="table content-section">
          <table>
            <thead>
              <tr>
                <th>{data[0].type}</th>
                <th>{data[0].description}</th>
                <th>{data[0].keyFeatures}</th>
              </tr>
            </thead>
            <tbody className="control">
              {data.slice(1).map((taxData) => (
                <tr key={taxData.id}>
                  <td>{taxData.type}</td>
                  <td>{taxData.description}</td>
                  <td>{taxData.keyFeatures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="content-paragraph content-section">
          Each of these taxes has its unique characteristics, objectives, and
          administrative procedures. They collectively contribute to the
          government's revenue and play a critical role in India's fiscal system
          and economic policies.
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

export default TypesOfTaxes;
