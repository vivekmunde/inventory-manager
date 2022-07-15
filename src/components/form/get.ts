function get(obj: any, path: string) {
  let result = obj;
  const fullPath = path
    .replace(/\[/g, '.')
    .replace(/]/g, '')
    .split('.')
    .filter(Boolean);

  function everyFunc(step: string) {
    if (typeof result === 'string') {
      return false;
    }
    result = result[step];
    return !(step && result === undefined);
  }

  return fullPath.every(everyFunc) ? result : undefined;
}

export default get;
