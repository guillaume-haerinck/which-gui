using System;
using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;

// https://learn.unity.com/tutorial/uielements-first-steps

// To open the window, press :
// ctrl + shift + T

public class TitleScreen : EditorWindow
{
   [MenuItem("TitleScreen/Open _%#T")]
    public static void ShowWindow()
    {
        var window = GetWindow<TitleScreen>();
        window.titleContent = new GUIContent("TitleScreen");
        window.minSize = new Vector2(250, 50);
    }

    private void OnEnable()
    {
        var root = rootVisualElement;
        var visualTree = Resources.Load<VisualTreeAsset>("TitleScreen");
        visualTree.CloneTree(root);
        root.styleSheets.Add(Resources.Load<StyleSheet>("TitleScreen"));
    }
}
