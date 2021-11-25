import mongoose from "mongoose";

const personsSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
  },
  { collection: "persons", versionKey: false }
);

const PersonsModel = mongoose.model("Person", personsSchema);

export { PersonsModel };
