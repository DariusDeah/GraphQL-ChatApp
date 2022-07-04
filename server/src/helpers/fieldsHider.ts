export function fieldsHider(obj: any, fields: string[]) {
  for (let i = 0; i < fields.length; i++) {
    obj[fields[i]] = null;
  }
  return obj;
}
