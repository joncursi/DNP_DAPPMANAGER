import { RequestData } from "../route-types/autoUpdateSettingsEdit";
import {
  MY_PACKAGES, // "my-packages"
  SYSTEM_PACKAGES, // "system-packages"
  editDnpSetting,
  editCoreSetting
} from "../utils/autoUpdateHelper";

/**
 * Edits the auto-update settings
 *
 * @param id = "my-packages", "system-packages" or "bitcoin.dnp.dappnode.eth"
 * @param enabled Auto update is enabled for ID
 */
export default async function autoUpdateSettingsEdit({
  id,
  enabled
}: RequestData): Promise<void> {
  if (!id)
    throw Error(`Argument id is required or generalSettings must be true`);

  if (id === MY_PACKAGES) editDnpSetting(enabled);
  else if (id === SYSTEM_PACKAGES) editCoreSetting(enabled);
  else editDnpSetting(enabled, id);
}
