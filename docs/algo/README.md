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

## `JZ4` 重建二叉树

[链接](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6)

```cpp
/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* reConstructBinaryTree (vector<int> pre, vector<int> vin) {
        if (pre.size() == 0) return NULL;

        TreeNode* cur = NULL;
        for (int i = 0; i < vin.size(); ++ i) {
            if (vin[i] == pre[0]) {
                cur = new TreeNode(pre[0]);
                cur -> left = reConstructBinaryTree(
                    vector<int>(pre.begin() + 1, pre.begin() + i + 1),
                    vector<int>(vin.begin(), vin.begin() + i)
                );
                cur -> right = reConstructBinaryTree(
                    vector<int>(pre.begin() + i + 1, pre.end()),
                    vector<int>(vin.begin() + i + 1, vin.end())
                );
                break;
            }
        }
        return cur;
    }
};
```

## `JZ5` 用两个栈实现队列

[链接](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6)

![](/skill-blog/img/0005.bmp)

```cpp
class Solution {
private:
    stack<int> stack1, stack2;
public:
    void push (int node) {
        stack2.push(node);
    }
    int pop () {
        if (stack1.empty()) {
            while (!stack2.empty()) {
                stack1.push(stack2.top());
                stack2.pop();
            }
        }
        int res = stack1.top();
        stack1.pop();
        return res;
    }
};
```

