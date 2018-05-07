module.exports = {
  fetchData: function(url, callback) {
    $.ajax({
      type: "GET",
      crossDomain: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      dataType: "json",
      url: "http://localhost:3000/src/data/data01.json",
      timeout: 10000,
      cache: true,
      async: false,
      success: function(data) {
        reData = data;
        return reData;
        // module.exports.successCallback(data);
      },
      error: function(parsedjson, textStatus, errorThrown) {
        console.warn(errorThrown);
      },
      complete: function() {}
    });
  },
  successCallback: function(data) {
    return data;
  }
};
