const axios = require("axios");

const axdata = async (stationName, callback) => {
  const url = process.env.AIR_URL;
  let ServiceKey = decodeURIComponent(process.env.API_KEY);
  try {
    const response = await axios.get(url, {
      params: {
        stationName: stationName,
        dataTerm: "daily",
        pageNo: "1",
        numOfRows: "1",
        returnType: "json",
        serviceKey: ServiceKey,
      },
    });

    // console.log("response", response);

    console.log(
      "response.data.response.body.items",
      response.data.response.body.items
    );

    const { dataTime, pm10Value, no2Value } =
      response.data.response.body.items[0];

    // console.log("response.data.response", response.data);

    const airquality = {
      location: stationName,
      time: dataTime,
      pm10: pm10Value,
      no2: no2Value,
    };

    callback(undefined, { airquality });
  } catch (error) {
    console.log("error broke out:  ", error);
  }
};

module.exports = axdata;
