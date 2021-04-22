import { ResponseApi } from "store/state";

const camelCase = (key: string): string => {
  const keyArray = key.split("_");
  keyArray[1] = `${keyArray[1][0].toUpperCase()}${keyArray[1].substring(1)}`;
  return keyArray.join("");
};

export const parser = (data: { [key: string]: unknown }): ResponseApi => {
  const pasedData: { [key: string]: unknown } = {};
  Object.keys(data).forEach((key) => {
    if (key.match("_")) {
      const newKey = camelCase(key);
      pasedData[newKey] = data[key];
    } else if (key === "results") {
      pasedData[key] = [];
      const dataArr = data[key] as [];
      dataArr.forEach((result: { [key: string]: unknown }) => {
        const obj: { [key: string]: unknown } = {};
        Object.keys(result).forEach((resultKey) => {
          if (resultKey.match("_")) {
            const newKey = camelCase(resultKey);
            obj[newKey] = result[resultKey];
          } else {
            obj[resultKey] = result[resultKey];
          }
        });
        (pasedData[key] as { [key: string]: unknown }[]).push(obj);
      });
    } else {
      pasedData[key] = data[key];
    }
  });
  return pasedData as ResponseApi;
};
