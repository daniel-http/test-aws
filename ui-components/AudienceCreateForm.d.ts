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
export declare type AudienceCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type AudienceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AudienceCreateFormOverridesProps = {
    AudienceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AudienceCreateFormProps = React.PropsWithChildren<{
    overrides?: AudienceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AudienceCreateFormInputValues) => AudienceCreateFormInputValues;
    onSuccess?: (fields: AudienceCreateFormInputValues) => void;
    onError?: (fields: AudienceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AudienceCreateFormInputValues) => AudienceCreateFormInputValues;
    onValidate?: AudienceCreateFormValidationValues;
} & React.CSSProperties>;
export default function AudienceCreateForm(props: AudienceCreateFormProps): React.ReactElement;
