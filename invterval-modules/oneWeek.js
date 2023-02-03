const options = require("../endpointOptions/options");
const GV = require("../data/GlobalVars");

//RSI
exports.rsiOneW = function oneWeekRSISearch(testList, interval) {
  console.log("In one Week RSI setting options params");
  let new_params = (options.oneWeekOptionsRSI.params["symbol"] = testList);

  //TODO: there will be a future issue with updated exchange, need to make dynamic
  //sets exchange to current one for RSI search
  let current_exchange = options.allStockOptions["params"].exchange;
  let update_exchange = (options.oneWeekOptionsRSI.params["exchange"] =
    current_exchange);
  let updated_interval = (options.oneWeekOptionsRSI.params["interval"] =
    interval);

  let updated_options_info = options.oneWeekOptionsRSI;
  return options.oneWeekOptionsRSI;
};

exports.rsiValue = function gettingRSIValues(data) {
  const interval = data.meta["interval"];
  console.log(data);

  if (interval === "1week") {
    const symbol = data.meta["symbol"];
    const oneWRSI = data.values[0];
    let rsiListDic = {
      symbol: symbol,
      OneWeekReading: oneWRSI,
      interval: interval,
    };
    GV.RSIOneWeek.push(rsiListDic);
    return GV.RSIOneWeek;
  }
  if (interval === "1month") {
    const symbol = data.meta["symbol"];
    const oneWRSI = data.values[1];
    let rsiListDic = {
      symbol: symbol,
      OneWeekReading: oneWRSI,
      interval: interval,
    };
    GV.RSIOneMonth.push(rsiListDic);
    return GV.RSIOneMonth;
  }
  return GV.RSIOneMonth;
};

exports.rsiBW = function (test_list, interval) {
  console.log((options.oneWeekOptionsRSI.params["symbol"] = test_list));
  console.log(options.oneWeekOptionsRSI);
};

//STOCH
exports.stochOneWmParams = function oneWeekStochSearch(symbol, interval) {
  if (interval === "1month") {
    let new_interval = (options.oneWeekOptionsStoch.params["interval"] =
      interval);
    let new_symbol = (options.oneWeekOptionsStoch.params["symbol"] = symbol);
    let new_params = options.oneWeekOptionsStoch;

    return new_params;
  }
  if (interval === "1week") {
    let new_interval = (options.oneWeekOptionsStoch.params["interval"] =
      interval);
    let new_symbol = (options.oneWeekOptionsStoch.params["symbol"] = symbol);
    let new_params = options.oneWeekOptionsStoch;

    return new_params;
  }
};

exports.stochValue = function gettingStochValues(data) {
  const interval = data.meta["interval"];
  const symbol = data.meta["symbol"];
  const oneWRSI = data.values[0];
  let rsiListDic = {
    sybmol: symbol,
    OneWeekReading: oneWRSI,
    interval: interval,
  };
  GV.StochOneWeek.push(rsiListDic);
  //console.log(GV.StochOneWeek);
  return GV.StochOneWeek;
};

//STOCH RSI
exports.stochRsiWmParams = function stochRsiSearch(symbol, interval) {
  if (interval === "1month") {
    options.oneWeekOptionsStochRSI.params["interval"] = interval;
    options.oneWeekOptionsStochRSI.params["symbol"] = symbol;
    let new_params = options.oneWeekOptionsStochRSI;

    return new_params;
  }
  if (interval === "1week") {
    options.oneWeekOptionsStochRSI.params["interval"] = interval;
    options.oneWeekOptionsStochRSI.params["symbol"] = symbol;
    let new_params = options.oneWeekOptionsStochRSI;
    return new_params;
  }
};

exports.stochRsiValue = function gettingStochRsiValue(data) {
  const interval = data.meta["interval"];
  const symbol = data.meta["symbol"];
  const stoch_rsi = data.values[0];
  let stochrsi_list_dict = {
    symbol: symbol,
    OneWeekReading: stoch_rsi,
    interval: interval,
  };
  GV.StochRsiOneWeek.push(stochrsi_list_dict);
};

exports.stochRsiMonthValue = function gettingStochRsiMonth(data) {
  const interval = data.meta["interval"];
  const symbol = data.meta["symbol"];
  const stoch_rsi = data.values[0];
  let stochrsi_list_dict = {
    symbol: symbol,
    OneWeekReading: stoch_rsi,
    interval: interval,
  };
  GV.StochRsiMonthly.push(stochrsi_list_dict);
};

//MACD
exports.macdOneW = function oneWeekMacdSearch(testList) {
  console.log("In MACD func");
  let params = (options.oneWeekOptionsMACD.params["symbol"] = testList);

  return options.oneWeekOptionsMACD;
};

exports.macdValue = function gettingMacdValue(data) {
  let current_symbol = data.meta.symbol;
  let weekly_macd = data.values[0];
  let previous_macd = data.values[1];
  let weekly_macd_dict = {
    currnetsymbol: current_symbol,
    weeklymacd: weekly_macd,
    previousmacd: previous_macd,
  };
  GV.MacdOneWeek.push(weekly_macd_dict);
};

exports.macdMonthParams = function setParams(data) {
  let updated_symbol = (options.oneWeekOptionsMACD.params["symbol"] = data);
  let updated_interval = (options.oneWeekOptionsMACD.params["interval"] =
    "1month");
  let updated_params = options.oneWeekOptionsMACD;
  return updated_params;
};

exports.macdValueMonthly = function getMacdValue(data) {
  //console.log(data.values);
  let symbol = data.meta.symbol;
  console.log(data);
  let data_macd = data.values;
  let monthly_macd_data = data_macd[0];
  let previous_month_macd_data = data_macd[1];
  //console.log(monthly_macd_data, previous_month_macd_data);
  let monthly_macd = monthly_macd_data["macd"];
  let monthly_signal = monthly_macd_data["macd_signal"];
  let previous_month_macd = previous_month_macd_data["macd"];
  let previous_month_signal = previous_month_macd_data["macd_signal"];
  let monthly_macd_dict = {
    symbol: symbol,
    currentmacd: monthly_macd,
    currentsignal: monthly_signal,
    prviousmacd: previous_month_macd,
    previoussignal: previous_month_signal,
  };
  return GV.MacdMonthly.push(monthly_macd_dict);
};
