import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Target } from "./graphql/types";
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
export declare type TargetUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type TargetUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TargetUpdateFormOverridesProps = {
    TargetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TargetUpdateFormProps = React.PropsWithChildren<{
    overrides?: TargetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    target?: Target;
    onSubmit?: (fields: TargetUpdateFormInputValues) => TargetUpdateFormInputValues;
    onSuccess?: (fields: TargetUpdateFormInputValues) => void;
    onError?: (fields: TargetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TargetUpdateFormInputValues) => TargetUpdateFormInputValues;
    onValidate?: TargetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TargetUpdateForm(props: TargetUpdateFormProps): React.ReactElement;
