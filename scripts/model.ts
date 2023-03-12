import { createBracketsJsonFile } from './json/brackets';

export enum KarabinerModifierKeys {
  RIGHT_OPTION = 'right_option',
  LEFT_SHIFT = 'left_shift',
}

export enum KarabinerKeyCodes {
  TIRET = 'equal_sign',
  PARENTESE_OUVRANTE = '5',
  PARENTESE_FERMANTE = 'hyphen',
  SIMPLE_GUILLEMET = '4',
}

export enum jsonFileNames {
  PC_OPTION = 'pc-option-keys',
  PC_REPLACE = 'pc-replace-keys',
  BRACKETS = 'brackets',
}

export const jsonFiles: Record<string, Karabiner> = {
  'pc-option-keys': {} as Karabiner,
  'pc-replace-keys': {} as Karabiner,
  brackets: createBracketsJsonFile(),
};

export type Karabiner = {
  title: string;
  rules: [
    {
      description: string;
      manipulators: KarabinerManipulators[];
    },
  ];
};

export type KarabinerManipulators = {
  type: 'basic';
  from: KarabinerModifier; // Shortcut you want
  to: KarabinerModifier[]; // Character you want
};

export type KarabinerModifier = {
  modifiers: KarabinerMandatoryModifier | KarabinerModifierKeys[];
  key_code: KarabinerKeyCodes;
};

export type KarabinerMandatoryModifier = {
  mandatory: KarabinerModifierKeys[];
};
