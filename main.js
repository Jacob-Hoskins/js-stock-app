const axios = require("axios");
const oneWeek = require("./invterval-modules/oneWeek");
const biWeekly = require("./invterval-modules/biWeekly");
const options = require("./endpointOptions/options");
const GV = require("./data/GlobalVars");
const parameters = require("./parameters/parameterCheck");

//main starting point, handles what type of exchange and how to process and get data
// .request(options.allCryptos)
//.request(options.cryptoRSI)
// axios
//   .request(options.allStockOptions)
//   .then((res) => {
//     handleStockData(res.data);
//     //handleCryptoData(res.data);
//     //handleEtfData(res.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

function makeRequest(options) {
  axios
    .request(options)
    .then((res) => {
      console.log("Make request");
      handleStockData(res.data);
      startSearchingStocks();
      //handleCryptoData(res.data);
      //handleEtfData(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

makeRequest(options.allStockOptions);

function printData() {
  //console.log(GV.MacdOneWeek);
  //console.log(GV.RSIOneWeek);
  //console.log(GV.RSIBiweekly);
  //console.log(GV.RSIOneMonth);
  //console.log(GV.StochOneWeek);
  //console.log(GV.StochBiWeekly);
  //console.log(GV.StochOneMonth);
  //console.log(GV.StochRsiOneWeek);
  //console.log(GV.StochRsiBiweekly);
  //console.log(GV.StochRsiMonthly);
  //console.log(GV.StochBiWeekly)
  console.log(GV.MacdOneWeek);
  //console.log(GV.MacdBiWeekly);
  //console.log(GV.MacdMonthly);
}

setTimeout(() => {
  console.log("In Timeout");
  //parameters.RsiWeekParameterCheck();
  //parameters.RsiBiweeklyParameterCheck();
  //parameters.RsiMonthParameterCheck();
  //parameters.StochWeekParameterCheck();
  //parameters.StochBiweeklyParameterCheck();
  //parameters.StochMonthParameterCheck();
  //parameters.StochRsiWeekParameterCheck();
  //parameters.stochRsiBiweeklyCheck();
  //parameters.StochRsiMonthlyParameterCheck();
  parameters.MacdFiveDayParameterCheck();
  //macd week is the biweekly
  //parameters.MacdWeekParameterCheck();
  //parameters.MacdMonthlyParameterCheck();
  printData();
}, 7000);

//This fucntion just grabs all stock index's
function handleStockData(data) {
  //was data.data.length - 1
  for (let x = 0; x <= data.data.length - 5255; x++) {
    let stock = data.data[x]["symbol"];
    GV.testingSymbols.push(stock);
  }
  // let search = startSearchingStocks();
  // return search;
  //startSearchingStocksBiweekly();
}

function handleCryptoData(data) {
  console.log(data.data);
  for (let x = 0; x <= data.data.length - 30; x++) {
    let coinSymbol = data.data[x]["symbol"];
    GV.testingSymbols.push(coinSymbol);
  }

  startSearchingCrypto();
}

function handleEtfData(data) {
  console.log(data);
}

function startSearchingStocks() {
  //grabs RSI values
  //TODO: make function for this for loop

  for (x = 0; x <= GV.testingSymbols.length - 1; x++) {
    let sym = GV.testingSymbols[x];

    //console.log("start searching macd");

    //*** RSI
    //let weekly_Output = oneWeek.rsiOneW(sym, "1week");
    //let biweekly_output = biWeekly.rsiBiweeklyParams(sym);
    //let one_Month_Output = oneWeek.rsiOneW(sym, "1month");
    //searchRSI(weekly_Output);
    //searchRSIBiweekly(biweekly_output);
    //searchRSI(one_Month_Output);

    //***stoch;
    //let stochOneWeek = oneWeek.stochOneWmParams(sym, "1week");
    //let stochBiweekly = oneWeek.stochOneWmParams(sym, "1week");
    //let stochOneMonth = oneWeek.stochOneWmParams(sym, "1month");
    //searchStochMonthly(stochOneMonth);
    //searchStoch(stochOneWeek);
    //searchStochBiweekly(stochBiweekly);

    //***macd
    // console.log("start searching macd");
    // searchMacdMonthly(macdMonthly);

    //console.log(symMACD);
    //let macdBiweekly = oneWeek.macdOneW(sym);
    //searchMACD(macdBiweekly);
    let fiveDayParams = oneWeek.macdFiveDay(sym);
    searchMACDFive(fiveDayParams);
    //let macdBiweekly = oneWeek.macdOneW(sym);
    //let macdMonthly = oneWeek.macdMonthParams(sym);
    //searchMacdBiweekly(macdBiweekly);
    //searchMacdMonthly(macdMonthly);

    //***stochRSI;
    //let sym_stoch_rsi = GV.testingSymbols[x];
    //let stochrsi_one_week_options = oneWeek.stochRsiWmParams(sym, "1week");
    //searchStochRSI(stochrsi_one_week_options);

    //let stochrsi_biweekly_options = biWeekly.rsiBiweeklyParams(sym);
    //searchStochRsiBiweekly(stochrsi_biweekly_options);

    //let stochrsi_one_month_options = oneWeek.stochRsiWmParams(sym, "1month");
    //searchStohcRsiMonthly(stochrsi_one_month_options);

    //***ETF LISTS
  }
}

function startSearchingStocksBiweekly() {
  const stocks = GV.testingSymbols;
  for (let x = 0; x <= stocks.length - 3; x++) {
    symbol = stocks[x];
    params = biWeekly.rsiBiweeklyParams(symbol);
    console.log(params);
    //searchRSIBiweekly(params);
  }
}

function startSearchingCrypto() {
  for (x = 0; x <= testingSymbols.length; x++) {
    let crypto = testingSymbols[x];
  }
}

function searchRSI(options) {
  console.log("IN SEARCHING RSI");
  axios
    .request(options)
    .then((res) => {
      oneWeek.rsiValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return GV.RSIOneWeek;
}

function searchRSIBiweekly(options) {
  axios
    .request(options)
    .then((res) => {
      biWeekly.grabRSIValues(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

/* STOCH */

function searchStoch(stochOptions) {
  axios
    .request(stochOptions)
    .then((res) => {
      oneWeek.stochValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchStochBiweekly(stochOptions) {
  axios
    .request(stochOptions)
    .then((res) => {
      console.log(stochOptions);
      biWeekly.stochValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchStochMonthly(options) {
  axios
    .request(options)
    .then((res) => {
      oneWeek.stochValueMonthly(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchStochRSI(options) {
  axios
    .request(options)
    .then((res) => {
      //console.log(res.data);
      oneWeek.stochRsiValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchStochRsiBiweekly(options) {
  axios
    .request(options)
    .then((res) => {
      //console.log(res.data);
      biWeekly.stochRsiValueBiweekly(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchStohcRsiMonthly(options) {
  axios
    .request(options)
    .then((res) => {
      //console.log(res.data);
      oneWeek.stochRsiMonthValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

/* MACD */
function searchMACDFive(options) {
  axios
    .request(options)
    .then((res) => {
      oneWeek.macdValueFiveDay(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchMACD(options) {
  axios
    .request(options)
    .then((res) => {
      oneWeek.macdValueBiweekly(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchMacdBiweekly(options) {
  axios
    .request(options)
    .then((res) => {
      biWeekly.MacdBiweeklyValue(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchMacdMonthly(options) {
  console.log("In search");
  axios
    .request(options)
    .then((res) => {
      oneWeek.macdValueMonthly(res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchEMA(options) {
  axios
    .request(options)
    .then((res) => {
      console.log(res.data);
      //   testEma(res.data.values);
    })
    .catch(function (error) {
      console.error(error);
    });
}

function searchCryptos(options) {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
