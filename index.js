import { faker } from "@faker-js/faker";
import axios from "axios";
import fs from "fs/promises";

const dataSet = Array.from({ length: 500 }, () => ({
  name: faker.person.fullName(),
  difficulty: ["Easy", "Medium", "Hard"].sort(() => 0.5 - Math.random()).pop(),
  category: ["Math", "Science", "History", "English"]
    .sort(() => 0.5 - Math.random())
    .pop(),
  picture: faker.image.avatar(),
}));

async function main() {
  for (const data of dataSet) {
    const response = await axios.get(data.picture, {
      responseType: "arraybuffer",
    });

    const fileName = `${data.name.split(" ").join("-").toLowerCase()}_${[
      "Easy",
      "Medium",
      "Hard",
    ].indexOf(data.difficulty)}_${[
      "Math",
      "Science",
      "History",
      "English",
    ].indexOf(data.category)}.png`;

    console.log(`Writing ${fileName} to disk...`);

    await fs.writeFile(`./data/${fileName}`, response.data);
  }
}

main();
