import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Type } from "./graphql/types";
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
export declare type TypeUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type TypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TypeUpdateFormOverridesProps = {
    TypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    type?: Type;
    onSubmit?: (fields: TypeUpdateFormInputValues) => TypeUpdateFormInputValues;
    onSuccess?: (fields: TypeUpdateFormInputValues) => void;
    onError?: (fields: TypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TypeUpdateFormInputValues) => TypeUpdateFormInputValues;
    onValidate?: TypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TypeUpdateForm(props: TypeUpdateFormProps): React.ReactElement;
