const pool = require("../db");

const StudentModel = {
    createStudent: async (name, age) => {
        const result = await pool.query(
            'INSERT INTO Students (name, age) VALUES ($1, $2) RETURNING *',
            [name, age]
        );
        return result.rows[0];
    }
};

module.exports = StudentModel;
