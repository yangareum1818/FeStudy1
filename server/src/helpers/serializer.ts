type Options = {
  omit: string[];
};

export const joinSerializer = <T = Record<string, any>>(
  object: Record<string, any>,
  options?: Options
): T => {
  return Object.entries(object).reduce<Record<string, any>>(
    (obj, [key, val]) => {
      if (key.match(/^\w+\_\_\w+/)) {
        const keys = key.split("__");
        if (options?.omit && options.omit.includes(keys[0])) {
          obj[keys[1]] = val;
          return obj;
        }
        if (!obj[keys[0]] || typeof obj[keys[0]] !== "object") {
          obj[keys[0]] = {};
        }
        obj[keys[0]][keys[1]] = val;
      } else {
        obj[key] = val;
      }
      return obj;
    },
    {}
  ) as T;
};
