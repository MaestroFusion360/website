// src/utils/index.ts

// -------------------------------------------------------------------------------
//                                     CX
// -------------------------------------------------------------------------------
type ClassPrimitive = string | number | bigint;
interface ClassDictionary {
  [key: string]: boolean | null | undefined;
}
type ClassArray = Array<ClassPrimitive | ClassDictionary | ClassArray | null | boolean | undefined>;
type ClassValue = ClassPrimitive | ClassDictionary | ClassArray | null | boolean | undefined;

export function cx(...classes: ClassValue[]): string {
  const result: string[] = [];

  const append = (value: ClassValue): void => {
    if (value === null || value === undefined || value === false) {
      return;
    }

    if (typeof value === 'string') {
      result.push(...value.split(/\s+/).filter(Boolean));
      return;
    }

    if (typeof value === 'number' || typeof value === 'bigint') {
      result.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      for (const entry of value) {
        append(entry);
      }
      return;
    }

    if (typeof value === 'object') {
      for (const [key, condition] of Object.entries(value as ClassDictionary)) {
        if (condition) {
          result.push(key);
        }
      }
    }
  };

  for (const cls of classes) {
    append(cls);
  }

  return result.join(' ');
}

// -------------------------------------------------------------------------------
