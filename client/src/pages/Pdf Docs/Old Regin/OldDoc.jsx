import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import axios from "axios";
import { toast } from "react-toastify";

// Move styles outside the component
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    color: "#458E",
  },
});

function OldDoc() {
  const AadharNo = localStorage.getItem("AadharNo");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:8000/policy/oldbody", { AadharNo })
      .then((result) => {
        console.log(result.data);
        setUserData(result.data);
      })
      .catch((error) => {
        toast.error("There was an error loading the data");
      });
  }, [AadharNo]);

  return (
    <Document>
      <Page size={"A3"} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>{userData?.Name}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default OldDoc;
