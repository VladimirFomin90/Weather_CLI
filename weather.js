#!/usr/bin/env node
import { getArgs } from "./help/args.js";
import { getWeather, getIconWeather } from "./services/API.js";
import {
    printHelp,
    printSuccess,
    printError,
    printWeather,
} from "./services/log.service.js";
import { saveKey, TOKEN_DICT, getKey } from "./services/storage.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Не передан token");
        return;
    }
    try {
        await saveKey(TOKEN_DICT.token, token);
        printSuccess("Токен сохранен");
    } catch (error) {
        printError(error.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError("Не передан город");
        return;
    }
    try {
        await saveKey(TOKEN_DICT.city, city);
        printSuccess("Город сохранен");
    } catch (error) {
        printError(error.message);
    }
};

const getForcast = async () => {
    try {
        const city = process.env.city ?? (await getKey(TOKEN_DICT.city));
        const weather = await getWeather(city);
        printWeather(weather, getIconWeather(weather.weather[0].icon));
    } catch (error) {
        if (error?.response?.status == 404) {
            printError("Не верно указан город");
        } else if (error?.response?.status == 401) {
            printError("Не верно указан токен");
        } else {
            printError(error.message);
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForcast();
};

initCLI();
