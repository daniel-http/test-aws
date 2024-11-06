import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CredentialType } from "./graphql/types";
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
export declare type CredentialTypeUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type CredentialTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CredentialTypeUpdateFormOverridesProps = {
    CredentialTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CredentialTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CredentialTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    credentialType?: CredentialType;
    onSubmit?: (fields: CredentialTypeUpdateFormInputValues) => CredentialTypeUpdateFormInputValues;
    onSuccess?: (fields: CredentialTypeUpdateFormInputValues) => void;
    onError?: (fields: CredentialTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CredentialTypeUpdateFormInputValues) => CredentialTypeUpdateFormInputValues;
    onValidate?: CredentialTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CredentialTypeUpdateForm(props: CredentialTypeUpdateFormProps): React.ReactElement;
