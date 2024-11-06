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
export declare type DeliveryCreateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type DeliveryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveryCreateFormOverridesProps = {
    DeliveryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DeliveryCreateFormProps = React.PropsWithChildren<{
    overrides?: DeliveryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeliveryCreateFormInputValues) => DeliveryCreateFormInputValues;
    onSuccess?: (fields: DeliveryCreateFormInputValues) => void;
    onError?: (fields: DeliveryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveryCreateFormInputValues) => DeliveryCreateFormInputValues;
    onValidate?: DeliveryCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveryCreateForm(props: DeliveryCreateFormProps): React.ReactElement;
