import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AgeGroup } from "./graphql/types";
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
export declare type AgeGroupUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type AgeGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgeGroupUpdateFormOverridesProps = {
    AgeGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AgeGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: AgeGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ageGroup?: AgeGroup;
    onSubmit?: (fields: AgeGroupUpdateFormInputValues) => AgeGroupUpdateFormInputValues;
    onSuccess?: (fields: AgeGroupUpdateFormInputValues) => void;
    onError?: (fields: AgeGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgeGroupUpdateFormInputValues) => AgeGroupUpdateFormInputValues;
    onValidate?: AgeGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AgeGroupUpdateForm(props: AgeGroupUpdateFormProps): React.ReactElement;
