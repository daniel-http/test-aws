import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tenant } from "./graphql/types";
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
export declare type TenantUpdateFormInputValues = {
    name?: string;
    code?: string;
    active?: boolean;
};
export declare type TenantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantUpdateFormOverridesProps = {
    TenantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TenantUpdateFormProps = React.PropsWithChildren<{
    overrides?: TenantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tenant?: Tenant;
    onSubmit?: (fields: TenantUpdateFormInputValues) => TenantUpdateFormInputValues;
    onSuccess?: (fields: TenantUpdateFormInputValues) => void;
    onError?: (fields: TenantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantUpdateFormInputValues) => TenantUpdateFormInputValues;
    onValidate?: TenantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TenantUpdateForm(props: TenantUpdateFormProps): React.ReactElement;
