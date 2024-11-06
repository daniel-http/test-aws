import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Referral } from "./graphql/types";
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
export declare type ReferralUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type ReferralUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReferralUpdateFormOverridesProps = {
    ReferralUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ReferralUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReferralUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    referral?: Referral;
    onSubmit?: (fields: ReferralUpdateFormInputValues) => ReferralUpdateFormInputValues;
    onSuccess?: (fields: ReferralUpdateFormInputValues) => void;
    onError?: (fields: ReferralUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReferralUpdateFormInputValues) => ReferralUpdateFormInputValues;
    onValidate?: ReferralUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReferralUpdateForm(props: ReferralUpdateFormProps): React.ReactElement;
