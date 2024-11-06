import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TrainingType } from "./graphql/types";
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
export declare type TrainingTypeUpdateFormInputValues = {
    name?: string;
    code?: string;
    active?: boolean;
};
export declare type TrainingTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingTypeUpdateFormOverridesProps = {
    TrainingTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TrainingTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trainingType?: TrainingType;
    onSubmit?: (fields: TrainingTypeUpdateFormInputValues) => TrainingTypeUpdateFormInputValues;
    onSuccess?: (fields: TrainingTypeUpdateFormInputValues) => void;
    onError?: (fields: TrainingTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingTypeUpdateFormInputValues) => TrainingTypeUpdateFormInputValues;
    onValidate?: TrainingTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingTypeUpdateForm(props: TrainingTypeUpdateFormProps): React.ReactElement;
