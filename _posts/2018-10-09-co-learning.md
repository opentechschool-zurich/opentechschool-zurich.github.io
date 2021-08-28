---
layout: post
title: "Co-Learning: 9. Oktober 2018"
---

For the first time, way more C++ learners as Python! We counted: 8 C++, 2 Python and one lonely C# learner!

![Co-Learning on October 9](/assets/posts/2018-10-09.jpg)

ale: with luca i had a look to memoization in c++, a solution for caching the values returned by a function.

## 123 -> 6

Tonight's 15 minutes exercise: given a number, calculate the sum of its digits values.

For beginners who have not seen loops and conditionals yet, you can assume that the number is between 1 and 999.

### a.l.e

For numbers between 1 and 999 only:

```cpp
#include <iostream>
int main()
{
    int zahl{124};
    int e{zahl % 10};
    zahl /= 10;
    int z{zahl % 10};
    int h{zahl / 10};
    std::cout << e + z + h << std::endl;
}
```

### Luca
Today I worked with a.l.e on some small memoitazion functions using templates.
Then the "end session exercise" solution I implemented is:
```cpp
#include <iostream>
int main()
{
    // example: 123 = 6

    int initial{123}, in{initial};
    int res = 0;

    while (in > 0) {
        res += in % 10;
        in = in / 10;
    }

    std::cout << "Sum of all digits from number "
              << initial << " is: " << res << std::endl;
}
```
