var size = 0;

var styleCache_GaryBoundaries={}
var style_GaryBoundaries = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: [3], width: 2}) , fill: new ol.style.Fill({color: "rgba(0,0,0,0)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GaryBoundaries[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_GaryBoundaries[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GaryBoundaries[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};