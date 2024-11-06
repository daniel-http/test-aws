/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createEmployee } from "./graphql/mutations";
const client = generateClient();
export default function EmployeeCreateForm(props) {
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
    organization: "",
    name: "",
    email: "",
    site: "",
    duration: "",
    position: "",
  };
  const [organization, setOrganization] = React.useState(
    initialValues.organization
  );
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [site, setSite] = React.useState(initialValues.site);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [position, setPosition] = React.useState(initialValues.position);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOrganization(initialValues.organization);
    setName(initialValues.name);
    setEmail(initialValues.email);
    setSite(initialValues.site);
    setDuration(initialValues.duration);
    setPosition(initialValues.position);
    setErrors({});
  };
  const validations = {
    organization: [],
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    site: [{ type: "Required" }],
    duration: [{ type: "Required" }],
    position: [],
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
          organization,
          name,
          email,
          site,
          duration,
          position,
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
            query: createEmployee.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EmployeeCreateForm")}
      {...rest}
    >
      <TextField
        label="Organization"
        isRequired={false}
        isReadOnly={false}
        value={organization}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              organization: value,
              name,
              email,
              site,
              duration,
              position,
            };
            const result = onChange(modelFields);
            value = result?.organization ?? value;
          }
          if (errors.organization?.hasError) {
            runValidationTasks("organization", value);
          }
          setOrganization(value);
        }}
        onBlur={() => runValidationTasks("organization", organization)}
        errorMessage={errors.organization?.errorMessage}
        hasError={errors.organization?.hasError}
        {...getOverrideProps(overrides, "organization")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              organization,
              name: value,
              email,
              site,
              duration,
              position,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              organization,
              name,
              email: value,
              site,
              duration,
              position,
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
        label="Site"
        isRequired={true}
        isReadOnly={false}
        value={site}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              organization,
              name,
              email,
              site: value,
              duration,
              position,
            };
            const result = onChange(modelFields);
            value = result?.site ?? value;
          }
          if (errors.site?.hasError) {
            runValidationTasks("site", value);
          }
          setSite(value);
        }}
        onBlur={() => runValidationTasks("site", site)}
        errorMessage={errors.site?.errorMessage}
        hasError={errors.site?.hasError}
        {...getOverrideProps(overrides, "site")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={duration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              organization,
              name,
              email,
              site,
              duration: value,
              position,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <SelectField
        label="Position"
        placeholder="Please select an option"
        isDisabled={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              organization,
              name,
              email,
              site,
              duration,
              position: value,
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
          children="Primary"
          value="Primary"
          {...getOverrideProps(overrides, "positionoption0")}
        ></option>
        <option
          children="Secondary"
          value="Secondary"
          {...getOverrideProps(overrides, "positionoption1")}
        ></option>
      </SelectField>
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
