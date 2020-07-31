import { RootState } from "rootReducer";
import { PackageContainer } from "types";

// Service > dnpInstalled

export const getDnpInstalled = (state: RootState): PackageContainer[] =>
  state.dnpInstalled.dnpInstalled;

/**
 * Regular selectors, called outside of a normal react-redux situation
 */

export const getDnpInstalledById = (state: RootState, id: string) =>
  getDnpInstalled(state).find(({ name }) => name === id);