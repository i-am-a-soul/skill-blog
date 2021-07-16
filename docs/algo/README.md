# 剑指`Offer`

## 数据结构

```cpp
struct ListNode {
    int val;
    ListNode* next;
    ListNode (int x) : val(x), next(NULL) {}
};

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode (int x) : val(x), left(NULL), right(NULL) {}
};

struct RandomListNode {
    int label;
    RandomListNode *next, *random;
    RandomListNode (int x) : label(x), next(NULL), random(NULL) {}
};

function TreeNode (val) {
    this.val = val
    this.left = null
    this.right = null
}
```

## `JZ1` 二维数组中的查找

[链接](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e)

```cpp
// 时间复杂度：O(nlogm)
class Solution {
public:
    bool Find (int target, vector<vector<int> > a) {
        for (int i = 0; i < a.size(); ++ i) {
            int cnt = upper_bound(a[i].begin(), a[i].end(), target)
                - lower_bound(a[i].begin(), a[i].end(), target);
            if (cnt >= 1) return true;
        }
        return false;
    }
};

// 时间复杂度：O(n + m)
class Solution {
public:
    bool Find (int target, vector<vector<int> > a) {
        int n = a.size();
        if (n == 0) return false;
        int m = a[0].size();

        int r = 0, c = m - 1; // 右上角
        while (r < n && c >= 0) {
            if (a[r][c] == target) {
                return true;
            } else if (a[r][c] < target) {
                ++ r;
            } else {
                -- c;
            }
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
    string replaceSpace (string str) {
        string res = "";
        for (int i = 0; i < str.size(); ++ i) {
            if (str[i] == ' ') {
                res += "%20";
            } else {
                res += str[i];
            }
        }
        return res;
    }
};
```

## `JZ3` 从尾到头打印链表

[链接](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035)

```cpp
class Solution {
public:
    vector<int> printListFromTailToHead (ListNode* pHead) {
        vector<int> res;
        ListNode* ptr = pHead;
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
class Solution {
public:
    TreeNode* reConstructBinaryTree (vector<int> pre, vector<int> vin) {
        if (pre.size() == 0) return NULL;

        TreeNode* pRoot = NULL;
        for (int i = 0; i < vin.size(); ++ i) {
            if (vin[i] == pre[0]) {
                pRoot = new TreeNode(pre[0]);
                pRoot -> left = reConstructBinaryTree(
                    vector<int>(pre.begin() + 1, pre.begin() + i + 1),
                    vector<int>(vin.begin(), vin.begin() + i)
                );
                pRoot -> right = reConstructBinaryTree(
                    vector<int>(pre.begin() + i + 1, pre.end()),
                    vector<int>(vin.begin() + i + 1, vin.end())
                );
                break;
            }
        }
        return pRoot;
    }
};
```

## `JZ5` 用两个栈实现队列

[链接](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6)

![](/skill-blog/img/0005.bmp)

```cpp
class Solution {
    stack<int> stack1, stack2;
public:
    void push (int val) {
        stack2.push(val);
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

## `JZ6` 旋转数组的最小数字

[链接](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba)

![](/skill-blog/img/0006.bmp)

```cpp
class Solution {
public:
    int minNumberInRotateArray (vector<int> a) {
        int l = 0, r = (int)a.size() - 1;
        while (l < r) {
            int mid = l + r >> 1; // mid 取不到 r
            if (a[mid] > a[r]) {
                l = mid + 1;
            } else if (a[mid] < a[r]) {
                r = mid;
            } else {
                r = r - 1;
            }
        }
        return a[l];
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
    int jumpFloor (int n) {
        if (n == 0 || n == 1) return 1;

        return jumpFloor(n - 1) + jumpFloor(n - 2);
    }
};
```

## `JZ9` 跳台阶扩展问题

[链接](https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387)

```cpp
class Solution {
public:
    int jumpFloorII (int n) {
        return 1 << (n - 1);
    }
};
```

## `JZ10` 矩形覆盖

[链接](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6)

```cpp
class Solution {
public:
    int rectCover (int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        int res, a = 1, b = 1;
        for (int i = 2; i <= n; ++ i) {
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
    int NumberOf1 (int x) {
        int res = 0;
        while (x != 0) {
            ++ res;
            x -= lowbit(x);
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
    double Power (double base, int exponent) {
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

## `JZ13` 调整数组顺序使奇数位于偶数前面

[链接](https://www.nowcoder.com/practice/ef1f53ef31ca408cada5093c8780f44b)

```cpp
class Solution {
public:
    vector<int> reOrderArray (vector<int>& a) {
        vector<int> res;
        for (int i = 0; i < a.size(); ++ i)
            if (a[i] & 1)
                res.push_back(a[i]);
        for (int i = 0; i < a.size(); ++ i)
            if (a[i] % 2 == 0)
                res.push_back(a[i]);
        return res;
    }
};
```

## `JZ14` 链表中倒数最后`k`个结点

[链接](https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9)

```cpp
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

## `JZ17` 树的子结构

[链接](https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88)

```cpp
class Solution {
    bool check (TreeNode* pRoot1, TreeNode* pRoot2) {
        if (pRoot2 == NULL) return true;
        if (pRoot1 == NULL) return false;

        if (pRoot1 -> val == pRoot2 -> val) {
            return check(pRoot1 -> left, pRoot2 -> left)
                && check(pRoot1 -> right, pRoot2 -> right);
        }
        return false;
    }
public:
    bool HasSubtree (TreeNode* pRoot1, TreeNode* pRoot2) {
        if (pRoot1 == NULL || pRoot2 == NULL) return false;

        if (check(pRoot1, pRoot2) == true) {
            return true;
        } else {
            return HasSubtree(pRoot1 -> left, pRoot2)
                || HasSubtree(pRoot1 -> right, pRoot2);
        }
    }
};
```

## `JZ18` 二叉树的镜像

[链接](https://www.nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7)

```cpp
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

        vector<int> res;
        int a = 0, b = n - 1, x = 0, y = m - 1;
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
    void push (int val) {
        s.push({
            val,
            s.empty() ? val : std::min(this -> min(), val)
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

## `JZ21` 栈的压入、弹出序列

[链接](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106)

```cpp
class Solution {
public:
    bool IsPopOrder (vector<int> pushV, vector<int> popV) {
        queue<int> q;
        for (int i = 0; i < pushV.size(); ++ i) q.push(pushV[i]);

        stack<int> s;
        for (int i = 0; i < popV.size(); ++ i) {
            if (!s.empty() && s.top() == popV[i]) {
                s.pop();
            } else {
                while (true) {
                    if (q.empty()) return false;
                    int cur = q.front();
                    q.pop();
                    s.push(cur);
                    if (cur == popV[i]) break;
                }
                s.pop();
            }
        }
        return true;
    }
};
```

## `JZ22` 从上往下打印二叉树

[链接](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701)

```cpp
class Solution {
public:
    vector<int> PrintFromTopToBottom (TreeNode* pRoot) {
        vector<int> res;
        queue<TreeNode*> q;
        if (pRoot != NULL) q.push(pRoot);
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

## `JZ24` 二叉树中和为某一值的路径

[链接](https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca)

```cpp
class Solution {
    int target;
    vector<vector<int> > res;
    vector<int> cur_path;
    
    bool dfs1 (TreeNode* pRoot, int sum) {
        if (pRoot == NULL) return sum == target;

        cur_path.push_back(pRoot -> val);
        bool b1 = dfs1(pRoot -> left, sum + pRoot -> val);
        bool b2 = dfs1(pRoot -> right, sum + pRoot -> val);
        if (b1 && b2) res.push_back(cur_path);
        cur_path.pop_back();
        return false;
    }
    void dfs2 (TreeNode* pRoot) {
        if (pRoot == NULL) return;

        dfs1(pRoot, 0);
        dfs2(pRoot -> left);
        dfs2(pRoot -> right);
    }
public:
    vector<vector<int> > FindPath (TreeNode* pRoot, int target) {
        this -> target = target;
        dfs2(pRoot);
        sort(res.begin(), res.end());
        return res;
    }
};
```

## `JZ25` 复杂链表的复制

[链接](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba)

```cpp
class Solution {
public:
    RandomListNode* Clone (RandomListNode* pHead) {
        unordered_map<RandomListNode*, RandomListNode*> h; // 旧 -> 新

        RandomListNode* ptr = pHead;
        while (ptr != NULL) {
            h[ptr] = new RandomListNode(ptr -> label);
            ptr = ptr -> next;
        }
        h[NULL] = NULL;

        ptr = pHead;
        while (ptr != NULL) {
            h[ptr] -> next = h[ptr -> next];
            h[ptr] -> random = h[ptr -> random];
            ptr = ptr -> next;
        }
        return h[pHead];
    }
};
```

## `JZ26` 二叉搜索树与双向链表

[链接](https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5)

```cpp
class Solution {
    void dfs (TreeNode* pRoot, TreeNode* &pHead, TreeNode* &pTail) {
        if (pRoot -> left == NULL && pRoot -> right == NULL) {
            pHead = pTail = pRoot;
            return;
        }

        TreeNode *ph1, *pt1, *ph2, *pt2;
        if (pRoot -> left != NULL) {
            dfs(pRoot -> left, ph1, pt1);
            pRoot -> left = pt1;
            pt1 -> right = pRoot;
            pHead = ph1;
        } else {
            pHead = pRoot;
        }

        if (pRoot -> right != NULL) {
            dfs(pRoot -> right, ph2, pt2);
            pRoot -> right = ph2;
            ph2 -> left = pRoot;
            pTail = pt2;
        } else {
            pTail = pRoot;
        }
    }
public:
    TreeNode* Convert (TreeNode* pRoot) {
        if (pRoot == NULL) return NULL;

        TreeNode *ph, *pt;
        dfs(pRoot, ph, pt);
        return ph;
    }
};
```

## `JZ27` 字符串的排列

[链接](https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7)

```cpp
class Solution {
    vector<string> res;
    bool mark[12];
    string s;
    
    void dfs (int len, const string& str) {
        if (len == str.size()) {
            res.push_back(s);
            return;
        }

        char prev = '#';
        for (int i = 0; i < str.size(); ++ i) {
            if (mark[i] == false && str[i] != prev) {
                mark[i] = true;
                s += str[i];
                dfs(len + 1, str);
                s.pop_back();
                mark[i] = false;
                prev = str[i];
            }
        }
    }
public:
    vector<string> Permutation (string str) {
        sort(str.begin(), str.end());
        dfs(0, str);
        return res;
    }
};
```

## `JZ28` 数组中出现次数超过一半的数字

[链接](https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163)

摩尔投票法。

```cpp
class Solution {
public:
    int MoreThanHalfNum_Solution (vector<int> a) {
        int res = 0, cnt = 0;
        for (int i = 0; i < a.size(); ++ i) {
            if (cnt == 0) res = a[i];

            if (a[i] == res) {
                ++ cnt;
            } else {
                -- cnt;
            }
        }
        return res;
    }
};
```

## `JZ29` 最小的`K`个数

[链接](https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf)

```cpp
class Solution {
public:
    vector<int> GetLeastNumbers_Solution (vector<int> a, int k) {
        if (a.size() < k || k == 0) return {};

        priority_queue<int> pq;
        for (int i = 0; i < k; ++ i) pq.push(a[i]);
        for (int i = k; i < a.size(); ++ i) {
            if (a[i] < pq.top()) {
                pq.pop();
                pq.push(a[i]);
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
    int FindGreatestSumOfSubArray (vector<int> a) {
        int res = -inf, sum = 0;
        for (int i = 0; i < a.size(); ++ i) {
            sum += a[i];
            res = max(res, sum);
            if (sum < 0) sum = 0;
        }
        return res;
    }
};
```

## `JZ32` 把数组排成最小的数

[链接](https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993)

```cpp
class Solution {
    static bool cmp (const string& a, const string& b) {
        return a + b < b + a;
    }
public:
    string PrintMinNumber (vector<int> nums) {
        vector<string> a;
        for (int i = 0; i < nums.size(); ++ i)
            a.push_back(to_string(nums[i]));
        
        sort(a.begin(), a.end(), cmp);
        string res = "";
        for (int i = 0; i < a.size(); ++ i)
            res += a[i];
        return res;
    }
};
```

## `JZ33` 丑数

[链接](https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b)

```cpp
class Solution {
public:
    int GetUglyNumber_Solution (int n) {
        vector<int> res = { 0, 1 };
        int a = 1, b = 1, c = 1;
        for (int i = 2; i <= n; ++ i) {
            res.push_back(min(res[a] * 2, min(res[b] * 3, res[c] * 5)));
            if (res.back() == res[a] * 2) ++ a;
            if (res.back() == res[b] * 3) ++ b;
            if (res.back() == res[c] * 5) ++ c;
        }
        return res[n];
    }
};
```

## `JZ34` 第一个只出现一次的字符

[链接](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c)

```cpp
class Solution {
    int cnt[53];
    
    int ch2i (char ch) {
        if ('A' <= ch && ch <= 'Z')
            return ch - 'A' + 1;
        return ch - 'a' + 1 + 26;
    }
public:
    int FirstNotRepeatingChar (string str) {
        for (int i = 0; i < str.size(); ++ i)
            ++ cnt[ch2i(str[i])];

        for (int i = 0; i < str.size(); ++ i)
            if (cnt[ch2i(str[i])] == 1)
                return i;
        return -1;
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
    int InversePairs (vector<int> a) {
        return merge_sort(0, (int)a.size() - 1, a);
    }
};
```

## `JZ36` 两个链表的第一个公共结点

[链接](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46)

```cpp
class Solution {
public:
    ListNode* FindFirstCommonNode (ListNode* pHead1, ListNode* pHead2) {
        if (pHead1 == NULL || pHead2 == NULL) return NULL;

        ListNode *p1 = pHead1, *p2 = pHead2;
        int cnt = 0;
        while (p1 != p2) {
            p1 = p1 -> next;
            if (p1 == NULL) {
                p1 = pHead2;
                if (++ cnt >= 2) return NULL;
            }
            p2 = p2 -> next;
            if (p2 == NULL) p2 = pHead1;
        }
        return p1;
    }
};
```

## `JZ37` 数字在升序数组中出现的次数

[链接](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2)

```cpp
class Solution {
public:
    int GetNumberOfK (vector<int> a, int k) {
        return upper_bound(a.begin(), a.end(), k)
            - lower_bound(a.begin(), a.end(), k);
    }
};
```

## `JZ38` 二叉树的深度

[链接](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b)

```cpp
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

## `JZ40` 数组中只出现一次的两个数字

[链接](https://www.nowcoder.com/practice/389fc1c3d3be4479a154f63f495abff8)

```cpp
class Solution {
public:
    vector<int> FindNumsAppearOnce (vector<int>& a) {
        unordered_set<int> us;
        int x = 0;
        for (int i = 0; i < a.size(); ++ i) {
            us.insert(a[i]);
            x = x ^ a[i];
        }

        for (int i = 0; i < a.size(); ++ i) {
            if (us.find(a[i]) != us.end()
                && us.find(x ^ a[i]) != us.end()
            ) {
                return { a[i], x ^ a[i] };
            }
        }
        return {};
    }
};
```

## `JZ41` 和为`S`的连续正数序列

[链接](https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe)

```cpp
class Solution {
public:
    vector<vector<int> > FindContinuousSequence (int target) {
        vector<vector<int> > res;
        int sum = 0;
        for (int i = 1, j = 1; j < target; ++ j) { // [i, j]
            sum += j;
            while (i < j && sum > target) {
                sum -= i;
                ++ i;
            }

            if (i != j && sum == target) {
                vector<int> temp;
                for (int k = i; k <= j; ++ k)
                    temp.push_back(k);
                res.push_back(temp);
            }
        }
        return res;
    }
};
```

## `JZ42` 和为`S`的两个数字

[链接](https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b)

```cpp
class Solution {
public:
    vector<int> FindNumbersWithSum (vector<int> a, int sum) {
        vector<int> res;
        int n = a.size();
        for (int i = 0, j = n - 1; i < n; ++ i) {
            while (j > i && a[i] + a[j] > sum) -- j;

            if (i != j && a[i] + a[j] == sum) {
                if (res.size() == 0
                    || a[i] * a[j] < res[0] * res[1]
                ) {
                    res = { a[i], a[j] };
                }
            }
        }
        return res;
    }
};
```

## `JZ43` 左旋转字符串

[链接](https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec)

```cpp
class Solution {
public:
    string LeftRotateString (string str, int k) {
        if (str.size() < k) return "";
        return str.substr(k) + str.substr(0, k);
    }
};
```

## `JZ44` 翻转单词序列

[链接](https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3)

```cpp
class Solution {
public:
    string ReverseSentence (string str) {
        string res, temp;
        stack<string> s;
        for (int i = 0; i < str.size(); ++ i) {
            if (str[i] == ' ') {
                s.push(temp);
                temp = "";
            } else {
                temp += str[i];
            }
        }
        s.push(temp);

        while (!s.empty()) {
            res = res + s.top() + " ";
            s.pop();
        }
        res.pop_back();
        return res;
    }
};
```

## `JZ45` 扑克牌顺子

[链接](https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4)

```cpp
class Solution {
public:
    bool IsContinuous (vector<int> a) {
        sort(a.begin(), a.end());
        int cnt = 0;
        for (int i = 0; i < a.size(); ++ i)
            if (a[i] == 0)
                ++ cnt;
        int beg;
        for (int i = 0; i < a.size(); ++ i) {
            if (a[i] != 0) {
                beg = a[i];
                break;
            }
        }
        for (int i = cnt; i < a.size(); ++ i) {
            if (a[i] == beg) {
                beg = a[i] + 1;
            } else if (a[i] < beg) {
                return false;
            } else if (cnt >= a[i] - beg) { // a[i] > beg
                cnt -= (a[i] - beg);
                beg = a[i] + 1;
            } else {
                return false;
            }
        }
        return true;
    }
};
```

## `JZ46` 孩子们的游戏(圆圈中最后剩下的数)

[链接](https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6)

```cpp
class Solution {
public:
    int LastRemaining_Solution (int n, int m) {
        if (n == 0) return -1;
        
        queue<int> q;
        for (int i = 0; i < n; ++ i) q.push(i);

        while (q.size() > 1) {
            for (int i = 1; i <= m - 1; ++ i) {
                q.push(q.front());
                q.pop();
            }
            q.pop();
        }
        return q.front();
    }
};
```

## `JZ47` 求`1+2+3+...+n`

[链接](https://www.nowcoder.com/practice/7a0da8fc483247ff8800059e12d7caf1)

```cpp
class Solution {
public:
    int Sum_Solution (int n) {
        bool b = n > 1 && (n += Sum_Solution(n - 1));
        return n;
    }
};
```

## `JZ48` 不用加减乘除做加法

[链接](https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215)

```cpp
class Solution {
public:
    int Add (int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a ^= b; // 不进位加法
            b = carry;
        }
        return a;
    }
};
```

## `JZ49` 把字符串转换成整数

[链接](https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e)

```cpp
class Solution {
    void trim (string& str) {
        if (str.size() == 0) return;

        str.erase(0, str.find_first_not_of(" "));
        str.erase(str.find_last_not_of(" ") + 1);
    }
public:
    int StrToInt(string str) {
        trim(str);
        for (int i = 0; i < str.size(); ++ i) {
            if (!('0' <= str[i] && str[i] <= '9')) {
                if (i > 0) {
                    return 0;
                } else if (!(str[i] == '+' || str[i] == '-')) {
                    return 0;
                }
            }
        }

        int sign = 1;
        if (str[0] == '+' || str[0] == '-') {
            if (str[0] == '-') sign = -1;
            str = str.substr(1);
        }
        int res = 0;
        for (int i = 0; i < str.size(); ++ i) {
            res *= 10;
            res += str[i] - '0';
        }
        return sign * res;
    }
};
```

## `JZ50` 数组中重复的数字

[链接](https://www.nowcoder.com/practice/6fe361ede7e54db1b84adc81d09d8524)

```cpp
class Solution {
public:
    int duplicate (vector<int>& a) {
        unordered_set<int> us;
        for (int i = 0; i < a.size(); ++ i) {
            if (us.find(a[i]) != us.end()) {
                return a[i];
            }
            us.insert(a[i]);
        }
        return -1;
    }
};
```

## `JZ51` 构建乘积数组

[链接](https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46)

```cpp
class Solution {
public:
    vector<int> multiply (const vector<int>& a) {
        int n = a.size();
        if (n <= 1) return {};

        vector<int> prefix_prod = { a[0] };
        for (int i = 1; i < n; ++ i)
            prefix_prod.push_back(prefix_prod[i - 1] * a[i]);
            
        vector<int> suffix_prod;
        for (int i = n - 1; i >= 0; -- i)
            suffix_prod.push_back(i == n - 1 ? a[i] : suffix_prod.back() * a[i]);
        reverse(suffix_prod.begin(), suffix_prod.end());

        vector<int> res;
        res.push_back(suffix_prod[1]);
        for (int i = 1; i < n - 1; ++ i)
            res.push_back(prefix_prod[i - 1] * suffix_prod[i + 1]);
        res.push_back(prefix_prod[n - 2]);
        return res;
    }
};
```

## `JZ55` 链表中环的入口结点

[链接](https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4)

```cpp
class Solution {
public:
    ListNode* EntryNodeOfLoop (ListNode* pHead) {
        ListNode *fast = pHead, *slow = pHead;
        while (fast != NULL && fast -> next != NULL) {
            fast = fast -> next -> next;
            slow = slow -> next;
            if (fast == slow) break;
        }
        if (fast == NULL || fast -> next == NULL) return NULL;

        fast = pHead;
        while (fast != slow) {
            fast = fast -> next;
            slow = slow -> next;
        }
        return fast;
    }
};
```

## `JZ59` 按之字形顺序打印二叉树

[链接](https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0)

```cpp
class Solution {
    struct node {
        TreeNode* ptr;
        int dep;
    };
public:
    vector<vector<int> > Print (TreeNode* pRoot) {
        vector<vector<int> > res;
        queue<node> q;
        if (pRoot != NULL) q.push({ pRoot, 0 });
        while (!q.empty()) {
            TreeNode* cur = q.front().ptr;
            int dep = q.front().dep;
            q.pop();

            if (dep == res.size()) res.push_back({});
            res[dep].push_back(cur -> val);

            if (cur -> left != NULL) q.push({ cur -> left, dep + 1 });
            if (cur -> right != NULL) q.push({ cur -> right, dep + 1 });
        }

        for (int i = 1; i < res.size(); i += 2)
            reverse(res[i].begin(), res[i].end());
        return res;
    }
};
```

## `JZ60` 把二叉树打印成多行

[链接](https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288)

```cpp
class Solution {
    struct node {
        TreeNode* ptr;
        int dep;
    };
public:
    vector<vector<int> > Print (TreeNode* pRoot) {
        vector<vector<int> > res;
        queue<node> q;
        if (pRoot != NULL) q.push({ pRoot, 0 });
        while (!q.empty()) {
            TreeNode* cur = q.front().ptr;
            int dep = q.front().dep;
            q.pop();

            if (dep == res.size()) res.push_back({});
            res[dep].push_back(cur -> val);

            if (cur -> left != NULL) q.push({ cur -> left, dep + 1 });
            if (cur -> right != NULL) q.push({ cur -> right, dep + 1 });
        }
        return res;
    }
};
```

## `JZ61` 序列化二叉树

[链接](https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84)

```js
function Serialize (pRoot, idx = 1) {
    if (pRoot === null) return ''

    return idx + ':' + pRoot.val + '_'
        + Serialize(pRoot.left, idx * 2)
        + Serialize(pRoot.right, idx * 2 + 1);
}
function dfs (idx, h) {
    if (!h[idx]) return null

    const cur = new TreeNode(h[idx])
    cur.left = dfs(idx * 2, h)
    cur.right = dfs(idx * 2 + 1, h)

    return cur
}
function Deserialize (str) {
    const a = str.slice(0, -1)
        .split('_')
        .map(e => e.split(':'))

    const h = {}
    a.forEach(e => {
        h[e[0]] = e[1]
    })
    
    return dfs(1, h)
}
```

## `JZ62` 二叉搜索树的第`k`个结点

[链接](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a)

```cpp
class Solution {
    #define size SiZe
    unordered_map<TreeNode*, int> size;
    int dfs (TreeNode* pRoot) {
        if (pRoot == NULL) return 0;

        return size[pRoot] = dfs(pRoot -> left)
            + dfs(pRoot -> right)
            + 1;
    }
    TreeNode* find (TreeNode* pRoot, int k) {
        int s = size[pRoot -> left];

        if (s + 1 == k) {
            return pRoot;
        } else if (s + 1 > k) {
            return find (pRoot -> left, k);
        } else {
            return find (pRoot -> right, k - s - 1);
        }
    }
public:
    TreeNode* KthNode (TreeNode* pRoot, int k) {
        if (pRoot == NULL || k == 0) return NULL;

        dfs(pRoot);
        size[NULL] = 0;
        if (k > size[pRoot]) return NULL;

        return find(pRoot, k);
    }
};
```

## `JZ63` 数据流中的中位数

[链接](https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1)

```cpp
class Solution {
    priority_queue<int> max_heap;
    priority_queue<int, vector<int>, greater<int> > min_heap;
public:
    void Insert (int val) {
        int cnt = max_heap.size() + min_heap.size();
        if (cnt % 2 == 0) {
            min_heap.push(val);
        } else {
            max_heap.push(val);
        }

        while (!max_heap.empty()
            && !min_heap.empty()
            && max_heap.top() > min_heap.top()
        ) {
            int a = max_heap.top();
            max_heap.pop();
            int b = min_heap.top();
            min_heap.pop();
            max_heap.push(b);
            min_heap.push(a);
        }
    }
    double GetMedian () { 
        int cnt = max_heap.size() + min_heap.size();
        if (cnt % 2 == 0) {
            return (max_heap.top() + min_heap.top()) / 2.0;
        }
        return min_heap.top();
    }
};
```

## `JZ64` 滑动窗口的最大值

[链接](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788)

```cpp
class Solution {
public:
    vector<int> maxInWindows (const vector<int>& a, unsigned int k) {
        if (k > a.size()) return {};
        
        deque<int> dq;
        vector<int> res;
        for (int i = 0; i < a.size(); ++ i) {
            if (!dq.empty() && i - dq.front() + 1 > k) dq.pop_front();
            while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
            dq.push_back(i);
            if (i >= k - 1) res.push_back(a[dq.front()]);
        }
        return res;
    }
};
```

## `JZ65` 矩阵中的路径

[链接](https://www.nowcoder.com/practice/2a49359695a544b8939c77358d29b7e6)

```cpp
class Solution {
    int dirx[4] = { -1, 1, 0, 0 };
    int diry[4] = { 0, 0, -1, 1 };
    int n, m;
    bool mark[210][210];

    bool dfs (int x, int y, string rest, vector<vector<char> >& matrix) {
        if (rest == "") return true;

        mark[x][y] = true;
        for (int i = 0; i < 4; ++ i) {
            int nx = x + dirx[i], ny = y + diry[i];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (mark[nx][ny] == true) continue;
            if (matrix[nx][ny] != rest[0]) continue;
            if (dfs(nx, ny, rest.substr(1), matrix)) {
                mark[x][y] = false;
                return true;
            }
        }
        mark[x][y] = false;
        return false;
    }
public:
    bool hasPath (vector<vector<char> >& matrix, string word) {
        if (word.size() == 0) return false;
        n = matrix.size();
        if (n == 0) return false;
        m = matrix[0].size();

        for (int i = 0; i < n; ++ i) {
            for (int j = 0; j < m; ++ j) {
                if (matrix[i][j] == word[0]
                    && dfs(i, j, word.substr(1), matrix)
                ) {
                    return true;
                }
            }
        }
        return false;
    }
};
```

## `JZ66` 机器人的运动范围

[链接](https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8)

```cpp
class Solution {
    int dirx[4] = { -1, 1, 0, 0 };
    int diry[4] = { 0, 0, -1, 1 };
    struct node {
        int x, y;
    };
    bool mark[110][110];

    int sum (int x) {
        int res = 0;
        while (x > 0) {
            res += x % 10;
            x /= 10;
        }
        return res;
    }
    bool check (int x, int y, int threshold) {
        return sum(x) + sum(y) <= threshold;
    }
public:
    int movingCount (int threshold, int n, int m) {
        int res = 0;
        queue<node> q;
        q.push({ 0, 0 });
        mark[0][0] = true;
        while (!q.empty()) {
            node cur = q.front();
            q.pop();
            ++ res;

            for (int i = 0; i < 4; ++ i) {
                int nx = cur.x + dirx[i], ny = cur.y + diry[i];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (mark[nx][ny] == true) continue;
                if (check(nx, ny, threshold) == false) continue;
                q.push({ nx, ny });
                mark[nx][ny] = true;
            }
        }
        return res;
    }
};
```

## `JZ67` 剪绳子

[链接](https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8)

```cpp
class Solution {
    int f[62];
public:
    int cutRope (int n, int prev_len = 1) {
        if (n == 0) return 1;
        if (f[n] != 0) return f[n]; // 记忆化
        
        int res = 0;
        for (int i = prev_len; i <= n; ++ i) {
            res = max(res, i * cutRope(n - i, i));
        }
        return f[n] = res;
    }
};
```

