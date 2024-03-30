function topKFrequentElements(nums, k) {
  const countMap = {};
  let bucket = [...new Array(nums.length)].map(() => []);
  let result = [];

  nums.forEach((num) => {
    if (num in countMap) {
      countMap[num] += 1;
    } else {
      countMap[num] = 1;
    }
  });

  for (const num in countMap) {
    const count = countMap[num];
    bucket[count].push(num);
  }

  let kCount = 0;
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (kCount === k) {
      return result;
    }

    if (bucket[i].length > 0) {
      result = [...result, ...bucket[i]];
      kCount += 1;
    }
  }

  return result;
}

const output = topKFrequentElements([1, 1, 1, 2, 2, 3, 3, 3, 3], 2);
console.log(output);
