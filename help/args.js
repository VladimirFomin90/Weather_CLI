export const getArgs = (args) => {
    const arrayResult = {};
    const [executer, fileJS, ...rest] = args;
    rest.forEach((value, index, array) => {
        if (value.charAt(0) == "-") {
            if (index == array.length - 1) {
                arrayResult[value.substring(1)] = true;
            } else if (array[index + 1].charAt(0) != "-") {
                arrayResult[value.substring(1)] = array[index + 1];
            } else {
                arrayResult[value.substring(1)] = true;
            }
        }
    });
    return arrayResult;
};
