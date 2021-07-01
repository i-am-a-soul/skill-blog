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

## `JZ2` 替换空格

[链接](https://www.nowcoder.com/practice/0e26e5551f2b489b9f58bc83aa4b6c68)

```cpp
class Solution {
public:
    string replaceSpace (string s) {
        string res = "";
        for (int i = 0; i < s.size(); ++ i) {
            if (s[i] == ' ') {
                res += "%20";
            } else {
                res += s[i];
            }
        }
        return res;
    }
};
```

## `JZ3` 从尾到头打印链表

[链接](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035)

```cpp
/**
*  struct ListNode {
*        int val;
*        struct ListNode *next;
*        ListNode(int x) :
*              val(x), next(NULL) {
*        }
*  };
*/
class Solution {
public:
    vector<int> printListFromTailToHead (ListNode* head) {
        vector<int> res;
        ListNode* ptr = head;
        while (ptr != NULL) {
            res.push_back(ptr -> val);
            ptr = ptr -> next;
        }
        reverse(res.begin(), res.end());
        return res;
    }
};
```

