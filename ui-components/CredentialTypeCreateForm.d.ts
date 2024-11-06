import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CredentialTypeCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type CredentialTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CredentialTypeCreateFormOverridesProps = {
    CredentialTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CredentialTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: CredentialTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CredentialTypeCreateFormInputValues) => CredentialTypeCreateFormInputValues;
    onSuccess?: (fields: CredentialTypeCreateFormInputValues) => void;
    onError?: (fields: CredentialTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CredentialTypeCreateFormInputValues) => CredentialTypeCreateFormInputValues;
    onValidate?: CredentialTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CredentialTypeCreateForm(props: CredentialTypeCreateFormProps): React.ReactElement;
