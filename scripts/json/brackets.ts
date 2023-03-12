import { Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../model';
import { createJsonFilePLaceholder, createManipulators } from '../utils';

export function createBracketsJsonFile(): Karabiner {
  const closeCurlyBracket = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.TIRET,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION],
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
  });
  const closeSquareBracket = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
  });
  const openCurlyBracket = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.SIMPLE_GUILLEMET,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION],
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
  });
  const openSquareBracket = createManipulators({
    assignShortcuts: [
      {
        modifiers: {
          mandatory: [KarabinerModifierKeys.RIGHT_OPTION],
        },
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
    assignKeys: [
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION, KarabinerModifierKeys.LEFT_SHIFT],
        key_code: KarabinerKeyCodes.PARENTESE_OUVRANTE,
      },
    ],
  });
  return createJsonFilePLaceholder('Personal keys', 'Exchange {} and [] and add {} to external keys', [
    ...closeCurlyBracket,
    ...closeSquareBracket,
    ...openCurlyBracket,
    ...openSquareBracket,
  ]);
}
