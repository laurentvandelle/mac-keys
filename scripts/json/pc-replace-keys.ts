import { Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../model';
import { createJsonFilePLaceholder, createManipulators } from '../utils';

/**
 * Replace number to be like windows (tiré du 6)
 */
export function createWindowsNumberKeysJsonFile(): Karabiner {
  const option6 = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          optional: [KarabinerModifierKeys.ANY],
        },
        key_code: KarabinerKeyCodes.PARAGRAPHE,
      },
    ],
    assignKeys: [
      {
        modifiers: [],
        key_code: KarabinerKeyCodes.TIRET,
      },
    ],
  });
  return createJsonFilePLaceholder('Personal keys', 'Replace number to be like windows', [...option6]);
}
