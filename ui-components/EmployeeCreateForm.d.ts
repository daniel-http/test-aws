import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EmployeeCreateFormInputValues = {
    organization?: string;
    name?: string;
    email?: string;
    site?: string;
    duration?: string;
    position?: string;
};
export declare type EmployeeCreateFormValidationValues = {
    organization?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    site?: ValidationFunction<string>;
    duration?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeCreateFormOverridesProps = {
    EmployeeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    organization?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    site?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeCreateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmployeeCreateFormInputValues) => EmployeeCreateFormInputValues;
    onSuccess?: (fields: EmployeeCreateFormInputValues) => void;
    onError?: (fields: EmployeeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeCreateFormInputValues) => EmployeeCreateFormInputValues;
    onValidate?: EmployeeCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeCreateForm(props: EmployeeCreateFormProps): React.ReactElement;
