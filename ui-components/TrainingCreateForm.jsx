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
import { createTraining } from "./graphql/mutations";
const client = generateClient();
export default function TrainingCreateForm(props) {
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
    lookupId: "",
    duration: "",
    startDate: "",
    sharedTraining: false,
    hasCorrectiveActionPlan: false,
    hasSafetyPlan: false,
    hasCredential: false,
    hasReferralEmail: false,
    requestedReason: "",
    reportCardScore: "",
    comments: "",
  };
  const [lookupId, setLookupId] = React.useState(initialValues.lookupId);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [sharedTraining, setSharedTraining] = React.useState(
    initialValues.sharedTraining
  );
  const [hasCorrectiveActionPlan, setHasCorrectiveActionPlan] = React.useState(
    initialValues.hasCorrectiveActionPlan
  );
  const [hasSafetyPlan, setHasSafetyPlan] = React.useState(
    initialValues.hasSafetyPlan
  );
  const [hasCredential, setHasCredential] = React.useState(
    initialValues.hasCredential
  );
  const [hasReferralEmail, setHasReferralEmail] = React.useState(
    initialValues.hasReferralEmail
  );
  const [requestedReason, setRequestedReason] = React.useState(
    initialValues.requestedReason
  );
  const [reportCardScore, setReportCardScore] = React.useState(
    initialValues.reportCardScore
  );
  const [comments, setComments] = React.useState(initialValues.comments);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLookupId(initialValues.lookupId);
    setDuration(initialValues.duration);
    setStartDate(initialValues.startDate);
    setSharedTraining(initialValues.sharedTraining);
    setHasCorrectiveActionPlan(initialValues.hasCorrectiveActionPlan);
    setHasSafetyPlan(initialValues.hasSafetyPlan);
    setHasCredential(initialValues.hasCredential);
    setHasReferralEmail(initialValues.hasReferralEmail);
    setRequestedReason(initialValues.requestedReason);
    setReportCardScore(initialValues.reportCardScore);
    setComments(initialValues.comments);
    setErrors({});
  };
  const validations = {
    lookupId: [{ type: "Required" }],
    duration: [],
    startDate: [],
    sharedTraining: [],
    hasCorrectiveActionPlan: [],
    hasSafetyPlan: [],
    hasCredential: [],
    hasReferralEmail: [],
    requestedReason: [],
    reportCardScore: [],
    comments: [],
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
          lookupId,
          duration,
          startDate,
          sharedTraining,
          hasCorrectiveActionPlan,
          hasSafetyPlan,
          hasCredential,
          hasReferralEmail,
          requestedReason,
          reportCardScore,
          comments,
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
            query: createTraining.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TrainingCreateForm")}
      {...rest}
    >
      <TextField
        label="Lookup id"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lookupId}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              lookupId: value,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.lookupId ?? value;
          }
          if (errors.lookupId?.hasError) {
            runValidationTasks("lookupId", value);
          }
          setLookupId(value);
        }}
        onBlur={() => runValidationTasks("lookupId", lookupId)}
        errorMessage={errors.lookupId?.errorMessage}
        hasError={errors.lookupId?.hasError}
        {...getOverrideProps(overrides, "lookupId")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        value={duration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration: value,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
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
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate: value,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <SwitchField
        label="Shared training"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sharedTraining}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining: value,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.sharedTraining ?? value;
          }
          if (errors.sharedTraining?.hasError) {
            runValidationTasks("sharedTraining", value);
          }
          setSharedTraining(value);
        }}
        onBlur={() => runValidationTasks("sharedTraining", sharedTraining)}
        errorMessage={errors.sharedTraining?.errorMessage}
        hasError={errors.sharedTraining?.hasError}
        {...getOverrideProps(overrides, "sharedTraining")}
      ></SwitchField>
      <SwitchField
        label="Has corrective action plan"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasCorrectiveActionPlan}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan: value,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.hasCorrectiveActionPlan ?? value;
          }
          if (errors.hasCorrectiveActionPlan?.hasError) {
            runValidationTasks("hasCorrectiveActionPlan", value);
          }
          setHasCorrectiveActionPlan(value);
        }}
        onBlur={() =>
          runValidationTasks("hasCorrectiveActionPlan", hasCorrectiveActionPlan)
        }
        errorMessage={errors.hasCorrectiveActionPlan?.errorMessage}
        hasError={errors.hasCorrectiveActionPlan?.hasError}
        {...getOverrideProps(overrides, "hasCorrectiveActionPlan")}
      ></SwitchField>
      <SwitchField
        label="Has safety plan"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasSafetyPlan}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan: value,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.hasSafetyPlan ?? value;
          }
          if (errors.hasSafetyPlan?.hasError) {
            runValidationTasks("hasSafetyPlan", value);
          }
          setHasSafetyPlan(value);
        }}
        onBlur={() => runValidationTasks("hasSafetyPlan", hasSafetyPlan)}
        errorMessage={errors.hasSafetyPlan?.errorMessage}
        hasError={errors.hasSafetyPlan?.hasError}
        {...getOverrideProps(overrides, "hasSafetyPlan")}
      ></SwitchField>
      <SwitchField
        label="Has credential"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasCredential}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential: value,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.hasCredential ?? value;
          }
          if (errors.hasCredential?.hasError) {
            runValidationTasks("hasCredential", value);
          }
          setHasCredential(value);
        }}
        onBlur={() => runValidationTasks("hasCredential", hasCredential)}
        errorMessage={errors.hasCredential?.errorMessage}
        hasError={errors.hasCredential?.hasError}
        {...getOverrideProps(overrides, "hasCredential")}
      ></SwitchField>
      <SwitchField
        label="Has referral email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasReferralEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail: value,
              requestedReason,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.hasReferralEmail ?? value;
          }
          if (errors.hasReferralEmail?.hasError) {
            runValidationTasks("hasReferralEmail", value);
          }
          setHasReferralEmail(value);
        }}
        onBlur={() => runValidationTasks("hasReferralEmail", hasReferralEmail)}
        errorMessage={errors.hasReferralEmail?.errorMessage}
        hasError={errors.hasReferralEmail?.hasError}
        {...getOverrideProps(overrides, "hasReferralEmail")}
      ></SwitchField>
      <SelectField
        label="Requested reason"
        placeholder="Please select an option"
        isDisabled={false}
        value={requestedReason}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason: value,
              reportCardScore,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.requestedReason ?? value;
          }
          if (errors.requestedReason?.hasError) {
            runValidationTasks("requestedReason", value);
          }
          setRequestedReason(value);
        }}
        onBlur={() => runValidationTasks("requestedReason", requestedReason)}
        errorMessage={errors.requestedReason?.errorMessage}
        hasError={errors.requestedReason?.hasError}
        {...getOverrideProps(overrides, "requestedReason")}
      >
        <option
          children="Prior report card score"
          value="PriorReportCardScore"
          {...getOverrideProps(overrides, "requestedReasonoption0")}
        ></option>
        <option
          children="Desire to improve program"
          value="DesireToImproveProgram"
          {...getOverrideProps(overrides, "requestedReasonoption1")}
        ></option>
        <option
          children="Professional development plan"
          value="ProfessionalDevelopmentPlan"
          {...getOverrideProps(overrides, "requestedReasonoption2")}
        ></option>
        <option
          children="Not applicable"
          value="NotApplicable"
          {...getOverrideProps(overrides, "requestedReasonoption3")}
        ></option>
        <option
          children="Tecta orientation"
          value="TectaOrientation"
          {...getOverrideProps(overrides, "requestedReasonoption4")}
        ></option>
        <option
          children="Cda"
          value="Cda"
          {...getOverrideProps(overrides, "requestedReasonoption5")}
        ></option>
        <option
          children="Academic preparation"
          value="AcademicPreparation"
          {...getOverrideProps(overrides, "requestedReasonoption6")}
        ></option>
        <option
          children="Accreditation"
          value="Accreditation"
          {...getOverrideProps(overrides, "requestedReasonoption7")}
        ></option>
        <option
          children="Tecpac"
          value="Tecpac"
          {...getOverrideProps(overrides, "requestedReasonoption8")}
        ></option>
      </SelectField>
      <TextField
        label="Report card score"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={reportCardScore}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore: value,
              comments,
            };
            const result = onChange(modelFields);
            value = result?.reportCardScore ?? value;
          }
          if (errors.reportCardScore?.hasError) {
            runValidationTasks("reportCardScore", value);
          }
          setReportCardScore(value);
        }}
        onBlur={() => runValidationTasks("reportCardScore", reportCardScore)}
        errorMessage={errors.reportCardScore?.errorMessage}
        hasError={errors.reportCardScore?.hasError}
        {...getOverrideProps(overrides, "reportCardScore")}
      ></TextField>
      <TextField
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              lookupId,
              duration,
              startDate,
              sharedTraining,
              hasCorrectiveActionPlan,
              hasSafetyPlan,
              hasCredential,
              hasReferralEmail,
              requestedReason,
              reportCardScore,
              comments: value,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
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
