import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Audience } from "./graphql/types";
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
export declare type AudienceUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type AudienceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AudienceUpdateFormOverridesProps = {
    AudienceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AudienceUpdateFormProps = React.PropsWithChildren<{
    overrides?: AudienceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    audience?: Audience;
    onSubmit?: (fields: AudienceUpdateFormInputValues) => AudienceUpdateFormInputValues;
    onSuccess?: (fields: AudienceUpdateFormInputValues) => void;
    onError?: (fields: AudienceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AudienceUpdateFormInputValues) => AudienceUpdateFormInputValues;
    onValidate?: AudienceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AudienceUpdateForm(props: AudienceUpdateFormProps): React.ReactElement;
