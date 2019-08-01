# Which UI ?

Re-making famous user-interfaces (UI) accross multiple technologies to test and compare them.

## Projects

Name | Screenshot | Made with
--- | --- | ---
Papers, please | ![Papers please](doc/readme-img/papers-please.gif?raw=true) | ![Unreal](doc/readme-img/unreal.png?raw=true)![HTML](doc/readme-img/html.png?raw=true)![Unity](doc/readme-img/unity.png?raw=true)  <br> ![Godot](doc/readme-img/godot.png?raw=true) ![XAML](doc/readme-img/xaml.png?raw=true) ![QML](doc/readme-img/qt.png?raw=true)
Metroid Prime | ![Metroid Prime](doc/readme-img/metroid-prime.png?raw=true) | 
Dead Space | ![Dead space](doc/readme-img/dead-space.png?raw=true) | 

## Technologies

![HTML](doc/readme-img/html.png?raw=true)

The HTML is the open markup language which **powers the web**. It comes right from 1993 and is used extensively since then. Built with the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) in mind, it has to be used with 2 other languages : *CSS* to style the page, and *Javascript* to handle the logic.

As the complexity of usages grows, frameworks like [Angular](https://angular.io/), [React](https://fr.reactjs.org/) or [Vue](https://vuejs.org/) became essential. Basically, they split the website into smaller reusable components, and they bring some of the logic into the HTML (event triggers and conditions).

> The html folders contains project built vanilla Javascript (no framework), but it also contains projects made with **Vue**(<img src="doc/readme-img/vue.png?raw=true" height="15px">) or **React** (<img src="doc/readme-img/react.png?raw=true" height="20px">). If it is the case, the icon used will not be HTML, but the logo of the framework.

While HTML has been designed to make websites, in recent years we have seen the adoption of frameworks like [Electron](https://electronjs.org/) to deploy it as a desktop app, or [Coherent](https://coherent-labs.com/) to embed it in games and major game engines. 

*For more details, check the `html` folder.*

---

![XAML](doc/readme-img/xaml.png?raw=true)

The XAML language has been created by Microsoft in 2008 to support their [.NET](https://dotnet.microsoft.com/) WPF Environment. Similar to HTML, it is much more verbose as the style and most of the logic is embedded inside the XAML file. More complex logic is handled in a C# file, the *code-behind*.

It is recommended to use [Microsoft Blend](https://docs.microsoft.com/fr-fr/visualstudio/designers/creating-a-ui-by-using-blend-for-visual-studio?view=vs-2019), a WYSIWYG editor to create anything in XAML. While this technology has been made to create Desktop app for Windows, it is possible to embed XAML interfaces in games and all of the major game engines using the 3rd party proprietary library [Noesis GUI](https://www.noesisengine.com/).

A newer, less-powerfull version of the language has been made to support the UWP environment, but we are not using it through these projects has the restrictions are quite strong, and it has not been made to be embedded in real-time application.

*For more details, check the `xaml` folder.*

---

![QML](doc/readme-img/qt.png?raw=true) 

[QT](https://www.qt.io/) is a C++ UI library which has been made public in 1995. In 2009, QT Group released the QML language which allows to create user-interfaces in a declarative language similar to JSON, and less verbose than HTML.

**QT Creator** is the tool of choice to use the library, it provides a code editor and a WYSIWYG editor similar to Microsoft Blend but less powerfull. For more complex usage, you have to pay for [QT Design studio](https://www.qt.io/ui-framework), the proprietary alternative.

While QT is used widely to create desktop application, it is very rare to see it in games as it has not been built for real-time applications.

*For more details, check the `qml` folder.*

---

> The stacks presented below are Game Engines, as the technology they use is specific to their software, the folders are nammed with the engine name instead of the langage. 
> (ex: Unity for Unity3D engine instead of UXML)

![Unity](doc/readme-img/unity.png?raw=true)

Released in 2005, the [Unity Engine](https://unity.com/fr) became very popular amongst independent game developers. It has been downloadable for free since 2009, and offers built-in support for many features as Game UI. In 2019, they started a new API for UI called [UIElements](https://blogs.unity3d.com/2019/04/23/whats-new-with-uielements-in-2019-1/) which is a mix  between XAML and HTML stack, and provides better performance and scalability than the previous API.

The idea is to have a **UXML** file for layout similar to the HTML language. Then a **USS** file for styles, which is a subset of the CSS language, and finally, a **C#** file to handle logic, similar to the *code-behind* file of the XAML stack.

At the time of this writing, UIElements is restricted to extending the editor, but in-game support is announced for future releases of Unity.

*For more details, check the `unity` folder.*

---

![Godot](doc/readme-img/godot.png?raw=true)

[Godot](https://godotengine.org/) is an MIT-Licensed game engine released in 2014. It has gained more traction in 2018 with the release of Godot 3. Lightweight and easy to use, it offers built-in support for UI and animation, both in script and in a WYSIWYG editor.

Everything in this engine is built around the concept of Nodes, and the UI is no exception.

*For more details, check the `godot` folder.*

---

![Unreal](doc/readme-img/unreal.png?raw=true)

[Unreal Engine](https://www.unrealengine.com/en-US/what-is-unreal-engine-4) has been around since 1995, and used by many AAA games since. In 2015, it has been made free to download for anyone, as a way to counter-attack Unity in the independent game market.

With the version 4 of their engine, Epic Games created the [UMG UI Designer](https://docs.unrealengine.com/en-US/Engine/UMG/index.html) tools to create user-interface and animate them in the engine. This powerful tool offer a WYSIWYG editor to place the elements, and a node-based scripting system called *Blueprint* to handle the logic of the UI.

*For more details, check the `unreal` folder.*