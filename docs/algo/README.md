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

## `JZ7` 斐波那契数列

[链接](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3)

```cpp
class Solution {
public:
    int Fibonacci (int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        int res, a = 0, b = 1;
        for (int i = 2; i <= n; ++ i) {
            res = a + b;
            a = b;
            b = res;
        }
        return res;
    }
};
```

## `JZ8` 跳台阶

[链接](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4)

```cpp
class Solution {
public:
    int jumpFloor (int number) {
        if (number == 0 || number == 1) return 1;

        return jumpFloor(number - 1) + jumpFloor(number - 2);
    }
};
```

## `JZ9` 跳台阶扩展问题

[链接](https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387)

```cpp
class Solution {
public:
    int jumpFloorII (int number) {
        return 1 << (number - 1);
    }
};
```

## `JZ10` 矩形覆盖

[链接](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6)

```cpp
class Solution {
public:
    int rectCover (int number) {
        if (number == 0) return 0;
        if (number == 1) return 1;

        int res, a = 1, b = 1;
        for (int i = 2; i <= number; ++ i) {
            res = a + b;
            a = b;
            b = res;
        }
        return res;
    }
};
```

## `JZ11` 二进制中`1`的个数

[链接](https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8)

```cpp
class Solution {
    int lowbit (int x) {
        return x & -x;
    }
public:
    int NumberOf1 (int n) {
        int res = 0;
        while (n != 0) {
            ++ res;
            n -= lowbit(n);
        }
        return res;
    }
};
```

## `JZ12` 数值的整数次方

[链接](https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00)

```cpp
class Solution {
public:
    double Power(double base, int exponent) {
        bool flag = (exponent < 0);
        exponent = abs(exponent);
        double res = 1;
        while (exponent > 0) {
            if (exponent & 1) res = res * base;
            base = base * base;
            exponent /= 2;
        }
        return flag ? (1 / res) : res;
    }
};
```

## `JZ14` 链表中倒数最后`k`个结点

[链接](https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9)

```cpp
/**
 * struct ListNode {
 *	int val;
 *	struct ListNode *next;
 *	ListNode(int x) : val(x), next(nullptr) {}
 * };
 */
class Solution {
public:
    ListNode* FindKthToTail (ListNode* pHead, int k) {
        ListNode *p1 = pHead, *p2 = pHead;

        while (k --) {
            if (p1 == NULL) return NULL;
            p1 = p1 -> next;
        }
        
        while (p1 != NULL) {
            p1 = p1 -> next;
            p2 = p2 -> next;
        }
        return p2;
    }
};
```

## `JZ15` 反转链表

[链接](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca)

```cpp
/*
struct ListNode {
	int val;
	struct ListNode *next;
	ListNode(int x) :
			val(x), next(NULL) {
	}
};*/
class Solution {
public:
    ListNode* ReverseList (ListNode* pHead) {
        ListNode *prev = NULL, *cur = pHead, *temp;
        while (cur != NULL) {
            temp = cur -> next;
            cur -> next = prev;
            prev = cur;
            cur = temp;
        }
        return prev;
    }
};
```

## `JZ16` 合并两个排序的链表

[链接](https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337)

```cpp
/*
struct ListNode {
	int val;
	struct ListNode *next;
	ListNode(int x) :
        val(x), next(NULL) {
	}
};*/
class Solution {
    ListNode *pHead = NULL, *temp;
    void insert (ListNode* &ptr) {
        temp = ptr -> next;
        ptr -> next = pHead;
        pHead = ptr;
        ptr = temp;
    }
    ListNode* ReverseList (ListNode* pHead) {
        ListNode *prev = NULL, *cur = pHead, *temp;
        while (cur != NULL) {
            temp = cur -> next;
            cur -> next = prev;
            prev = cur;
            cur = temp;
        }
        return prev;
    }
public:
    ListNode* Merge (ListNode* pHead1, ListNode* pHead2) {
        while (pHead1 != NULL && pHead2 != NULL) {
            if (pHead1 -> val < pHead2 -> val) {
                insert(pHead1);
            } else {
                insert(pHead2);
            }
        }
        while (pHead1 != NULL) insert(pHead1);
        while (pHead2 != NULL) insert(pHead2);
        return ReverseList(pHead);
    }
};
```

## `JZ18` 二叉树的镜像

[链接](https://www.nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7)

```cpp
/**
 * struct TreeNode {
 *	int val;
 *	struct TreeNode *left;
 *	struct TreeNode *right;
 *	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 * };
 */
class Solution {
public:
    TreeNode* Mirror (TreeNode* pRoot) {
        if (pRoot == NULL) return NULL;

        Mirror(pRoot -> left);
        Mirror(pRoot -> right);
        swap(pRoot -> left, pRoot -> right);
        return pRoot;
    }
};
```

## `JZ19` 顺时针打印矩阵

[链接](https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a)

```cpp
class Solution {
public:
    vector<int> printMatrix (vector<vector<int> > matrix) {
        int n = matrix.size();
        if (n == 0) return {};
        int m = matrix[0].size();

        int a = 0, b = n - 1, x = 0, y = m - 1;
        vector<int> res;
        while (true) {
            for (int j = x; j <= y; ++ j)
                res.push_back(matrix[a][j]);
            for (int i = a + 1; i <= b - 1; ++ i)
                res.push_back(matrix[i][y]);
            if (a < b) {
                for (int j = y; j >= x; -- j)
                    res.push_back(matrix[b][j]);
            }
            if (x < y) {
                for (int i = b - 1; i >= a + 1; -- i)
                    res.push_back(matrix[i][x]);
            }
            if (++ a > -- b || ++ x > -- y) break;
        }
        return res;
    }
};
```

## `JZ20` 包含`min`函数的栈

[链接](https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49)

```cpp
class Solution {
    struct node {
        int val, history_min_val;
    };
    stack<node> s;
public:
    void push (int value) {
        s.push({
            value,
            s.empty() ? value : std::min(min(), value)
        });
    }
    void pop () {
        s.pop();
    }
    int top () {
        return s.top().val;
    }
    int min () {
        return s.top().history_min_val;
    }
};
```

## `JZ22` 从上往下打印二叉树

[链接](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701)

```cpp
/*
struct TreeNode {
	int val;
	struct TreeNode *left;
	struct TreeNode *right;
	TreeNode(int x) :
        val(x), left(NULL), right(NULL) {
	}
};*/
class Solution {
public:
    vector<int> PrintFromTopToBottom (TreeNode* root) {
        vector<int> res;
        queue<TreeNode*> q;
        if (root != NULL) q.push(root);
        while (!q.empty()) {
            TreeNode* cur = q.front();
            q.pop();
            res.push_back(cur -> val);

            if (cur -> left != NULL) q.push(cur -> left);
            if (cur -> right != NULL) q.push(cur -> right);
        }
        return res;
    }
};
```

## `JZ23` 二叉搜索树的后序遍历序列

[链接](https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd)

```cpp
class Solution {
public:
    bool VerifySquenceOfBST (vector<int> a) {
        if (a.size() == 0) return false;

        int val = a.back();
        a.pop_back();
        bool flag = false;
        for (int i = 0; i < a.size(); ++ i) {
            if (a[i] > val) flag = true;
            if (flag == true && a[i] < val) return false;
        }

        vector<int> x(
            a.begin(),
            upper_bound(a.begin(), a.end(), val)
        ), y(
            upper_bound(a.begin(), a.end(), val),
            a.end()
        );
        bool res = true;
        if (x.size() != 0) res = res && VerifySquenceOfBST(x);
        if (y.size() != 0) res = res && VerifySquenceOfBST(y);
        return res;
    }
};
```

## `JZ29` 最小的`K`个数

[链接](https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf)

```cpp
class Solution {
public:
    vector<int> GetLeastNumbers_Solution (vector<int> input, int k) {
        if (input.size() < k || k == 0) return {};

        priority_queue<int> pq;
        for (int i = 0; i < k; ++ i) pq.push(input[i]);
        for (int i = k; i < input.size(); ++ i) {
            if (input[i] < pq.top()) {
                pq.pop();
                pq.push(input[i]);
            }
        }

        vector<int> res;
        while (!pq.empty()) {
            res.push_back(pq.top());
            pq.pop();
        }
        return res;
    }
};
```

## `JZ30` 连续子数组的最大和

[链接](https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484)

```cpp
class Solution {
    #define inf 0x3f3f3f3f
public:
    int FindGreatestSumOfSubArray (vector<int> array) {
        int res = -inf, sum = 0;
        for (int i = 0; i < array.size(); ++ i) {
            sum += array[i];
            res = max(res, sum);
            if (sum < 0) sum = 0;
        }
        return res;
    }
};
```

## `JZ33` 丑数

[链接](https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b)

```cpp
class Solution {
public:
    int GetUglyNumber_Solution (int index) {
        vector<int> res = { 0, 1 };
        int a = 1, b = 1, c = 1;
        for (int i = 2; i <= index; ++ i) {
            res.push_back(min(res[a] * 2, min(res[b] * 3, res[c] * 5)));
            if (res.back() == res[a] * 2) ++ a;
            if (res.back() == res[b] * 3) ++ b;
            if (res.back() == res[c] * 5) ++ c;
        }
        return res[index];
    }
};
```

## `JZ35` 数组中的逆序对

[链接](https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5)

```cpp
class Solution {
    const int M = 1000000007;
    int merge_sort (int l, int r, vector<int> &a) {
        if (l >= r) return 0;

        int res = 0, mid = l + r >> 1;
        res = (res + merge_sort(l, mid, a)) % M;
        res = (res + merge_sort(mid + 1, r, a)) % M;

        vector<int> temp;
        int idl = l, idr = mid + 1;
        while (idl <= mid && idr <= r) {
            if (a[idl] < a[idr]) {
                temp.push_back(a[idl ++]);
            } else {
                res = (res + mid - idl + 1) % M;
                temp.push_back(a[idr ++]);
            }
        }
        while (idl <= mid) temp.push_back(a[idl ++]);
        while (idr <= r) temp.push_back(a[idr ++]);
        for (int i = 0; i < temp.size(); ++ i) a[l + i] = temp[i];
        return res;
    }
public:
    int InversePairs (vector<int> data) {
        return merge_sort(0, (int)data.size() - 1, data);
    }
};
```

## `JZ37` 数字在升序数组中出现的次数

[链接](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2)

```cpp
class Solution {
public:
    int GetNumberOfK (vector<int> data, int k) {
        return upper_bound(data.begin(), data.end(), k)
            - lower_bound(data.begin(), data.end(), k);
    }
};
```

## `JZ38` 二叉树的深度

[链接](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b)

```cpp
/*
struct TreeNode {
	int val;
	struct TreeNode *left;
	struct TreeNode *right;
	TreeNode(int x) :
        val(x), left(NULL), right(NULL) {
	}
};*/
class Solution {
public:
    int TreeDepth (TreeNode* pRoot) {
        if (pRoot == NULL) return 0;

        return max(
            TreeDepth(pRoot -> left),
            TreeDepth(pRoot -> right)
        ) + 1;
    }
};
```

## `JZ39` 平衡二叉树

[链接](https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222)

```cpp
class Solution {
    bool check (TreeNode* pRoot, int& h) {
        if (pRoot == NULL) {
            h = 0;
            return true;
        }

        int hl, hr;
        bool a = check(pRoot -> left, hl);
        bool b = check(pRoot -> right, hr);
        h = max(hl, hr) + 1;
        return a && b && abs(hl - hr) <= 1;
    }
public:
    bool IsBalanced_Solution (TreeNode* pRoot) {
        int h;
        return check(pRoot, h);
    }
};
```

## `JZ64` 滑动窗口的最大值

[链接](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788)

```cpp
class Solution {
public:
    vector<int> maxInWindows (const vector<int>& num, unsigned int k) {
        if (k > num.size()) return {};
        
        deque<int> dq;
        vector<int> res;
        for (int i = 0; i < num.size(); ++ i) {
            if (!dq.empty() && i - dq.front() + 1 > k) dq.pop_front();
            while (!dq.empty() && num[dq.back()] <= num[i]) dq.pop_back();
            dq.push_back(i);
            if (i >= k - 1) res.push_back(num[dq.front()]);
        }
        return res;
    }
};
```

