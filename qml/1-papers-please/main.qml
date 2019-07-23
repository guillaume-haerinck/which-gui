import QtQuick 2.13
import QtQuick.Window 2.13
import QtQuick.Shapes 1.11

Window {
    id: window
    FontLoader { id: fontBMGermar; source: "qrc:/fonts/BMgermar.TTF" }
    FontLoader { id: font04B03; source: "qrc:/fonts/04B_03__.TTF" }
    visible: true
    width: 640
    height: 480
    color: "#000000"
    title: qsTr("Papers, please")

    Image {
        id: image
        x: 62
        y: 66
        width: 518
        height: 169
        anchors.verticalCenterOffset: -73
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter
        source: "title.png"
        fillMode: Image.PreserveAspectFit
    }

    Text {
        id: play
        x: 261
        y: 302
        width: 119
        height: 28
        color: "#808080"
        text: qsTr("PLAY")
        anchors.verticalCenterOffset: 80
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter
        verticalAlignment: Text.AlignVCenter
        horizontalAlignment: Text.AlignHCenter
        font.pixelSize: 16
        font.family: fontBMGermar.name

        Shape {
            width: parent.width
            height: parent.height
            anchors.horizontalCenter: parent.horizontalCenter
            anchors.verticalCenter: parent.verticalCenter

            ShapePath {
                strokeColor: "#808080"
                strokeWidth: 1
                dashPattern: (8, 8);
                strokeStyle: ShapePath.DashLine
                startX: 0
                startY: 0
                fillColor: 'transparent'
                capStyle: 'RoundCap'
                PathLine { x: 119; y: 0 }
                PathLine { x: 119; y: 28 }
                PathLine { x: 0; y: 28 }
                PathLine { x: 0; y: 0 }
            }
        }
    }

    Item {
        id: credits
        x: 176
        y: 368
        width: 300
        height: 67
        anchors.verticalCenterOffset: 160
        anchors.horizontalCenterOffset: 0
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.verticalCenter: parent.verticalCenter

        Text {
            id: credit2
            x: 91
            y: 38
            width: 106
            height: 23
            color: "#808080"
            text: qsTr("@lukope")
            verticalAlignment: Text.AlignTop
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: 12
            font.family: font04B03.name
        }

        Text {
            id: credit1
            x: 60
            y: 20
            width: 168
            height: 23
            color: "#808080"
            text: qsTr("created by Lucas Pope")
            verticalAlignment: Text.AlignTop
            horizontalAlignment: Text.AlignHCenter
            font.pixelSize: 12
            font.family: font04B03.name
        }

    }
}













/*##^## Designer {
    D{i:3;anchors_y:66}
}
 ##^##*/
