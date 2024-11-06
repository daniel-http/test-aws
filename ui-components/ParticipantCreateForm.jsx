/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createParticipant } from "./graphql/mutations";
const client = generateClient();
export default function ParticipantCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    searchId: "",
    firstName: "",
    lastName: "",
    email: "",
    tnpalId: "",
    fein: "",
    feinExt: "",
    facilityName: "",
    contactTime: "",
    postalCode: "",
    county: "",
    position: "",
    certicateIssued: false,
    followUpIssued: false,
    followUpMethod: "",
    followUpDate: "",
  };
  const [searchId, setSearchId] = React.useState(initialValues.searchId);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [tnpalId, setTnpalId] = React.useState(initialValues.tnpalId);
  const [fein, setFein] = React.useState(initialValues.fein);
  const [feinExt, setFeinExt] = React.useState(initialValues.feinExt);
  const [facilityName, setFacilityName] = React.useState(
    initialValues.facilityName
  );
  const [contactTime, setContactTime] = React.useState(
    initialValues.contactTime
  );
  const [postalCode, setPostalCode] = React.useState(initialValues.postalCode);
  const [county, setCounty] = React.useState(initialValues.county);
  const [position, setPosition] = React.useState(initialValues.position);
  const [certicateIssued, setCerticateIssued] = React.useState(
    initialValues.certicateIssued
  );
  const [followUpIssued, setFollowUpIssued] = React.useState(
    initialValues.followUpIssued
  );
  const [followUpMethod, setFollowUpMethod] = React.useState(
    initialValues.followUpMethod
  );
  const [followUpDate, setFollowUpDate] = React.useState(
    initialValues.followUpDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSearchId(initialValues.searchId);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setTnpalId(initialValues.tnpalId);
    setFein(initialValues.fein);
    setFeinExt(initialValues.feinExt);
    setFacilityName(initialValues.facilityName);
    setContactTime(initialValues.contactTime);
    setPostalCode(initialValues.postalCode);
    setCounty(initialValues.county);
    setPosition(initialValues.position);
    setCerticateIssued(initialValues.certicateIssued);
    setFollowUpIssued(initialValues.followUpIssued);
    setFollowUpMethod(initialValues.followUpMethod);
    setFollowUpDate(initialValues.followUpDate);
    setErrors({});
  };
  const validations = {
    searchId: [{ type: "Required" }],
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    tnpalId: [],
    fein: [],
    feinExt: [],
    facilityName: [{ type: "Required" }],
    contactTime: [{ type: "Required" }],
    postalCode: [{ type: "Required" }],
    county: [],
    position: [],
    certicateIssued: [],
    followUpIssued: [],
    followUpMethod: [],
    followUpDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          searchId,
          firstName,
          lastName,
          email,
          tnpalId,
          fein,
          feinExt,
          facilityName,
          contactTime,
          postalCode,
          county,
          position,
          certicateIssued,
          followUpIssued,
          followUpMethod,
          followUpDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createParticipant.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ParticipantCreateForm")}
      {...rest}
    >
      <TextField
        label="Search id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={searchId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              searchId: value,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.searchId ?? value;
          }
          if (errors.searchId?.hasError) {
            runValidationTasks("searchId", value);
          }
          setSearchId(value);
        }}
        onBlur={() => runValidationTasks("searchId", searchId)}
        errorMessage={errors.searchId?.errorMessage}
        hasError={errors.searchId?.hasError}
        {...getOverrideProps(overrides, "searchId")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName: value,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName: value,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email: value,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Tnpal id"
        isRequired={false}
        isReadOnly={false}
        value={tnpalId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId: value,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.tnpalId ?? value;
          }
          if (errors.tnpalId?.hasError) {
            runValidationTasks("tnpalId", value);
          }
          setTnpalId(value);
        }}
        onBlur={() => runValidationTasks("tnpalId", tnpalId)}
        errorMessage={errors.tnpalId?.errorMessage}
        hasError={errors.tnpalId?.hasError}
        {...getOverrideProps(overrides, "tnpalId")}
      ></TextField>
      <TextField
        label="Fein"
        isRequired={false}
        isReadOnly={false}
        value={fein}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein: value,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.fein ?? value;
          }
          if (errors.fein?.hasError) {
            runValidationTasks("fein", value);
          }
          setFein(value);
        }}
        onBlur={() => runValidationTasks("fein", fein)}
        errorMessage={errors.fein?.errorMessage}
        hasError={errors.fein?.hasError}
        {...getOverrideProps(overrides, "fein")}
      ></TextField>
      <TextField
        label="Fein ext"
        isRequired={false}
        isReadOnly={false}
        value={feinExt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt: value,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.feinExt ?? value;
          }
          if (errors.feinExt?.hasError) {
            runValidationTasks("feinExt", value);
          }
          setFeinExt(value);
        }}
        onBlur={() => runValidationTasks("feinExt", feinExt)}
        errorMessage={errors.feinExt?.errorMessage}
        hasError={errors.feinExt?.hasError}
        {...getOverrideProps(overrides, "feinExt")}
      ></TextField>
      <TextField
        label="Facility name"
        isRequired={true}
        isReadOnly={false}
        value={facilityName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName: value,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.facilityName ?? value;
          }
          if (errors.facilityName?.hasError) {
            runValidationTasks("facilityName", value);
          }
          setFacilityName(value);
        }}
        onBlur={() => runValidationTasks("facilityName", facilityName)}
        errorMessage={errors.facilityName?.errorMessage}
        hasError={errors.facilityName?.hasError}
        {...getOverrideProps(overrides, "facilityName")}
      ></TextField>
      <TextField
        label="Contact time"
        isRequired={true}
        isReadOnly={false}
        value={contactTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime: value,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.contactTime ?? value;
          }
          if (errors.contactTime?.hasError) {
            runValidationTasks("contactTime", value);
          }
          setContactTime(value);
        }}
        onBlur={() => runValidationTasks("contactTime", contactTime)}
        errorMessage={errors.contactTime?.errorMessage}
        hasError={errors.contactTime?.hasError}
        {...getOverrideProps(overrides, "contactTime")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={true}
        isReadOnly={false}
        value={postalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode: value,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.postalCode ?? value;
          }
          if (errors.postalCode?.hasError) {
            runValidationTasks("postalCode", value);
          }
          setPostalCode(value);
        }}
        onBlur={() => runValidationTasks("postalCode", postalCode)}
        errorMessage={errors.postalCode?.errorMessage}
        hasError={errors.postalCode?.hasError}
        {...getOverrideProps(overrides, "postalCode")}
      ></TextField>
      <SelectField
        label="County"
        placeholder="Please select an option"
        isDisabled={false}
        value={county}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county: value,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.county ?? value;
          }
          if (errors.county?.hasError) {
            runValidationTasks("county", value);
          }
          setCounty(value);
        }}
        onBlur={() => runValidationTasks("county", county)}
        errorMessage={errors.county?.errorMessage}
        hasError={errors.county?.hasError}
        {...getOverrideProps(overrides, "county")}
      >
        <option
          children="Anderson"
          value="Anderson"
          {...getOverrideProps(overrides, "countyoption0")}
        ></option>
        <option
          children="Bedford"
          value="Bedford"
          {...getOverrideProps(overrides, "countyoption1")}
        ></option>
        <option
          children="Benton"
          value="Benton"
          {...getOverrideProps(overrides, "countyoption2")}
        ></option>
        <option
          children="Bledsoe"
          value="Bledsoe"
          {...getOverrideProps(overrides, "countyoption3")}
        ></option>
        <option
          children="Blount"
          value="Blount"
          {...getOverrideProps(overrides, "countyoption4")}
        ></option>
        <option
          children="Bradley"
          value="Bradley"
          {...getOverrideProps(overrides, "countyoption5")}
        ></option>
        <option
          children="Campbell"
          value="Campbell"
          {...getOverrideProps(overrides, "countyoption6")}
        ></option>
        <option
          children="Cannon"
          value="Cannon"
          {...getOverrideProps(overrides, "countyoption7")}
        ></option>
        <option
          children="Carroll"
          value="Carroll"
          {...getOverrideProps(overrides, "countyoption8")}
        ></option>
        <option
          children="Carter"
          value="Carter"
          {...getOverrideProps(overrides, "countyoption9")}
        ></option>
        <option
          children="Cheatham"
          value="Cheatham"
          {...getOverrideProps(overrides, "countyoption10")}
        ></option>
        <option
          children="Chester"
          value="Chester"
          {...getOverrideProps(overrides, "countyoption11")}
        ></option>
        <option
          children="Claiborne"
          value="Claiborne"
          {...getOverrideProps(overrides, "countyoption12")}
        ></option>
        <option
          children="Clay"
          value="Clay"
          {...getOverrideProps(overrides, "countyoption13")}
        ></option>
        <option
          children="Cocke"
          value="Cocke"
          {...getOverrideProps(overrides, "countyoption14")}
        ></option>
        <option
          children="Coffee"
          value="Coffee"
          {...getOverrideProps(overrides, "countyoption15")}
        ></option>
        <option
          children="Crockett"
          value="Crockett"
          {...getOverrideProps(overrides, "countyoption16")}
        ></option>
        <option
          children="Cumberland"
          value="Cumberland"
          {...getOverrideProps(overrides, "countyoption17")}
        ></option>
        <option
          children="Davidson"
          value="Davidson"
          {...getOverrideProps(overrides, "countyoption18")}
        ></option>
        <option
          children="Decatur"
          value="Decatur"
          {...getOverrideProps(overrides, "countyoption19")}
        ></option>
        <option
          children="Dekalb"
          value="Dekalb"
          {...getOverrideProps(overrides, "countyoption20")}
        ></option>
        <option
          children="Dickson"
          value="Dickson"
          {...getOverrideProps(overrides, "countyoption21")}
        ></option>
        <option
          children="Dyer"
          value="Dyer"
          {...getOverrideProps(overrides, "countyoption22")}
        ></option>
        <option
          children="Fayette"
          value="Fayette"
          {...getOverrideProps(overrides, "countyoption23")}
        ></option>
        <option
          children="Fentress"
          value="Fentress"
          {...getOverrideProps(overrides, "countyoption24")}
        ></option>
        <option
          children="Franklin"
          value="Franklin"
          {...getOverrideProps(overrides, "countyoption25")}
        ></option>
        <option
          children="Gibson"
          value="Gibson"
          {...getOverrideProps(overrides, "countyoption26")}
        ></option>
        <option
          children="Giles"
          value="Giles"
          {...getOverrideProps(overrides, "countyoption27")}
        ></option>
        <option
          children="Grainger"
          value="Grainger"
          {...getOverrideProps(overrides, "countyoption28")}
        ></option>
        <option
          children="Greene"
          value="Greene"
          {...getOverrideProps(overrides, "countyoption29")}
        ></option>
        <option
          children="Grundy"
          value="Grundy"
          {...getOverrideProps(overrides, "countyoption30")}
        ></option>
        <option
          children="Hamblen"
          value="Hamblen"
          {...getOverrideProps(overrides, "countyoption31")}
        ></option>
        <option
          children="Hamilton"
          value="Hamilton"
          {...getOverrideProps(overrides, "countyoption32")}
        ></option>
        <option
          children="Hancock"
          value="Hancock"
          {...getOverrideProps(overrides, "countyoption33")}
        ></option>
        <option
          children="Hardeman"
          value="Hardeman"
          {...getOverrideProps(overrides, "countyoption34")}
        ></option>
        <option
          children="Hardin"
          value="Hardin"
          {...getOverrideProps(overrides, "countyoption35")}
        ></option>
        <option
          children="Hawkins"
          value="Hawkins"
          {...getOverrideProps(overrides, "countyoption36")}
        ></option>
        <option
          children="Haywood"
          value="Haywood"
          {...getOverrideProps(overrides, "countyoption37")}
        ></option>
        <option
          children="Henderson"
          value="Henderson"
          {...getOverrideProps(overrides, "countyoption38")}
        ></option>
        <option
          children="Henry"
          value="Henry"
          {...getOverrideProps(overrides, "countyoption39")}
        ></option>
        <option
          children="Hickman"
          value="Hickman"
          {...getOverrideProps(overrides, "countyoption40")}
        ></option>
        <option
          children="Houston"
          value="Houston"
          {...getOverrideProps(overrides, "countyoption41")}
        ></option>
        <option
          children="Humphreys"
          value="Humphreys"
          {...getOverrideProps(overrides, "countyoption42")}
        ></option>
        <option
          children="Jackson"
          value="Jackson"
          {...getOverrideProps(overrides, "countyoption43")}
        ></option>
        <option
          children="Jefferson"
          value="Jefferson"
          {...getOverrideProps(overrides, "countyoption44")}
        ></option>
        <option
          children="Johnson"
          value="Johnson"
          {...getOverrideProps(overrides, "countyoption45")}
        ></option>
        <option
          children="Knox"
          value="Knox"
          {...getOverrideProps(overrides, "countyoption46")}
        ></option>
        <option
          children="Lake"
          value="Lake"
          {...getOverrideProps(overrides, "countyoption47")}
        ></option>
        <option
          children="Lauderdale"
          value="Lauderdale"
          {...getOverrideProps(overrides, "countyoption48")}
        ></option>
        <option
          children="Lawrence"
          value="Lawrence"
          {...getOverrideProps(overrides, "countyoption49")}
        ></option>
        <option
          children="Lewis"
          value="Lewis"
          {...getOverrideProps(overrides, "countyoption50")}
        ></option>
        <option
          children="Lincoln"
          value="Lincoln"
          {...getOverrideProps(overrides, "countyoption51")}
        ></option>
        <option
          children="Loudon"
          value="Loudon"
          {...getOverrideProps(overrides, "countyoption52")}
        ></option>
        <option
          children="Macon"
          value="Macon"
          {...getOverrideProps(overrides, "countyoption53")}
        ></option>
        <option
          children="Madison"
          value="Madison"
          {...getOverrideProps(overrides, "countyoption54")}
        ></option>
        <option
          children="Marion"
          value="Marion"
          {...getOverrideProps(overrides, "countyoption55")}
        ></option>
        <option
          children="Marshall"
          value="Marshall"
          {...getOverrideProps(overrides, "countyoption56")}
        ></option>
        <option
          children="Maury"
          value="Maury"
          {...getOverrideProps(overrides, "countyoption57")}
        ></option>
        <option
          children="Mc minn"
          value="McMinn"
          {...getOverrideProps(overrides, "countyoption58")}
        ></option>
        <option
          children="Mc nairy"
          value="McNairy"
          {...getOverrideProps(overrides, "countyoption59")}
        ></option>
        <option
          children="Meigs"
          value="Meigs"
          {...getOverrideProps(overrides, "countyoption60")}
        ></option>
        <option
          children="Monroe"
          value="Monroe"
          {...getOverrideProps(overrides, "countyoption61")}
        ></option>
        <option
          children="Montgomery"
          value="Montgomery"
          {...getOverrideProps(overrides, "countyoption62")}
        ></option>
        <option
          children="Moore"
          value="Moore"
          {...getOverrideProps(overrides, "countyoption63")}
        ></option>
        <option
          children="Morgan"
          value="Morgan"
          {...getOverrideProps(overrides, "countyoption64")}
        ></option>
        <option
          children="Obion"
          value="Obion"
          {...getOverrideProps(overrides, "countyoption65")}
        ></option>
        <option
          children="Overton"
          value="Overton"
          {...getOverrideProps(overrides, "countyoption66")}
        ></option>
        <option
          children="Perry"
          value="Perry"
          {...getOverrideProps(overrides, "countyoption67")}
        ></option>
        <option
          children="Pickett"
          value="Pickett"
          {...getOverrideProps(overrides, "countyoption68")}
        ></option>
        <option
          children="Polk"
          value="Polk"
          {...getOverrideProps(overrides, "countyoption69")}
        ></option>
        <option
          children="Putnam"
          value="Putnam"
          {...getOverrideProps(overrides, "countyoption70")}
        ></option>
        <option
          children="Rhea"
          value="Rhea"
          {...getOverrideProps(overrides, "countyoption71")}
        ></option>
        <option
          children="Roane"
          value="Roane"
          {...getOverrideProps(overrides, "countyoption72")}
        ></option>
        <option
          children="Robertson"
          value="Robertson"
          {...getOverrideProps(overrides, "countyoption73")}
        ></option>
        <option
          children="Rutherford"
          value="Rutherford"
          {...getOverrideProps(overrides, "countyoption74")}
        ></option>
        <option
          children="Scott"
          value="Scott"
          {...getOverrideProps(overrides, "countyoption75")}
        ></option>
        <option
          children="Sequatchie"
          value="Sequatchie"
          {...getOverrideProps(overrides, "countyoption76")}
        ></option>
        <option
          children="Sevier"
          value="Sevier"
          {...getOverrideProps(overrides, "countyoption77")}
        ></option>
        <option
          children="Shelby"
          value="Shelby"
          {...getOverrideProps(overrides, "countyoption78")}
        ></option>
        <option
          children="Smith"
          value="Smith"
          {...getOverrideProps(overrides, "countyoption79")}
        ></option>
        <option
          children="Stewart"
          value="Stewart"
          {...getOverrideProps(overrides, "countyoption80")}
        ></option>
        <option
          children="Sullivan"
          value="Sullivan"
          {...getOverrideProps(overrides, "countyoption81")}
        ></option>
        <option
          children="Sumner"
          value="Sumner"
          {...getOverrideProps(overrides, "countyoption82")}
        ></option>
        <option
          children="Tipton"
          value="Tipton"
          {...getOverrideProps(overrides, "countyoption83")}
        ></option>
        <option
          children="Trousdale"
          value="Trousdale"
          {...getOverrideProps(overrides, "countyoption84")}
        ></option>
        <option
          children="Unicoi"
          value="Unicoi"
          {...getOverrideProps(overrides, "countyoption85")}
        ></option>
        <option
          children="Union"
          value="Union"
          {...getOverrideProps(overrides, "countyoption86")}
        ></option>
        <option
          children="Van buren"
          value="VanBuren"
          {...getOverrideProps(overrides, "countyoption87")}
        ></option>
        <option
          children="Warren"
          value="Warren"
          {...getOverrideProps(overrides, "countyoption88")}
        ></option>
        <option
          children="Washington"
          value="Washington"
          {...getOverrideProps(overrides, "countyoption89")}
        ></option>
        <option
          children="Wayne"
          value="Wayne"
          {...getOverrideProps(overrides, "countyoption90")}
        ></option>
        <option
          children="Weakley"
          value="Weakley"
          {...getOverrideProps(overrides, "countyoption91")}
        ></option>
        <option
          children="White"
          value="White"
          {...getOverrideProps(overrides, "countyoption92")}
        ></option>
        <option
          children="Williamson"
          value="Williamson"
          {...getOverrideProps(overrides, "countyoption93")}
        ></option>
        <option
          children="Wilson"
          value="Wilson"
          {...getOverrideProps(overrides, "countyoption94")}
        ></option>
      </SelectField>
      <SelectField
        label="Position"
        placeholder="Please select an option"
        isDisabled={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position: value,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      >
        <option
          children="Educator"
          value="Educator"
          {...getOverrideProps(overrides, "positionoption0")}
        ></option>
        <option
          children="Director"
          value="Director"
          {...getOverrideProps(overrides, "positionoption1")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "positionoption2")}
        ></option>
        <option
          children="Fcc gcc"
          value="FccGcc"
          {...getOverrideProps(overrides, "positionoption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Certicate issued"
        defaultChecked={false}
        isDisabled={false}
        isChecked={certicateIssued}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued: value,
              followUpIssued,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.certicateIssued ?? value;
          }
          if (errors.certicateIssued?.hasError) {
            runValidationTasks("certicateIssued", value);
          }
          setCerticateIssued(value);
        }}
        onBlur={() => runValidationTasks("certicateIssued", certicateIssued)}
        errorMessage={errors.certicateIssued?.errorMessage}
        hasError={errors.certicateIssued?.hasError}
        {...getOverrideProps(overrides, "certicateIssued")}
      ></SwitchField>
      <SwitchField
        label="Follow up issued"
        defaultChecked={false}
        isDisabled={false}
        isChecked={followUpIssued}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued: value,
              followUpMethod,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.followUpIssued ?? value;
          }
          if (errors.followUpIssued?.hasError) {
            runValidationTasks("followUpIssued", value);
          }
          setFollowUpIssued(value);
        }}
        onBlur={() => runValidationTasks("followUpIssued", followUpIssued)}
        errorMessage={errors.followUpIssued?.errorMessage}
        hasError={errors.followUpIssued?.hasError}
        {...getOverrideProps(overrides, "followUpIssued")}
      ></SwitchField>
      <SelectField
        label="Follow up method"
        placeholder="Please select an option"
        isDisabled={false}
        value={followUpMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod: value,
              followUpDate,
            };
            const result = onChange(modelFields);
            value = result?.followUpMethod ?? value;
          }
          if (errors.followUpMethod?.hasError) {
            runValidationTasks("followUpMethod", value);
          }
          setFollowUpMethod(value);
        }}
        onBlur={() => runValidationTasks("followUpMethod", followUpMethod)}
        errorMessage={errors.followUpMethod?.errorMessage}
        hasError={errors.followUpMethod?.hasError}
        {...getOverrideProps(overrides, "followUpMethod")}
      >
        <option
          children="Phone call"
          value="PhoneCall"
          {...getOverrideProps(overrides, "followUpMethodoption0")}
        ></option>
        <option
          children="Visit"
          value="Visit"
          {...getOverrideProps(overrides, "followUpMethodoption1")}
        ></option>
        <option
          children="Text"
          value="Text"
          {...getOverrideProps(overrides, "followUpMethodoption2")}
        ></option>
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "followUpMethodoption3")}
        ></option>
        <option
          children="Email"
          value="Email"
          {...getOverrideProps(overrides, "followUpMethodoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Follow up date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={followUpDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searchId,
              firstName,
              lastName,
              email,
              tnpalId,
              fein,
              feinExt,
              facilityName,
              contactTime,
              postalCode,
              county,
              position,
              certicateIssued,
              followUpIssued,
              followUpMethod,
              followUpDate: value,
            };
            const result = onChange(modelFields);
            value = result?.followUpDate ?? value;
          }
          if (errors.followUpDate?.hasError) {
            runValidationTasks("followUpDate", value);
          }
          setFollowUpDate(value);
        }}
        onBlur={() => runValidationTasks("followUpDate", followUpDate)}
        errorMessage={errors.followUpDate?.errorMessage}
        hasError={errors.followUpDate?.hasError}
        {...getOverrideProps(overrides, "followUpDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
