const { pool } = require('../database/mysql');

function query(sql, params) {
    const [results] = pool.query(sql, params);

    return results;
}

function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }

module.exports = {
    query,
    getOffset,
    emptyOrRows
};