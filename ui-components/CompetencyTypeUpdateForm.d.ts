import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CompetencyType } from "./graphql/types";
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
export declare type CompetencyTypeUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type CompetencyTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompetencyTypeUpdateFormOverridesProps = {
    CompetencyTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CompetencyTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CompetencyTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    competencyType?: CompetencyType;
    onSubmit?: (fields: CompetencyTypeUpdateFormInputValues) => CompetencyTypeUpdateFormInputValues;
    onSuccess?: (fields: CompetencyTypeUpdateFormInputValues) => void;
    onError?: (fields: CompetencyTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompetencyTypeUpdateFormInputValues) => CompetencyTypeUpdateFormInputValues;
    onValidate?: CompetencyTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CompetencyTypeUpdateForm(props: CompetencyTypeUpdateFormProps): React.ReactElement;
