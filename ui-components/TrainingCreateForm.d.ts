import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TrainingCreateFormInputValues = {
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
export declare type TrainingCreateFormValidationValues = {
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
export declare type TrainingCreateFormOverridesProps = {
    TrainingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type TrainingCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onSuccess?: (fields: TrainingCreateFormInputValues) => void;
    onError?: (fields: TrainingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onValidate?: TrainingCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingCreateForm(props: TrainingCreateFormProps): React.ReactElement;
