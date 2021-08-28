---
layout: post
title: "Co-Learning: 18. September 2018"
---

Short exercise for tonight: a vending machine.

![Co-Learning on Stempber 4th](/assets/posts/2018-09-18.jpg)

ale: Worked on a Pacman in Pygame that will walk on a grid

And this is my quick try at the "Vending machine" challenge:

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<float> products{1.00, 2.00, 3.00};
    int count;
    std::cout << "Which product?" << std::endl;
    std::cin >> count;
    if (count < 1 || count > 3) {
        return 0;
    }
    float price = products.at(count - 1); 
    std::cout << "Price: " << price << std::endl;
    float payed{0.0};
    while (payed < price) {
        std::cout << "-------" << std::endl;
        std::cout << "You have to pay: " << price - payed <<  std::endl;
        std::cout << "Drop a coin (0.50, 1.00, 2.00) " << std::endl;
        float coin;
        std::cin >> coin;
        if (coin == 0.50 || coin == 1.00 || coin == 2.00) {
            payed += coin;
        }
    }
    std::cout << "=======" << std::endl;
    std::cout << "Dropping product " << count << std::endl;
    payed -= price;
    while (payed > 0) {
        if (payed >= 2.0) {
            payed -= 2.0;
            std::cout << "Return 2.00 change" << std::endl;
        } else if (payed >= 1.0) {
            payed -= 1.0;
            std::cout << "Return 1.00 change" << std::endl;
        } else if (payed >= 0.5) {
            payed -= 0.5;
            std::cout << "Return 0.50 change" << std::endl;
        }
    }
}
```

My goal was to have something that works ok, in quarter of an hour...

This is what I've learned from the show and tell:

- Don't use floats for the prices (use hundreds of cents...): otherwise your remainder could get down to `234 10^-23` and never gets to zero... 
- It would have not been hard to add a label to the products and show the list.
- Check the size of the lists, do not hard code the limits

Marcel Burkhard: Worked on sololearn C++ tutorial (from the start up to *Data Types, Arrays, Pointers*). Then I participated in a little vending machine challenge. The script is very limited because I don't know some data structures in C++ yet.


```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    double products[4];
    products[0] = 1.75;
    products[1] = 2.20;
    products[2] = 0.50;
    products[3] = 5.00;
    products[4] = 4.25;

    int userSelection = 0;

    while (userSelection < 1 || userSelection > 4) {
        cout << "Please pick a product (1-5) to continue." << endl;
        cin >> userSelection;
    }

    //the user will select 1-5 and we will pick the array index 0-4
    int translatedUserSelection = userSelection - 1;

    cout << "The chosen product costs: " << products[translatedUserSelection] << " Fr." << endl;
    cout << "This vending machine accepts coins in the following denominations: 0.50, 1.00, 2.00" << endl;

    double credit = 0.00;

    while (credit < products[translatedUserSelection]) {
        cout << "Please insert (another) coin" << endl;
        double coinInserted;

        cin >> coinInserted;

        if (coinInserted == 0.50) {
            credit += 0.50;
        } else if (coinInserted == 1.00) {
            credit += 1.00;
        } else if (coinInserted == 2.00) {
            credit += 2.00;
        } else {
            cout << "Your coin was rejected and you find it in the change container." << endl;
        }

        cout << "Your credit: " << credit << endl;
    }

    double change = credit - products[translatedUserSelection];

    cout << "Ejecting product number " << userSelection << " and " << change << " change.";
    //eject(translatedUserSelection)

    return 0;
}
```

Richard: Read up about tavleView in QT. Added one to the app and discovered bad paths and tons of compiler errors. Eventually figured out what was wrong and cleaned up the .pro file for the project.
