import { Karabiner, KarabinerManipulators, KarabinerModifier } from './model';

export function createJsonFilePLaceholder(title: string, description: string, manipulators: KarabinerManipulators[]): Karabiner {
  return { title, rules: [{ description, manipulators }] };
}

export function createManipulators({
  assignShortcuts,
  assignKeys,
}: {
  assignShortcuts: KarabinerModifier[];
  assignKeys: KarabinerModifier[];
}): KarabinerManipulators[] {
  return assignShortcuts.map((assignShortcut) => {
    return { type: 'basic', from: assignShortcut, to: assignKeys };
  });
}
