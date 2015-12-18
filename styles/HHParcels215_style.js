var size = 0;

var styleCache_HHParcels215={}
var style_HHParcels215 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(252,175,62,1.0)", lineDash: null, width: 2}) , fill: new ol.style.Fill({color: "rgba(252,175,62,.75)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_HHParcels215[key]){
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
        styleCache_HHParcels215[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_HHParcels215[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};