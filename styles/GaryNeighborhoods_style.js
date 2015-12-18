var size = 0;

var styleCache_GaryNeighborhoods={}
var style_GaryNeighborhoods = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: [3], width: 0}) , fill: new ol.style.Fill({color: "rgba(0,0,0,0.0)"})
    })];
    if (feature.get("NAME")) {
        var labelText = feature.get("NAME");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GaryNeighborhoods[key]){
        var text = new ol.style.Text({
              font: '15.025px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_GaryNeighborhoods[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GaryNeighborhoods[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};