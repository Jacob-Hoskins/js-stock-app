exports.oneWeekOptionsRSI = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/rsi",
  params: {
    interval: "1week",
    symbol: "NG",
    format: "json",
    time_period: "15",
    series_type: "close",
    outputsize: "14",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.oneWeekOptionsStoch = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/stoch",
  params: {
    symbol: "AAPL",
    interval: "1week",
    slow_k_period: "1",
    slow_kma_type: "SMA",
    slow_dma_type: "SMA",
    fast_k_period: "14",
    format: "json",
    slow_d_period: "3",
    outputsize: "30",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.oneWeekOptionsStochRSI = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/stochrsi",
  params: {
    symbol: "aacg",
    interval: "1week",
    fast_dma_type: "SMA",
    series_type: "close",
    fast_d_period: "3",
    outputsize: "5",
    fast_k_period: "3",
    format: "json",
    time_period: "14",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.oneWeekOptionsMACD = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/macd",
  params: {
    interval: "1week",
    symbol: "aaciw",
    exchange: "nasdaq",
    signal_period: "9",
    outputsize: "9",
    series_type: "close",
    fast_period: "12",
    slow_period: "26",
    format: "json",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.emaOptions = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/ema",
  params: {
    symbol: "aapl",
    interval: "1week",
    series_type: "close",
    format: "json",
    outputsize: "1",
    time_period: "9",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.maOptions = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/ma",
  params: {
    interval: "1week",
    symbol: "aapl",
    time_period: "12",
    outputsize: "1",
    ma_type: "SMA",
    series_type: "close",
    format: "json",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.allStockOptions = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/stocks",
  params: { exchange: "nasdaq", format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.allCryptos = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/cryptocurrencies/",
  params: { currency_base: "BTC", format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.cryptoExchanges = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/cryptocurrency_exchanges",
  params: { format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.searchCryptoSymbol = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/quote",
  params: { symbol: "AAX", interval: "1day", outputsize: "30", format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.cryptoRSI = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/rsi",
  params: {
    interval: "1week",
    symbol: "BTC",
    format: "json",
    time_period: "14",
    series_type: "close",
    outputsize: "30",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.eftList = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/etf",
  params: { exchange: "Euronext", format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.EtfMarketMovers = {
  method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/market_movers/etf",
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};
