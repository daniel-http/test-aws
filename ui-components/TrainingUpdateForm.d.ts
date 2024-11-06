import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Training } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainingUpdateFormInputValues = {
    lookupId?: number;
    duration?: string;
    startDate?: string;
    sharedTraining?: boolean;
    hasCorrectiveActionPlan?: boolean;
    hasSafetyPlan?: boolean;
    hasCredential?: boolean;
    hasReferralEmail?: boolean;
    requestedReason?: string;
    reportCardScore?: number;
    comments?: string;
};
export declare type TrainingUpdateFormValidationValues = {
    lookupId?: ValidationFunction<number>;
    duration?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    sharedTraining?: ValidationFunction<boolean>;
    hasCorrectiveActionPlan?: ValidationFunction<boolean>;
    hasSafetyPlan?: ValidationFunction<boolean>;
    hasCredential?: ValidationFunction<boolean>;
    hasReferralEmail?: ValidationFunction<boolean>;
    requestedReason?: ValidationFunction<string>;
    reportCardScore?: ValidationFunction<number>;
    comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingUpdateFormOverridesProps = {
    TrainingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    lookupId?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    sharedTraining?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasCorrectiveActionPlan?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasSafetyPlan?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasCredential?: PrimitiveOverrideProps<SwitchFieldProps>;
    hasReferralEmail?: PrimitiveOverrideProps<SwitchFieldProps>;
    requestedReason?: PrimitiveOverrideProps<SelectFieldProps>;
    reportCardScore?: PrimitiveOverrideProps<TextFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    training?: Training;
    onSubmit?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onSuccess?: (fields: TrainingUpdateFormInputValues) => void;
    onError?: (fields: TrainingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onValidate?: TrainingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingUpdateForm(props: TrainingUpdateFormProps): React.ReactElement;
