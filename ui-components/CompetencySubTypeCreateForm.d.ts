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
export declare type CompetencySubTypeCreateFormInputValues = {
    name?: string;
    active?: boolean;
    sort?: number;
};
export declare type CompetencySubTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetencySubTypeCreateFormOverridesProps = {
    CompetencySubTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompetencySubTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: CompetencySubTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompetencySubTypeCreateFormInputValues) => CompetencySubTypeCreateFormInputValues;
    onSuccess?: (fields: CompetencySubTypeCreateFormInputValues) => void;
    onError?: (fields: CompetencySubTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetencySubTypeCreateFormInputValues) => CompetencySubTypeCreateFormInputValues;
    onValidate?: CompetencySubTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompetencySubTypeCreateForm(props: CompetencySubTypeCreateFormProps): React.ReactElement;
