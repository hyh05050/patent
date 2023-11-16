const isDev = false;

export const consoleLog = (params) => {
  if (isDev) {
    console.log(params);
  }
};
