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
export declare type TrainingTypeCreateFormInputValues = {
    name?: string;
    code?: string;
    active?: boolean;
};
export declare type TrainingTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingTypeCreateFormOverridesProps = {
    TrainingTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TrainingTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainingTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainingTypeCreateFormInputValues) => TrainingTypeCreateFormInputValues;
    onSuccess?: (fields: TrainingTypeCreateFormInputValues) => void;
    onError?: (fields: TrainingTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingTypeCreateFormInputValues) => TrainingTypeCreateFormInputValues;
    onValidate?: TrainingTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingTypeCreateForm(props: TrainingTypeCreateFormProps): React.ReactElement;
