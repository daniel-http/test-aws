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
export declare type CompetencyTypeCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type CompetencyTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetencyTypeCreateFormOverridesProps = {
    CompetencyTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CompetencyTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: CompetencyTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompetencyTypeCreateFormInputValues) => CompetencyTypeCreateFormInputValues;
    onSuccess?: (fields: CompetencyTypeCreateFormInputValues) => void;
    onError?: (fields: CompetencyTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetencyTypeCreateFormInputValues) => CompetencyTypeCreateFormInputValues;
    onValidate?: CompetencyTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompetencyTypeCreateForm(props: CompetencyTypeCreateFormProps): React.ReactElement;
