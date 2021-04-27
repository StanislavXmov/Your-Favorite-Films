import { ResponseApi } from "store/state";

const capitalize = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

const trasformToCamelCase = (key: string): string => {
  const keyArray = key.split("_");
  for (let i = 1; i < keyArray.length; i = +1) {
    keyArray[i] = capitalize(keyArray[1]);
  }
  return keyArray.join("");
};

export const apiResponseParser = (data: {
  [key: string]: unknown;
}): ResponseApi => {
  const parsedData: { [key: string]: unknown } = {};
  Object.keys(data).forEach((key) => {
    if (key.match("_")) {
      const newKey = trasformToCamelCase(key);
      parsedData[newKey] = data[key];
    } else if (key === "results") {
      parsedData[key] = [];
      const dataArr = data[key] as [];
      dataArr.forEach((result: { [key: string]: unknown }) => {
        const obj: { [key: string]: unknown } = {};
        Object.keys(result).forEach((resultKey) => {
          if (resultKey.match("_")) {
            const newKey = trasformToCamelCase(resultKey);
            obj[newKey] = result[resultKey];
          } else {
            obj[resultKey] = result[resultKey];
          }
        });
        (parsedData[key] as { [key: string]: unknown }[]).push(obj);
      });
    } else {
      parsedData[key] = data[key];
    }
  });
  return parsedData as ResponseApi;
};
