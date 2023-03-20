import { Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../model';
import { createJsonFilePLaceholder, createManipulators } from '../utils';

/**
 * Replace number to be like windows (tiré du 6)
 * TODO: Fix shift + 6
 */
export function createWindowsNumberKeysJsonFile(): Karabiner {
  const option6 = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          optional: [KarabinerModifierKeys.ANY],
        },
        // modifiers: [],
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
  const optionShift6 = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.LEFT_SHIFT],
        },
        key_code: KarabinerKeyCodes.PARAGRAPHE,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.PARAGRAPHE,
      },
    ],
  });
  return createJsonFilePLaceholder('Personal keys', 'Replace number to be like windows', [...option6, ...optionShift6]);
}
