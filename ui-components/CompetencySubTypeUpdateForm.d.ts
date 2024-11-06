import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CompetencySubType } from "./graphql/types";
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
export declare type CompetencySubTypeUpdateFormInputValues = {
    name?: string;
    active?: boolean;
    sort?: number;
};
export declare type CompetencySubTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
    sort?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetencySubTypeUpdateFormOverridesProps = {
    CompetencySubTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    sort?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompetencySubTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompetencySubTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    competencySubType?: CompetencySubType;
    onSubmit?: (fields: CompetencySubTypeUpdateFormInputValues) => CompetencySubTypeUpdateFormInputValues;
    onSuccess?: (fields: CompetencySubTypeUpdateFormInputValues) => void;
    onError?: (fields: CompetencySubTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetencySubTypeUpdateFormInputValues) => CompetencySubTypeUpdateFormInputValues;
    onValidate?: CompetencySubTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompetencySubTypeUpdateForm(props: CompetencySubTypeUpdateFormProps): React.ReactElement;
