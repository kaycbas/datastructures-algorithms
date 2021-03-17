a = [('2021-01-01', 100), ('2021-01-02', 101), ('2021-01-04', 102)]
b = [(a, a*10) for a in range(1000)]

// put(key, ts)
// get(key) -> ts
// del(key)
// put('amzn_stock_prices', a)
// ..
// maxSize()
// shrink() -> delete maxSize() entry
// maxValue()

class Cache {
  constructor() {
    const dataStore = {};
    // let maxSize = 0;
  }

  put(key, ts) {
    dataStore[key] = ts;
    // maxSize = Math.max(maxSize, ts.length);
  }

  get(key) {
    return dataStore[key];
  }

  del(key) {
    return delete dataStore[key];
  }

  maxSize() {
    let maxLen = 0;
    for (key in dataStore) {
      maxLen = Math.max(dataStore[key].length, maxLen);
    }
    return maxLen;
  }

  maxValue() {
    let maxVal = -Infinity;
    const timeseries = Object.values(dataStore);
    for (const ts of timeseries) {
      for (const [timestamp, val] of ts) {
        maxVal = Math.max(maxVal, val);
      }
    }
    return maxVal;
  }
}



