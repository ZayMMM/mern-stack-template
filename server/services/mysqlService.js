const { pool } = require('../database/mysql');

async function singleQuery(sql, params) {
  pool.query(sql,
    (err, results, fields) => {
      console.log(err); // error contains the error message
      //console.log(results[0]); // results contains rows returned by server
      return results[0];
    });
}

function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}
``
function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  singleQuery,
  getOffset,
  emptyOrRows
};