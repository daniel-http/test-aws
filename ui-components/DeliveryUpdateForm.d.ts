import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Delivery } from "./graphql/types";
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
export declare type DeliveryUpdateFormInputValues = {
    name?: string;
    active?: boolean;
};
export declare type DeliveryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    active?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveryUpdateFormOverridesProps = {
    DeliveryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DeliveryUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeliveryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    delivery?: Delivery;
    onSubmit?: (fields: DeliveryUpdateFormInputValues) => DeliveryUpdateFormInputValues;
    onSuccess?: (fields: DeliveryUpdateFormInputValues) => void;
    onError?: (fields: DeliveryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveryUpdateFormInputValues) => DeliveryUpdateFormInputValues;
    onValidate?: DeliveryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveryUpdateForm(props: DeliveryUpdateFormProps): React.ReactElement;
