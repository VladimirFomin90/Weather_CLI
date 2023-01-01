import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
    console.log(chalk.bgRed(" ERROR ") + " " + error);
};

export const printSuccess = (message) => {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgYellow(" HELP ")}
		Без аргументов - вывод погоды
		-s [CITY] для установки города
		-h помощь
		-t [API_KEY] сохранить токен
		`
    );
};

export const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlackBright(" Weather ")} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как: ${res.main.feels_like})
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}м/с
		`
    );
};
