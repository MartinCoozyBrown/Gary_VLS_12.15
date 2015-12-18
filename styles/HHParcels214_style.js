var size = 0;

var styleCache_HHParcels214={}
var style_HHParcels214 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,0,1.0)", lineDash: null, width: 2}) , fill: new ol.style.Fill({color: "rgba(255,255,0,.75)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_HHParcels214[key]){
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
        styleCache_HHParcels214[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_HHParcels214[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};