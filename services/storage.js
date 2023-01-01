import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const tokenPath = join(homedir(), "weather-cli.json");
export const TOKEN_DICT = {
    token: "token",
    city: "city",
};

export const saveKey = async (key, value) => {
    let data = {};
    if (await isExist(tokenPath)) {
        const file = await promises.readFile(tokenPath);
        data = JSON.parse(file);
    }
    data[key] = value;

    await promises.writeFile(tokenPath, JSON.stringify(data));
};

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
};

export const getKey = async (key) => {
    if (await isExist(tokenPath)) {
        const file = await promises.readFile(tokenPath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
};
