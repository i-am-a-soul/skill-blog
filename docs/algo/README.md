# 剑指`Offer`

## `JZ1` 二维数组中的查找

[链接](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e)

```cpp
// 时间复杂度：O(nlogn)
class Solution {
public:
    bool Find (int target, vector<vector<int> > array) {
        for (int i = 0; i < array.size(); ++ i) {
            int cnt = upper_bound(array[i].begin(), array[i].end(), target)
                - lower_bound(array[i].begin(), array[i].end(), target);
            if (cnt >= 1) return true;
        }
        return false;
    }
};
```

