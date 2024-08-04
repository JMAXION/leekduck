import * as repository from "../repository/shinyRepository.js";

export async function getShiny(req, res) {
  const shiny = await repository.getShiny();
  console.log("shiny-->", shiny);
  res.json(shiny);
}
