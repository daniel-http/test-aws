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
export declare type AgeGroupCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type AgeGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgeGroupCreateFormOverridesProps = {
    AgeGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AgeGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: AgeGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgeGroupCreateFormInputValues) => AgeGroupCreateFormInputValues;
    onSuccess?: (fields: AgeGroupCreateFormInputValues) => void;
    onError?: (fields: AgeGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgeGroupCreateFormInputValues) => AgeGroupCreateFormInputValues;
    onValidate?: AgeGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgeGroupCreateForm(props: AgeGroupCreateFormProps): React.ReactElement;
