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
export declare type ParticipantCreateFormInputValues = {
    searchId?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    tnpalId?: string;
    fein?: string;
    feinExt?: string;
    facilityName?: string;
    contactTime?: string;
    postalCode?: string;
    county?: string;
    position?: string;
    certicateIssued?: boolean;
    followUpIssued?: boolean;
    followUpMethod?: string;
    followUpDate?: string;
};
export declare type ParticipantCreateFormValidationValues = {
    searchId?: ValidationFunction<number>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    tnpalId?: ValidationFunction<string>;
    fein?: ValidationFunction<string>;
    feinExt?: ValidationFunction<string>;
    facilityName?: ValidationFunction<string>;
    contactTime?: ValidationFunction<string>;
    postalCode?: ValidationFunction<string>;
    county?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    certicateIssued?: ValidationFunction<boolean>;
    followUpIssued?: ValidationFunction<boolean>;
    followUpMethod?: ValidationFunction<string>;
    followUpDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParticipantCreateFormOverridesProps = {
    ParticipantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    searchId?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    tnpalId?: PrimitiveOverrideProps<TextFieldProps>;
    fein?: PrimitiveOverrideProps<TextFieldProps>;
    feinExt?: PrimitiveOverrideProps<TextFieldProps>;
    facilityName?: PrimitiveOverrideProps<TextFieldProps>;
    contactTime?: PrimitiveOverrideProps<TextFieldProps>;
    postalCode?: PrimitiveOverrideProps<TextFieldProps>;
    county?: PrimitiveOverrideProps<SelectFieldProps>;
    position?: PrimitiveOverrideProps<SelectFieldProps>;
    certicateIssued?: PrimitiveOverrideProps<SwitchFieldProps>;
    followUpIssued?: PrimitiveOverrideProps<SwitchFieldProps>;
    followUpMethod?: PrimitiveOverrideProps<SelectFieldProps>;
    followUpDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParticipantCreateFormProps = React.PropsWithChildren<{
    overrides?: ParticipantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ParticipantCreateFormInputValues) => ParticipantCreateFormInputValues;
    onSuccess?: (fields: ParticipantCreateFormInputValues) => void;
    onError?: (fields: ParticipantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParticipantCreateFormInputValues) => ParticipantCreateFormInputValues;
    onValidate?: ParticipantCreateFormValidationValues;
} & React.CSSProperties>;
export default function ParticipantCreateForm(props: ParticipantCreateFormProps): React.ReactElement;
