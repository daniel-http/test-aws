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
export declare type TargetCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type TargetCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TargetCreateFormOverridesProps = {
    TargetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TargetCreateFormProps = React.PropsWithChildren<{
    overrides?: TargetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TargetCreateFormInputValues) => TargetCreateFormInputValues;
    onSuccess?: (fields: TargetCreateFormInputValues) => void;
    onError?: (fields: TargetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TargetCreateFormInputValues) => TargetCreateFormInputValues;
    onValidate?: TargetCreateFormValidationValues;
} & React.CSSProperties>;
export default function TargetCreateForm(props: TargetCreateFormProps): React.ReactElement;