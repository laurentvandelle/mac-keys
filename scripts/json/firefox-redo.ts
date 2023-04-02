import { Applications, Karabiner, KarabinerKeyCodes, KarabinerModifierKeys } from '../model';
import { createJsonFilePLaceholder, createManipulators } from '../utils';

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
      // {
      //   modifiers: {
      //     mandatory: [KarabinerModifierKeys.LEFT_CONTROL, KarabinerModifierKeys.LEFT_SHIFT],
      //   },
      //   key_code: KarabinerKeyCodes.Z,
      // },
      {
        modifiers: [KarabinerModifierKeys.RIGHT_OPTION],
        key_code: KarabinerKeyCodes.PARENTESE_FERMANTE,
      },
    ],
    onlyAppliesForThisApplications: [Applications.FIREFOX],
  });
  // const redoFirefox2 = createManipulators({
  //   assignShortcuts: [
  //     {
  //       modifiers: {
  //         mandatory: [KarabinerModifierKeys.RIGHT_COMMAND],
  //       },
  //       key_code: KarabinerKeyCodes.Y,
  //     },
  //   ],
  //   assignKeys: [
  //     {
  //       modifiers: {
  //         mandatory: [KarabinerModifierKeys.LEFT_CONTROL, KarabinerModifierKeys.LEFT_SHIFT],
  //       },
  //       key_code: KarabinerKeyCodes.Z,
  //     },
  //   ],
  //   onlyAppliesForThisApplications: [Applications.FIREFOX],
  // });
  return createJsonFilePLaceholder('Personal keys', 'Firefox redo to ctrl + Y', [...redoFirefox1]);
  // return createJsonFilePLaceholder('Personal keys', 'Firefox redo to ctrl + Y', [...redoFirefox1, ...redoFirefox2]);
}