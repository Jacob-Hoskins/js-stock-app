const options = require("../endpointOptions/options");
const GV = require("../data/GlobalVars");

exports.rsiBiweeklyParams = function setParameters(symbol) {
  let new_symbol = (options.oneWeekOptionsRSI.params["symbol"] = symbol);
  return options.oneWeekOptionsRSI;
};

exports.grabRSIValues = function getValues(data) {
  const current_week = data.values[0];
  const previous_week = data.values[1];
  const symbol = data.meta["symbol"];

  const values_dict = {
    symbol: symbol,
    currentweek: current_week,
    previousweek: previous_week,
  };
  GV.RSIBiweekly.push(values_dict);
  return GV.RSIBiweekly;
};

//******STOCH
exports.stochValue = function getValues(data) {
  console.log("STOCH: ", data);
  let current_interval = data.meta.interval;
  let current_symbol = data.meta.symbol;
  let current_week = data.values[0];
  let previous_week = data.values[1];
  const biweekly_dict = {
    currentsymbol: current_symbol,
    currentinterval: current_interval,
    currentweek: current_week,
    previousweek: previous_week,
  };
  return GV.StochBiWeekly.push(biweekly_dict);
};

exports.stochRsiValueBiweekly = function getValuesBiweekly(data) {
  let current_interval = data.meta.interval;
  let current_symbol = data.meta.symbol;
  let current_week = data.values[0];
  let previous_week = data.values[1];
  const biweekly_dict = {
    currentsymbol: current_symbol,
    currentinterval: current_interval,
    currentweek: current_week,
    previousweek: previous_week,
  };
  return GV.StochRsiBiweekly.push(biweekly_dict);
};

/** MACD */
exports.MacdBiweeklyValue = function getValues(data) {
  let current_symbol = data.meta.symbol;
  let current_week = data.values[0];
  let previous_week = data.values[1];
  const biweekly_dict = {
    currentsymbol: current_symbol,
    currentweek: current_week,
    previousweek: previous_week,
  };
  let Biweekly_data = GV.MacdBiWeekly.push(biweekly_dict);
  console.log(GV.MacdBiWeekly);
  return Biweekly_data;
};
