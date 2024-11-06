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
export declare type ReferralCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type ReferralCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferralCreateFormOverridesProps = {
    ReferralCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReferralCreateFormProps = React.PropsWithChildren<{
    overrides?: ReferralCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReferralCreateFormInputValues) => ReferralCreateFormInputValues;
    onSuccess?: (fields: ReferralCreateFormInputValues) => void;
    onError?: (fields: ReferralCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferralCreateFormInputValues) => ReferralCreateFormInputValues;
    onValidate?: ReferralCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReferralCreateForm(props: ReferralCreateFormProps): React.ReactElement;
