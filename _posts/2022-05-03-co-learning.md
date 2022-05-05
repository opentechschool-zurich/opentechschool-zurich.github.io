---
layout: post
title: "Co-Learning: 5. Mai 2022"
---

Hey, I try to go back to writing small blog posts about our co-learning sessions.

Tonight, it was our second _in real life_ session: Nic and Ale were at Toniareal. Alexandru and Öikü participated online.

The highlights of the sessions were a couple of C questions by Alexandru, related to his studies of the [libosmocore](https://github.com/osmocom/libosmocore/) code and Öikü exercises with sorting in C++.

On the C side we discovered the [`#`](https://gcc.gnu.org/onlinedocs/cpp/Stringizing.html#Stringizing) and [`##`](https://gcc.gnu.org/onlinedocs/cpp/Concatenation.html) preprocessing operators for [stringizing](https://gcc.gnu.org/onlinedocs/cpp/Stringizing.html#Stringizing) and [string concatenation](https://gcc.gnu.org/onlinedocs/cpp/Concatenation.html).

The exercise was about getting comfortable with lists sorting and, this time, was in C++. This is the final code we got:

```cpp
#include <iostream>
#include <algorithm>

// https://en.cppreference.com/w/cpp/algorithm/sort

struct Person {
    std::string firstname;
    std::string lastname;
    int birthdate; // timestamp
};

// https://en.cppreference.com/w/cpp/language/operators
inline bool operator< (const Person& lhs, const Person& rhs) { return lhs.firstname < rhs.firstname; }

int main() {

    std::vector<int> numbers = {1, 7, 6, 5, 4};


    std::sort(numbers.begin(),numbers.end(), std::greater<int>());
     // [](const int a, const int b) {return a > b; }
    // std::sort(numbers.begin(),numbers.end(), std::less<int>());

    // std::sort(numbers.begin(), numbers.end()); 
    // std::sort(numbers.rbegin(), numbers.rend()); 
    

    for (const auto number: numbers) {
        std::cout << number << " ";
    }

    std::cout << std::endl;


    std::vector<Person> persons = {
        {"aretha", "franklin", 1}, //Person("maria", "di nazareth", 1)
        {"linux", "torvalds", 2 /* 1.1.1965 */},
        {"camilla", "sparksss", 3 /* 1.1.1873 */}
    };

    // std::sort(persons.begin(), persons.end());
    // std::less = [](const Person a, const Person b) {return a < b; }
    std::sort(persons.begin(), persons.end(), [](const Person& lhs, const Person& rhs) {
        return lhs.birthdate > rhs.birthdate;
    });

    for (const auto& person: persons) {
        std::cout << person.firstname << " " <<
            person.lastname << " " <<
            person.birthdate << std::endl;
    }

    std::cout << std::endl;
    [](){}(); //anonymous function defined and called
}

```

First, got through the basics of sorting, then discovered how to do a reverse sorting with reverse iterators `rbegin` and `rend` or with `std::greated`.

The usage of `std::greater` lead us to discuss the usage of anonymous functions (`[](...){return a > b;}`) for algorithms and, finally, how to sort a list of custom structure (by implementing the `<` operator and by using the anonymous function).

As a follow up of the session, we also discussed `enum keyed lookup table` (in the context of libosmocore). This simpler snippet might be helpful for understanding how it works:

```c
#include <stdio.h>

enum {
    A,
    B
};

typedef struct {
    const char* name;
    int value;
} KeyValue;

static const KeyValue values[] = {
    [A] = {
        "a",
        100,
    },
    [B] = {
        "b",
        200,
    },
};

int main(void) {
    printf("%d\n", B);
    printf("%s %d\n", values[B].name, values[B].value);
    return 0;
}
```

Challenged by the fact that this is not valid C++, ale tried to bring a proof of concept for doing something similar in c++:

```cpp
#include <iostream>

struct Value {
    const char* name;
    int value;
};

std::ostream& operator << (std::ostream& out, const Value& v) {
    return out << v.name << " " << v.value;
}

enum Keys {
    A,
    B
};

constexpr Value values(Keys key) {
    switch (key) {
        case A: return {
            "a",
            100,
            };
            break;
        case B: return {
            "b",
            200,
            };
            break;
        default:
            throw std::out_of_range ("Unknown key " + key);
    }
}

int main() {
    std::cout << B << std::endl;
    std::cout << values(B) << std::endl;
}
```

This requires C++ 14 and should evaluate at compile time...

I will try to keep on writing a summary of the sessions in the future: wish me good luck!
