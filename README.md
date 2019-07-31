# Which UI ?

Re-making famous user-interfaces (UI) accross multiple technologies to test and compare them.

## Projects

Name | Screenshot | Made with
--- | --- | ---
Papers, please | ![Papers please](doc/readme-img/papers-please.gif?raw=true) | ![HTML](doc/readme-img/html.png?raw=true) ![XAML](doc/readme-img/xaml.png?raw=true) ![QML](doc/readme-img/qt.png?raw=true) <br> ![Unreal](doc/readme-img/unreal.png?raw=true) ![Godot](doc/readme-img/godot.png?raw=true) ![Unity](doc/readme-img/unity.png?raw=true)
Metroid Prime | ![Metroid Prime](doc/readme-img/metroid-prime.png?raw=true) | 
Dead Space | ![Dead space](doc/readme-img/dead-space.png?raw=true) | 

## Technologies

![HTML](doc/readme-img/html.png?raw=true)

The HTML is the open markup language which **powers the web**. It comes right from 1993 and is used extensively since then. Built with the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) in mind, it has to be used with 2 other languages : *CSS* to style the page, and *Javascript* to handle the logic.

As the complexity of usages grows, frameworks like [Angular](https://angular.io/), [React](https://fr.reactjs.org/) or [Vue](https://vuejs.org/) became essential. Basically, they split the website into smaller reusable components, and they bring some of the logic into the HTML (event triggers and conditions).

> The html folders contains project built vanilla Javascript (no framework), but it also contains projects made with Vue and React.

While HTML has been designed to make websites, in recent years we have seen the adoption of frameworks like [Electron](https://electronjs.org/) to deploy it as a desktop app, or [Coherent](https://coherent-labs.com/) to embed it in Games. 

*For more details, check the `html` folder.*

![XAML](doc/readme-img/xaml.png?raw=true)

The XAML language has been created by Microsoft in 2008 to support their .NET WPF Environment. Similar to HTML, it is much more verbose has the style and most of the logic is embeded inside the XAML file. More complex logic is handled in a C# file, the *code-behind*.

It is recommanded to use [Microsoft Blend](https://docs.microsoft.com/fr-fr/visualstudio/designers/creating-a-ui-by-using-blend-for-visual-studio?view=vs-2019), a WYSIWYG editor to create anything in XAML. While this technology has been made to create Desktop app for Windows, it is possible to embed XAML interfaces in games using the 3rd party proprietary library [Noesis GUI](https://www.noesisengine.com/).

A newer, less-powerfull version of the langage has been made to support the UWP environment, but we are not using it through these projects has the restrictions are quite strong, and it has not been made to be embeded in real-time application.

*For more details, check the `xaml` folder.*

![QML](doc/readme-img/qt.png?raw=true) 

*For more details, check the `qml` folder.*

> The stack presented below are Game Engines, as the technology they used is specific to their software, the folders are nammed with the engine name instead of the langage. 
> (ex: Unity for Unity3D engine instead of UXML)

![Godot](doc/readme-img/godot.png?raw=true)

*For more details, check the `godot` folder.*

![Unity](doc/readme-img/unity.png?raw=true)

*For more details, check the `unity` folder.*

![Unreal](doc/readme-img/unreal.png?raw=true)

*For more details, check the `unreal` folder.*