---
layout: post
title: "17th and 19th July 2022: First steps with Flutter and Dart"
---

Lilly needed some help in getting the Development environment setup on a Mac and on Sunday we finally managed to get it work.

## Installing Flutter on a Mac

Following the [official install instructions](https://docs.flutter.dev/get-started/install/macos) is not trivial and you have to know a bit about using the terminal and about installing software on MacOS... but at the end we managed it.

## Creating a Flutter project

One point was still open: which editor / IDE to use.

The most obvious answer was: Android Studio. And, indeed, it seems to be the best choice, for creating an app with Flutter.  
More and more people are using Visual Studio Code, but for now, I would dare that for getting started it's still better to stick to Android Studio.

## Running small Dart programs

But there is one more thing to thing to solve: if you're learning Flutter and Dart, you might want to do some exercise to better learn how Dart works.  
Sadly, Android Studio does not make it simple to run short bits of code: you will also need Visual Studio Code (or another editor...).

So, can you use Dart with Visual Studio Code?

First, you need to install the Dart extension (just use the Extension panel in the left toolbar).

Then there are three different ways to run small:

- If you want to run a single file, create a directoy where you plan to put your Dart files and add it to your VSC Workspace (_File > Add Folder to Workspace_), create a file in the Explorer panel (you need to use the `.dart` extension!), create a `void main()` function, and you can then run it with the "Run" menu.
- If you need to add packages you can create a new dart console application through the command palette (ctrl-shift-p or cmd-shift-p): the command is "Dart: new project > Console application" and you can then run the project as any other project.
- You can install the [Code Runner Extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) and the you will be able to open a Dart file (and edit it...), select the part you want to run and then run the code with Ctrl-Alt-n

[Here](https://stackoverflow.com/questions/52822524/create-and-run-dart-console-application-using-vscode) you can find [more information](https://stackoverflow.com/questions/52822524/create-and-run-dart-console-application-using-vscode).

Btw, there seems to be a way to check a small Dart program with Android Studio:

- Open any existing Flutter project.
- Add a new dart file in the `lib/` directory.
- Create your code inside a `void main()` function.
- Use the context menu (right click) on the file to pick the "Run filename.dart" menu entry (this menu entry is only there if there is a `main()` function.
- [Here](https://stackoverflow.com/questions/53888000/how-to-run-dart-in-android-studio) you can find [some more information](https://stackoverflow.com/questions/53888000/how-to-run-dart-in-android-studio).
