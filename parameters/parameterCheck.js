const GV = require("../data/GlobalVars");

exports.RsiWeekParameterCheck = function parameterCheck() {
  console.log("Parameter Check");
  for (let x = 0; x <= GV.RSIOneWeek.length - 1; x++) {
    let data = GV.RSIOneWeek[x].OneWeekReading;
    let rsi = data["rsi"];
    if (rsi < 30) {
      param_test_dict_result = { paramtest: true };
      GV.RSIOneWeek[x].paramTest = false;
    }
    if (rsi >= 30) {
      param_test_dict_result = { paramtest: false };
      GV.RSIOneWeek[x].paramTest = false;
    }
  }
  //console.log(data);
};

exports.RsiBiweeklyParameterCheck = function RsiBiweeklyCheck() {
  //console.log(GV.RSIBiweekly);
  console.log("param check");
  for (let x = 0; x <= GV.RSIBiweekly.length - 1; x++) {
    let current_week_data = GV.RSIBiweekly[x];
    let current_rsi = GV.RSIBiweekly[x].currentweek["rsi"];
    let previous_rsi = GV.RSIBiweekly[x].previousweek["rsi"];
    if (current_rsi && previous_rsi < 30) {
      console.log("lower than 30");
      GV.RSIBiweekly[x].paramTest = true;
    }
    if (current_rsi && previous_rsi >= 30) {
      console.log("Higher than 30");
      GV.RSIBiweekly[x].paramTest = false;
    }
  }
  //console.log(GV.RSIBiweekly[1].previousweek["rsi"]);
};

exports.RsiMonthParameterCheck = function RsiOneMonthCheck() {
  for (let x = 0; x <= GV.RSIOneMonth.length - 1; x++) {
    let data = GV.RSIOneMonth[x].OneWeekReading;
    let rsi = data["rsi"];
    if (rsi < 30) {
      param_test_dict_result = { paramtest: true };
      GV.RSIOneMonth[x].paramTest = false;
    }
    if (rsi >= 30) {
      param_test_dict_result = { paramtest: false };
      GV.RSIOneMonth[x].paramTest = false;
    }
  }
};

// STOCH
exports.StochWeekParameterCheck = function StochOneWeekCheck() {
  console.log("Parameter check");
  for (let x = 0; x <= GV.StochOneWeek.length - 1; x++) {
    let stoch_data = GV.StochOneWeek[x].OneWeekReading;
    slow_d = stoch_data.slow_d;
    if (slow_d < 20) {
      GV.StochOneWeek[x].paramTest = true;
    }
    if (slow_d >= 20) {
      GV.StochOneWeek[x].paramTest = false;
    }
  }
};

exports.StochBiweeklyParameterCheck = function StochBiweeklyCheck() {
  for (let x = 0; x <= GV.StochBiWeekly.length - 1; x++) {
    let slow_d_current = GV.StochBiWeekly[x].currentweek["slow_d"];
    let slow_d_previous = GV.StochBiWeekly[x].previousweek["slow_d"];

    if (slow_d_current && slow_d_previous < 20) {
      GV.StochBiWeekly[x].paramTest = true;
    }
    if (slow_d_current && slow_d_previous >= 20) {
      GV.StochBiWeekly[x].paramTest = false;
    }
  }
};

exports.StochMonthParameterCheck = function StochOneWeekCheck() {
  console.log("Parameter check");
  for (let x = 0; x <= GV.StochOneMonth.length - 1; x++) {
    let stoch_data = GV.StochOneMonth[x].OneWeekReading;
    slow_d = stoch_data.slow_d;
    if (slow_d < 20) {
      GV.StochOneMonth[x].paramTest = true;
    }
    if (slow_d >= 20) {
      GV.StochOneMonth[x].paramTest = false;
    }
  }
};

// STOCH RSI
exports.StochRsiWeekParameterCheck = function StochRsiWeekCheck() {
  for (let x = 0; x <= GV.StochRsiOneWeek.length - 1; x++) {
    //let stoch_rsi_data = GV.StochOneWeek[x]
  }
};

exports.stochRsiBiweeklyCheck = function StochRsiBiweekly() {
  for (let x = 0; x <= GV.StochRsiBiweekly.length - 1; x++) {
    let current_week_data = GV.StochRsiBiweekly[x].currentweek;
    let current_stochrsi = current_week_data["rsi"];
    let previous_week_data = GV.StochRsiBiweekly[x].previousweek;
    let previous_stochrsi = previous_week_data["rsi"];

    if (current_stochrsi > 20 && previous_stochrsi > 20) {
      GV.StochRsiBiweekly[x].paramTest = false;
    }
    if (current_stochrsi < 20 && previous_stochrsi < 20) {
      GV.StochRsiBiweekly[x].paramTest = true;
    }
  }
};

exports.StochRsiMonthlyParameterCheck = function StochRsiMonthlyValue() {
  for (let x = 0; x <= GV.StochRsiMonthly.length - 1; x++) {
    let current_week_data = GV.StochRsiMonthly[x].OneWeekReading;
    let current_stoch_rsi = current_week_data.fast_d;
    if (current_stoch_rsi <= 20) {
      GV.StochRsiMonthly[x].paramTest = true;
    }
    if (current_stoch_rsi > 20) {
      GV.StochRsiMonthly[x].paramTest = false;
    }
  }
};

exports.MacdWeekParameterCheck = function MacdOneWeekCheck() {
  for (let x = 0; x <= GV.MacdOneWeek.length - 1; x++) {
    let week_one_macd_data = GV.MacdOneWeek[x].weeklymacd;
    let week_two_macd_data = GV.MacdOneWeek[x].previousmacd;

    let week_one_macd = week_one_macd_data.macd;
    let week_one_signal = week_one_macd_data["macd_signal"];
    let week_two_macd = week_two_macd_data.macd;
    let week_two_signal = week_two_macd_data["macd_signal"];
    let w_one_higher;
    let w_two_higher;
    if (week_one_macd > week_one_signal) {
      w_one_higher = ">";
    }
    if (week_one_signal > week_one_macd) {
      w_one_higher = "<";
    }
    if (week_two_macd > week_two_signal) {
      w_two_higher = ">";
    }
    if (week_two_signal > week_two_macd) {
      w_two_higher = "<";
    }
    if (w_one_higher === w_two_higher) {
      GV.MacdOneWeek[x].paramTest = false;
    }
    if (w_one_higher != w_two_higher) {
      GV.MacdOneWeek[x].paramTest = true;
    }
  }
};

exports.MacdMonthlyParameterCheck = function MacdOneMonthCheck() {
  let macd_one_higher;

  let macd_two_higher;
  for (let x = 0; x <= GV.MacdMonthly.length - 1; x++) {
    if (
      GV.MacdMonthly[x].currentmacd["macd"] > GV.MacdMonthly[x].previousmacd
    ) {
      macd_one_higher = ">";
    }
    if (
      GV.MacdMonthly[x].currentmacd["macd"] > GV.MacdMonthly[x].previousmacd
    ) {
      macd_one_higher = "<";
    }
    if (GV.MacdMonthly[x].previousmacd > GV.MacdMonthly[x].previoussignal) {
      macd_two_higher = ">";
    }

    if (GV.MacdMonthly[x].previousmacd < GV.MacdMonthly[x].previoussignal) {
      macd_two_higher = "<";
    }
    if (macd_one_higher === macd_two_higher) {
      GV.MacdMonthly[x].paramTest = false;
    }
    if (macd_one_higher != macd_two_higher) {
      GV.MacdMonthly[x].paramTest = true;
    }
  }
};
