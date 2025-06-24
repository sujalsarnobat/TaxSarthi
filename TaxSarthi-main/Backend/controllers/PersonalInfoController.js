const PersonalInfo = require('../Models/PersonalInfoModel');

exports.PersonalInfoSave = async(req,res)=> {
    try {
      const {
        Token,
        FirstName,
        MiddleName,
        LastName,
        DateOfBirth,
        FatherName,
        Gender,
        MaritalStatus,
        AadharNo,
        PanCard,
        MobileNo,
        Email,
        Address,
        City,
        selectedState,
        PinCode,
      } = req.body;

      // Check if a document with the given AadharNo exists
      const existingInfo = await PersonalInfo.findOne({ Email });

      if (existingInfo) {
        // Check if there's any change in the values
        const hasChanged =
          FirstName !== existingInfo.FirstName ||
          MiddleName !== existingInfo.MiddleName ||
          LastName !== existingInfo.LastName ||
          DateOfBirth !== existingInfo.DateOfBirth ||
          FatherName !== existingInfo.FatherName ||
          Gender !== existingInfo.Gender ||
          MaritalStatus !== existingInfo.MaritalStatus ||
          PanCard !== existingInfo.PanCard ||
          MobileNo !== existingInfo.MobileNo ||
          Address !== existingInfo.Address ||
          City !== existingInfo.City ||
          selectedState !== existingInfo.selectedState ||
          PinCode !== existingInfo.PinCode;

        if (hasChanged) {
          // Update existing document with new values
          const updatedInfo = await PersonalInfo.findOneAndUpdate(
            { Email },
            {
              $set: {
                Token,
                FirstName,
                MiddleName,
                LastName,
                DateOfBirth,
                FatherName,
                Gender,
                MaritalStatus,
                PanCard,
                MobileNo,
                Address,
                City,
                selectedState,
                PinCode,
              },
            },
            { new: true }
          );

          console.log("Personal Info Updated:", updatedInfo);
          res.status(200).json({ id: updatedInfo._id });
        } else {
          // If there are no changes, return the existing record's ID
          res.status(200).json({ id: existingInfo._id });
        }
      } else {
        // Create a new document
        const newInfo = await PersonalInfo.create({
        Token,
          FirstName,
          MiddleName,
          LastName,
          DateOfBirth,
          FatherName,
          Gender,
          MaritalStatus,
          AadharNo,
          PanCard,
          MobileNo,
          Email,
          Address,
          City,
          selectedState,
          PinCode,
        });

        console.log("New Personal Info Created:", newInfo);
        res.status(201).json({ id: newInfo._id, newInfo });
      }
    } catch (error) {
      console.error("Error creating or updating Personal Info:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.PersonalInfoAccess = async (req,res) => {
    const { Email } = req.body;
    try {
      const pbody = await PersonalInfo.findOne({ Email });

      if (pbody) {
        res.status(200).json(pbody);
      } else {
        res
          .status(404)
          .json({ message: "No data found for the provided Email" });
      }
    } catch (error) {
            console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
};