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
  console.log(data.values);
  const oneWRSI = data.values[1];
  let rsiListDic = {
    sybmol: symbol,
    OneWeekReading: oneWRSI,
    interval: interval,
  };
  GV.StochOneWeek.push(rsiListDic);
  //console.log(GV.StochOneWeek);
  return GV.StochOneWeek;
};

exports.stochValueMonthly = function monthlyStochValue(data) {
  //onsole.log(data);
  let monthly_value = data.values[0];
  let symbol = data.meta["symbol"];
  let stoch_monthly_dict = {
    symbol: symbol,
    monthlyvalue: monthly_value,
  };
  GV.StochOneMonth.push(stoch_monthly_dict);
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

exports.macdFiveDay = function fiveDayparams(symbol) {
  let param_symbol = (options.oneWeekOptionsMACD.params["symbol"] = symbol);
  let interval = (options.oneWeekOptionsMACD.params["interval"] = "1day");
  let output = (options.oneWeekOptionsMACD.params["outputsize"] = "5");
  return options.oneWeekOptionsMACD;
};

exports.macdValueFiveDay = function fiveDayValue(data) {
  let values = data.values;
  //console.log(data);
  let symbol = data.meta.symbol;
  let day_one = data.values[0];
  let day_one_macd = day_one.macd;
  let day_one_signal = day_one.macd_signal;

  let day_two = data.values[1];
  let day_two_macd = day_two.macd;
  let day_two_signal = day_two.macd_signal;

  let day_three = data.values[2];
  let day_three_macd = day_three.macd;
  let day_three_signal = day_three.macd_signal;

  let day_four = data.values[3];
  let day_four_macd = day_four.macd;
  let day_four_signal = day_four.macd_signal;

  let day_five = data.values[4];
  let day_five_macd = day_five.macd;
  let day_five_signal = day_five.macd_signal;

  let five_day_dict = {
    symbol: symbol,
    dayone: {
      macd: day_one_macd,
      signal: day_one_signal,
    },
    daytwo: {
      macd: day_two_macd,
      signal: day_two_signal,
    },
    daythree: {
      macd: day_three_macd,
      signal: day_three_signal,
    },
    dayfour: {
      macd: day_four_macd,
      signal: day_four_signal,
    },
    dayfive: {
      macd: day_five_macd,
      signal: day_five_signal,
    },
  };
  GV.MacdOneWeek.push(five_day_dict);
};

exports.macdValueBiweekly = function gettingMacdValue(data) {
  let current_symbol = data.meta.symbol;
  let weekly_macd = data.values[0];
  let previous_macd = data.values[1];
  let weekly_macd_dict = {
    currnetsymbol: current_symbol,
    weeklymacd: weekly_macd,
    previousmacd: previous_macd,
  };
  GV.MacdBiWeekly.push(weekly_macd_dict);
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
