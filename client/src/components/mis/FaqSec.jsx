import React from 'react'
import Faq from "react-faq-component";

function FaqSec() {

  const data = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "What is the deadline for filing income tax returns in India?",
        content: `The deadline for filing income tax returns in India is usually July 31st of the assessment year. However, this deadline may be extended by the government in certain cases. It's essential to check the latest updates from the Income Tax Department for any changes in deadlines.`,
      },
      {
        title: "How is income tax calculated in India?",
        content: `Income tax in India is calculated based on a slab system. Different income levels are taxed at different rates. The government announces these tax slabs and rates in the annual budget. Taxable income is divided into various slabs, and each slab has a corresponding tax rate. Your total tax liability is the sum of taxes calculated for each slab. Additionally, there may be deductions and exemptions available to reduce your taxable income.`,
      },
      {
        title: "What are the tax-saving investment options available in India?",
        content: `There are several tax-saving investment options in India, such as Public Provident Fund (PPF), Employee Provident Fund (EPF), National Savings Certificate (NSC), tax-saving Fixed Deposits (FDs), Equity-Linked Savings Schemes (ELSS), and more. These investments come with tax benefits under Section 80C of the Income Tax Act. It's essential to consult with a financial advisor to choose the best options based on your financial goals.`,
      },
      {
        title: "How can I e-verify my income tax return in India?",
        content: `You can e-verify your income tax return in India through various methods, including net banking, Aadhar OTP, bank account-based OTP, or by sending a signed physical copy of ITR-V to the Centralized Processing Center (CPC) in Bengaluru. E-verification is a convenient and paperless way to verify your tax return.`,
      },
      {
        title: "What is the Goods and Services Tax (GST) in India?",
        content: `GST is a unified indirect tax introduced in India, replacing various other taxes like VAT, service tax, and central excise. It is levied on the supply of goods and services and is administered by the GST Council. GST has multiple tax slabs, including 5%, 12%, 18%, and 28%, with some goods and services attracting a 0% or exempt rate. It has simplified the taxation system in the country.`,
      },
      {
        title: "What are the penalties for late filing of income tax returns?",
        content: `If you file your income tax return after the due date, you may be liable to pay a penalty. The penalty amount depends on various factors, including your total income, the delay period, and the applicable section under which you are filing. It's crucial to file your returns on time to avoid penalties and legal complications.`,
      },
    ],
  };

  return (
    <div>
      <Faq
        data={data}
        styles={{
          titleTextColor: "black",
          rowTitleColor: "black",
        }}
      />
    </div>
  );
}

export default FaqSec