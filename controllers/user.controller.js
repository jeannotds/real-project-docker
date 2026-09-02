import { db } from "../src/db.js";

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const result = await db.query(
      `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *
      `,
      [name, email],
    );

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la création de l'utilisateur",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT * FROM users
      ORDER BY id ASC
    `);

    res.json({
      users: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération des utilisateurs",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `
      SELECT * FROM users
      WHERE id = $1
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Utilisateur non trouvé",
      });
    }

    res.json({
      user: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la récupération de l'utilisateur",
    });
  }
};
