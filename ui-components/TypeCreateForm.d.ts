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
export declare type TypeCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type TypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TypeCreateFormOverridesProps = {
    TypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TypeCreateFormProps = React.PropsWithChildren<{
    overrides?: TypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TypeCreateFormInputValues) => TypeCreateFormInputValues;
    onSuccess?: (fields: TypeCreateFormInputValues) => void;
    onError?: (fields: TypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TypeCreateFormInputValues) => TypeCreateFormInputValues;
    onValidate?: TypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TypeCreateForm(props: TypeCreateFormProps): React.ReactElement;
