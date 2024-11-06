import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Participant } from "./graphql/types";
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
export declare type ParticipantUpdateFormInputValues = {
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
export declare type ParticipantUpdateFormValidationValues = {
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
export declare type ParticipantUpdateFormOverridesProps = {
    ParticipantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ParticipantUpdateFormProps = React.PropsWithChildren<{
    overrides?: ParticipantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    participant?: Participant;
    onSubmit?: (fields: ParticipantUpdateFormInputValues) => ParticipantUpdateFormInputValues;
    onSuccess?: (fields: ParticipantUpdateFormInputValues) => void;
    onError?: (fields: ParticipantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParticipantUpdateFormInputValues) => ParticipantUpdateFormInputValues;
    onValidate?: ParticipantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ParticipantUpdateForm(props: ParticipantUpdateFormProps): React.ReactElement;
