/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type TranslationValue = "enUs" | "unnamedVariant";
export const TranslationContext = React.createContext<
  TranslationValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function TranslationContextProvider(
  props: React.PropsWithChildren<{ value: TranslationValue | undefined }>
) {
  return (
    <TranslationContext.Provider value={props.value}>
      {props.children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return React.useContext(TranslationContext);
}

export default TranslationContext;
/* prettier-ignore-end */
