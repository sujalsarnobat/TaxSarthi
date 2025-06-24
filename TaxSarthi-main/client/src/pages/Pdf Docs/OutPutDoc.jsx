import React,{useEffect,useState,useRef} from 'react'
import "./OutPutDoc.css"
import { useNavigate } from 'react-router-dom';
import ThumbsUp from "../../assets/thumbsup.svg";
import { toast } from "react-toastify";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  IoMailOpenOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const generateRandomNumber = () => {
  return Math.floor(10000 + Math.random() * 90000);
};

// Function to get the current date in the format "DD MMM YYYY"
const getCurrentDate = () => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};

function OutPutDoc() {
  const pdfRef = useRef(null);

  const [invoiceNumber] = useState(() => {
    // Get the stored invoice number from local storage, or generate a new one
    const storedInvoiceNumber = localStorage.getItem("invoiceNumber");
    return storedInvoiceNumber
      ? parseInt(storedInvoiceNumber, 10)
      : generateRandomNumber();
  });
  const invoiceDate = getCurrentDate();


  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  const Token = localStorage.getItem("token");
  const [userData, setUserData] = useState(null);

const OldtaxDetailsFromLocalStorage = localStorage.getItem("OldtaxDetails");
const OldtaxDetails = OldtaxDetailsFromLocalStorage ? JSON.parse(OldtaxDetailsFromLocalStorage) : null;

    const OldSlabs = [
      { label: "0 to 3 lakh", rate: "0%", key: "slab1" },
      { label: "2.5 lakh to 5 lakh", rate: "5%", key: "slab2" },
      { label: "5 lakh to 10 lakh", rate: "20%", key: "slab3" },
      { label: "10 lakh and above", rate: "30%", key: "slab4" },
    ];

    const NewtaxDetailsFromLocalStorage = localStorage.getItem("NewtaxDetails");
    const NewtaxDetails = NewtaxDetailsFromLocalStorage ? JSON.parse(NewtaxDetailsFromLocalStorage) : null;

    const newRegimeSlabs = [
      { label: "0 to 3 lakh", rate: "0%", key: "slab1" },
      { label: "3 lakh to 6 lakh", rate: "5%", key: "slab2" },
      { label: "6 lakh to 9 lakh", rate: "10%", key: "slab3" },
      { label: "9 lakh to 12 lakh", rate: "15%", key: "slab4" },
      { label: "12 lakh to 15 lakh", rate: "20%", key: "slab5" },
      { label: "15 lakh and above", rate: "30%", key: "slab6" },
    ];

  // Now 'sampleData' is a constant holding the JSON object.

   useEffect(() => {
     axios
       .post("https://taxsaarthi.onrender.com/api/v1/tax/calculationbody", {
         Token,
       })
       .then((result) => {
         console.log(result.data);
         setUserData(result.data);
       })
       .catch((error) => {
         toast.error("There was an error loading the data");
       });
   }, [Token]);

   useEffect(() => {
     localStorage.setItem("invoiceNumber", invoiceNumber.toString());
   }, [invoiceNumber]);

  async function onclickDownload() {
    var doc = new jsPDF("portrait", "pt", "a4");

    const data = await html2canvas(document.querySelector("#OutPutSec"));
    const img = data.toDataURL("image/png");
    const imgProperties = doc.getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 10;
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    const topPadding = 20;
    const sidePadding = 10;

    doc.addImage(img, "PNG", sidePadding, topPadding, pdfWidth, pdfHeight);
    doc.save("taxreport-" + (!Token ? "125420" : Token) + ".pdf");
  }

  return (
    <>
      <div className="Button-Doc-Group">
        <button className="buttons-group " onClick={refreshPage}>
          Click To Refresh
        </button>
        <button className="buttons-group" onClick={onclickDownload}>
          Download The Report
        </button>
        <button
          className="buttons-group"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>
        <button
          className="buttons-group"
          onClick={() => {
            navigate("/login");
          }}
        >
          Back
        </button>
      </div>
      <hr style={{ marginBottom: 20 }} />

      <section id="OutPutSec" ref={pdfRef}>
        <div className="invoice-1">
          <div className="invoice-headar">
            <div className="row g-0">
              <div className="col-sm-6 invoice_heading">
                <div className="logo"></div>
                <h1 className="heading">TaxSarthi</h1>
                <div className="logo"></div>
              </div>
              <div className="col-sm-6 invoice-id">
                <div className="info">
                  <h1 className="color-white inv-header-1">Tax Invoice</h1>
                  <p className="color-white mb-1">
                    Invoice Number <span>#{invoiceNumber}</span>
                  </p>
                  <p className="color-white mb-0">
                    Invoice Date <span>{invoiceDate}</span>
                  </p>
                  <p className="color-white mb-1">
                    AY <span>2023-24</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="MainInfoDiv">
          <div className="PersonDiv">
            <h4 className="inv-title-1">Personal Details</h4>
            <h2 className="name mb-10">{userData ? userData.Name : "N/A"}</h2>
            <p>
              <span>
                <strong>Email: </strong>
                {userData ? userData.Email : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>Mobile No: </strong>
                {userData ? userData.MobileNo : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>Aadhar Card No: </strong>
                {userData ? userData.AadharNo : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>Pan Card: </strong>{" "}
                {userData ? userData.PanCard : "N/A"}
              </span>
            </p>
          </div>
          <div className="EmployerInfo">
            <h4 className="inv-title-1">Employer Details</h4>
            <h2 className="name mb-10">
              {userData ? userData.employerName : "N/A"}
            </h2>
            <p>
              <span>
                <strong>employerAddress: </strong>{" "}
                {userData ? userData.employerAddress : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>employerPanNumber: </strong>{" "}
                {userData ? userData.employerPanNumber : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>tanNumber: </strong>{" "}
                {userData ? userData.tanNumber : "N/A"}
              </span>
            </p>
            <p>
              <span>
                <strong>employeeReferenceNo: </strong>{" "}
                {userData ? userData.employeeReferenceNo : "N/A"}
              </span>
            </p>
          </div>
        </div>
        <hr style={{ marginBottom: 20 }} />

        <table className="tr-row">
          <tr>
            <td>
              <strong>Date Of Birth</strong>
            </td>
            <td>
              <span>{userData ? userData.DateOfBirth : "N/A"}</span>
            </td>

            <td>
              <strong>Status:</strong>
            </td>
            <td>
              <span>Individual</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Father's Name</strong>
            </td>
            <td>
              <span>{userData ? userData.FatherName : "N/A"}</span>
            </td>
            <td>
              <strong>Residential Status:</strong>
            </td>
            <td>
              <span>Resident</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Bank A/C no.:</strong>
            </td>
            <td>
              <span>45784</span>
            </td>
            <td>
              <strong>Gender:</strong>
            </td>
            <td>
              <span>{userData ? userData.Gender : "N/A"}</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>E-filing Status</strong>
            </td>
            <td>
              <span>-</span>
            </td>
            <td>
              <strong>Selected tax regime</strong>
            </td>
            <td>
              <span>
                {userData && userData.PreferredSystem
                  ? userData.PreferredSystem
                  : "N/A"}
              </span>
            </td>
          </tr>
        </table>
        <h3>Tax Summary</h3>
        <table className="TaxTable">
          <tbody className="taxBody">
            <tr>
              <td>
                <b>Salary</b>
              </td>
              <td></td>
              <td style={{ textAlign: "right" }}>
                {userData ? userData.Salary : "N/A"}
              </td>
            </tr>
            <tr style={{ backgroundColor: "black", height: "2px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <b>Gross Total Income</b>
              </td>
              <td></td>
              <td style={{ textAlign: "right" }}>
                {userData ? userData.TotalIncome : "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                <b>Total Deductions</b>
              </td>
              <td style={{ textAlign: "right" }}>
                {userData ? userData.TotalDeductions : "N/A"}
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td style={{ textAlign: "center" }}>
                Old Regime
                {userData && userData.PreferredSystem === "OldRegime" && (
                  <img
                    src={ThumbsUp}
                    alt="thumbs-up"
                    style={{
                      width: "40px",
                      transform: "translateX(30%)",
                    }}
                  />
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                New Regime
                {userData && userData.PreferredSystem === "NewRegime" && (
                  <img
                    src={ThumbsUp}
                    alt="thumbs-up"
                    style={{
                      width: "40px",
                      transform: "translateX(30%)",
                    }}
                  />
                )}
              </td>
            </tr>
            <tr style={{ backgroundColor: "black", height: "2px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <b>Total Tax Payable</b>
              </td>
              <td style={{ textAlign: "center" }}>
                {userData ? userData.OldFinalTax : "N/A"}
              </td>
              <td style={{ textAlign: "center" }}>
                {userData ? userData.NewFinalTax : "N/A"}
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Income Tax Summary</h3>
        <table className="TaxTable">
          <tbody className="taxBody" style={{ textAlign: "center" }}>
            <tr>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <b>Old Regime</b>
                {userData && userData.PreferredSystem === "OldRegime" && (
                  <img
                    src={ThumbsUp}
                    alt="thumbs-up"
                    style={{
                      width: "40px",
                      transform: "translateX(30%)",
                    }}
                  />
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                <b>New Regime</b>
                {userData && userData.PreferredSystem === "NewRegime" && (
                  <img
                    src={ThumbsUp}
                    alt="thumbs-up"
                    style={{
                      width: "40px",
                      transform: "translateX(30%)",
                    }}
                  />
                )}
              </td>
            </tr>
            <tr style={{ backgroundColor: "grey", height: "2px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <b>Total Income</b>
              </td>
              <td>
                {userData ? userData.TotalTaxableIncome : "N/A"} (TotalIncome -
                Deductions)
              </td>
              <td>{userData ? userData.TotalIncome : "N/A"}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <b>Basic Exemption</b>
              </td>
              <td> {userData ? userData.TotalDeductions : "N/A"}</td>
              <td> - </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <b>Income Tax</b>
              </td>
              <td>
                {userData
                  ? userData.OldFinalTax - userData.OldFinalCess
                  : "N/A"}
              </td>
              <td>
                {userData
                  ? userData.NewFinalTax - userData.NewFinalCess
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                {" "}
                <b>Health and Education Cess</b>
              </td>
              <td>{userData ? userData.OldFinalCess : "N/A"}</td>
              <td>{userData ? userData.NewFinalCess : "N/A"}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <b>Total Tax</b>
              </td>
              <td>{userData ? userData.OldFinalTax : "N/A"}</td>
              <td>{userData ? userData.NewFinalTax : "N/A"}</td>
            </tr>
          </tbody>
        </table>

        <h3>Normal Tax Breakup(Slab wise)</h3>
        <div className="NormalTaxSlab">
          <table
            border="1"
            cellspacing="0"
            style={{ textAlign: "center", width: "50%", margin: "20px auto" }}
          >
            <thead>
              <tr>
                <th colspan="3">Old Regime (Age&lt;60)</th>
              </tr>
              <tr>
                <th>Income Slab</th>
                <th>Rate</th>
                <th>Tax Amount</th>
              </tr>
            </thead>
            <tbody>
              {OldSlabs.map(
                (slab) =>
                  OldtaxDetails &&
                  OldtaxDetails[slab.key] !== undefined && (
                    <tr key={slab.key}>
                      <td>{slab.label}</td>
                      <td>{slab.rate}</td>
                      <td>{OldtaxDetails[slab.key]}</td>
                    </tr>
                  )
              )}
              <tr>
                <td>
                  <b>Tax</b>
                </td>
                <td></td>
                <td>
                  <b>
                    {userData
                      ? userData.OldFinalTax - userData.OldFinalCess
                      : "N/A"}
                  </b>
                </td>
              </tr>
              <tr>
                <td>4% cess on Total Tax</td>
                <td>4%</td>
                <td>{userData ? userData.OldFinalCess : "N/A"}</td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>Tax + 4% Cess</td>
                <td>
                  <b>{userData ? userData.OldFinalTax : "N/A"}</b>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            border="1"
            cellspacing="0"
            style={{ textAlign: "center", width: "50%", margin: "20px auto" }}
          >
            <thead>
              <tr>
                <th colspan="3">New Regime</th>
              </tr>
              <tr>
                <th>Income Slab</th>
                <th>Rate</th>
                <th>Tax Amount</th>
              </tr>
            </thead>
            <tbody>
              {newRegimeSlabs.map(
                (slab) =>
                  NewtaxDetails &&
                  NewtaxDetails[slab.key] !== undefined && (
                    <tr key={slab.key}>
                      <td>{slab.label}</td>
                      <td>{slab.rate}</td>
                      <td>{NewtaxDetails[slab.key]}</td>
                    </tr>
                  )
              )}
              <tr>
                <td>
                  <b>Tax</b>
                </td>
                <td></td>
                <td>
                  <b>
                    {userData
                      ? userData.NewFinalTax - userData.NewFinalCess
                      : "N/A"}
                  </b>
                </td>
              </tr>
              <tr>
                <td>4% cess on Total Tax</td>
                <td>4%</td>
                <td>{userData ? userData.NewFinalCess : "N/A"}</td>
              </tr>
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>Tax + 4% Cess</td>
                <td>
                  <b>{userData ? userData.NewFinalTax : "N/A"}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <div className="invoice-bottom">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-7">
                <div className="mb-30 dear-client">
                  <h3 className="inv-title-1" style={{ color: "#4d7298" }}>
                    Terms & Conditions
                  </h3>
                  <p style={{ color: "rgb(131, 124, 124)" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been typesetting
                    industry. Lorem Ipsum
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-8 col-sm-7"
                style={{ position: "relative" }}
              >
                <div
                  className="mb-30 dear-client"
                  style={{ position: "absolute", bottom: "0", right: "0" }}
                >
                  <h3 className="inv-title-1" style={{ color: "#4d7298" }}>
                    Signature
                  </h3>
                  <p style={{ color: "rgb(131, 124, 124)" }}>Your Name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-contact clearfix">
            <div className="row g-0">
              <div className="col-lg-9 col-md-11 col-sm-12">
                <div className="contact-info">
                  <a href="tel:+55-4XX-634-7071">
                    <span>
                      <IoCallOutline
                        style={{
                          paddingBottom: "2px",
                          width: "1.2em",
                          height: "1.2em",
                        }}
                      />
                    </span>{" "}
                    +00 123 647 840
                  </a>
                  <a href="tel:info@taxsarthi.com">
                    <span>
                      <IoMailOpenOutline
                        style={{
                          paddingBottom: "2px",
                          width: "1.2em",
                          height: "1.2em",
                        }}
                      />
                    </span>{" "}
                    info@taxsarthi.com
                  </a>
                  <a
                    href="tel:info@themevessel.com"
                    className="mr-0 d-none-580"
                  >
                    <span>
                      <IoLocationOutline
                        style={{
                          paddingBottom: "2px",
                          width: "1.2em",
                          height: "1.2em",
                        }}
                      />
                    </span>{" "}
                    169 Mumbai, India
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OutPutDoc