import { db } from "../database/database_mysql80.js";

export const getShiny = async () => {
  const sql = `
  select id, name, img from shiny_table
  `;
  return db.execute(sql).then((result) => result[0]);
};
