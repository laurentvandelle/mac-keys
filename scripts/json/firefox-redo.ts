import { Applications, Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../model';
import { createJsonFilePLaceholder as createJsonFilePlaceholder, createManipulators } from '../utils';

/**
 * Replace ctrl + y to redo instead of close in firefox
 */
export function createFirefoxRedoJsonFile(): Karabiner {
  const redoFirefox1 = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_CONTROL],
        },
        key_code: KarabinerKeyCodes.Y,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.LEFT_CONTROL, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.Z,
      },
    ],
    onlyAppliesForThisApplications: [Applications.FIREFOX],
  });
  return createJsonFilePlaceholder('Personal keys', 'Firefox redo to ctrl + Y', [...redoFirefox1]);
}
