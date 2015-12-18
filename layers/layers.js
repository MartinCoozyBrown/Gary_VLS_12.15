var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({
                                    title: 'MapQuest Aerial',
                                    source: new ol.source.MapQuest({
                                        layer: 'sat'
                                    })
                                  })]});
var format_NationalConservationEasements = new ol.format.GeoJSON();
var features_NationalConservationEasements = format_NationalConservationEasements.readFeatures(geojson_NationalConservationEasements, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalConservationEasements = new ol.source.Vector();
jsonSource_NationalConservationEasements.addFeatures(features_NationalConservationEasements);var lyr_NationalConservationEasements = new ol.layer.Vector({
                source:jsonSource_NationalConservationEasements, 
                style: style_NationalConservationEasements,
                title: "National Conservation Easements"
            });var format_ShirleyHeinzLandTrust = new ol.format.GeoJSON();
var features_ShirleyHeinzLandTrust = format_ShirleyHeinzLandTrust.readFeatures(geojson_ShirleyHeinzLandTrust, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShirleyHeinzLandTrust = new ol.source.Vector();
jsonSource_ShirleyHeinzLandTrust.addFeatures(features_ShirleyHeinzLandTrust);var lyr_ShirleyHeinzLandTrust = new ol.layer.Vector({
                source:jsonSource_ShirleyHeinzLandTrust, 
                style: style_ShirleyHeinzLandTrust,
                title: "Shirley_Heinz_Land_Trust"
            });var format_IDNRManagedLandsGary = new ol.format.GeoJSON();
var features_IDNRManagedLandsGary = format_IDNRManagedLandsGary.readFeatures(geojson_IDNRManagedLandsGary, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IDNRManagedLandsGary = new ol.source.Vector();
jsonSource_IDNRManagedLandsGary.addFeatures(features_IDNRManagedLandsGary);var lyr_IDNRManagedLandsGary = new ol.layer.Vector({
                source:jsonSource_IDNRManagedLandsGary, 
                style: style_IDNRManagedLandsGary,
                title: "IDNR_ManagedLands_Gary"
            });var format_PublicLandParksDepartment = new ol.format.GeoJSON();
var features_PublicLandParksDepartment = format_PublicLandParksDepartment.readFeatures(geojson_PublicLandParksDepartment, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicLandParksDepartment = new ol.source.Vector();
jsonSource_PublicLandParksDepartment.addFeatures(features_PublicLandParksDepartment);var lyr_PublicLandParksDepartment = new ol.layer.Vector({
                source:jsonSource_PublicLandParksDepartment, 
                style: style_PublicLandParksDepartment,
                title: "Public Land.Parks Department"
            });var format_PublicLandGUEA = new ol.format.GeoJSON();
var features_PublicLandGUEA = format_PublicLandGUEA.readFeatures(geojson_PublicLandGUEA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicLandGUEA = new ol.source.Vector();
jsonSource_PublicLandGUEA.addFeatures(features_PublicLandGUEA);var lyr_PublicLandGUEA = new ol.layer.Vector({
                source:jsonSource_PublicLandGUEA, 
                style: style_PublicLandGUEA,
                title: "Public Land.GUEA"
            });var format_PublicLandDeptofRedevelopment = new ol.format.GeoJSON();
var features_PublicLandDeptofRedevelopment = format_PublicLandDeptofRedevelopment.readFeatures(geojson_PublicLandDeptofRedevelopment, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicLandDeptofRedevelopment = new ol.source.Vector();
jsonSource_PublicLandDeptofRedevelopment.addFeatures(features_PublicLandDeptofRedevelopment);var lyr_PublicLandDeptofRedevelopment = new ol.layer.Vector({
                source:jsonSource_PublicLandDeptofRedevelopment, 
                style: style_PublicLandDeptofRedevelopment,
                title: "Public Land.Dept of Redevelopment"
            });var format_PublicLandCityofGary = new ol.format.GeoJSON();
var features_PublicLandCityofGary = format_PublicLandCityofGary.readFeatures(geojson_PublicLandCityofGary, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicLandCityofGary = new ol.source.Vector();
jsonSource_PublicLandCityofGary.addFeatures(features_PublicLandCityofGary);var lyr_PublicLandCityofGary = new ol.layer.Vector({
                source:jsonSource_PublicLandCityofGary, 
                style: style_PublicLandCityofGary,
                title: "Public Land.City of Gary"
            });var format_HHParcels216 = new ol.format.GeoJSON();
var features_HHParcels216 = format_HHParcels216.readFeatures(geojson_HHParcels216, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HHParcels216 = new ol.source.Vector();
jsonSource_HHParcels216.addFeatures(features_HHParcels216);var lyr_HHParcels216 = new ol.layer.Vector({
                source:jsonSource_HHParcels216, 
                style: style_HHParcels216,
                title: "HH_Parcels.2016"
            });var format_HHParcels215 = new ol.format.GeoJSON();
var features_HHParcels215 = format_HHParcels215.readFeatures(geojson_HHParcels215, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HHParcels215 = new ol.source.Vector();
jsonSource_HHParcels215.addFeatures(features_HHParcels215);var lyr_HHParcels215 = new ol.layer.Vector({
                source:jsonSource_HHParcels215, 
                style: style_HHParcels215,
                title: "HH_Parcels.2015"
            });var format_HHParcels214 = new ol.format.GeoJSON();
var features_HHParcels214 = format_HHParcels214.readFeatures(geojson_HHParcels214, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HHParcels214 = new ol.source.Vector();
jsonSource_HHParcels214.addFeatures(features_HHParcels214);var lyr_HHParcels214 = new ol.layer.Vector({
                source:jsonSource_HHParcels214, 
                style: style_HHParcels214,
                title: "HH_Parcels.2014"
            });var format_GARYTIFDISTRICTSany = new ol.format.GeoJSON();
var features_GARYTIFDISTRICTSany = format_GARYTIFDISTRICTSany.readFeatures(geojson_GARYTIFDISTRICTSany, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARYTIFDISTRICTSany = new ol.source.Vector();
jsonSource_GARYTIFDISTRICTSany.addFeatures(features_GARYTIFDISTRICTSany);var lyr_GARYTIFDISTRICTSany = new ol.layer.Vector({
                source:jsonSource_GARYTIFDISTRICTSany, 
                style: style_GARYTIFDISTRICTSany,
                title: "GARY_TIF_DISTRICTS any"
            });var format_GaryNeighborhoods = new ol.format.GeoJSON();
var features_GaryNeighborhoods = format_GaryNeighborhoods.readFeatures(geojson_GaryNeighborhoods, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaryNeighborhoods = new ol.source.Vector();
jsonSource_GaryNeighborhoods.addFeatures(features_GaryNeighborhoods);var lyr_GaryNeighborhoods = new ol.layer.Vector({
                source:jsonSource_GaryNeighborhoods, 
                style: style_GaryNeighborhoods,
                title: "Gary_Neighborhoods"
            });var format_GaryBoundaries = new ol.format.GeoJSON();
var features_GaryBoundaries = format_GaryBoundaries.readFeatures(geojson_GaryBoundaries, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GaryBoundaries = new ol.source.Vector();
jsonSource_GaryBoundaries.addFeatures(features_GaryBoundaries);var lyr_GaryBoundaries = new ol.layer.Vector({
                source:jsonSource_GaryBoundaries, 
                style: style_GaryBoundaries,
                title: "Gary Boundaries"
            });

lyr_NationalConservationEasements.setVisible(true);lyr_ShirleyHeinzLandTrust.setVisible(true);lyr_IDNRManagedLandsGary.setVisible(true);lyr_PublicLandParksDepartment.setVisible(true);lyr_PublicLandGUEA.setVisible(true);lyr_PublicLandDeptofRedevelopment.setVisible(true);lyr_PublicLandCityofGary.setVisible(true);lyr_HHParcels216.setVisible(true);lyr_HHParcels215.setVisible(true);lyr_HHParcels214.setVisible(true);lyr_GARYTIFDISTRICTSany.setVisible(true);lyr_GaryNeighborhoods.setVisible(true);lyr_GaryBoundaries.setVisible(true);
var layersList = [baseLayer,lyr_NationalConservationEasements,lyr_ShirleyHeinzLandTrust,lyr_IDNRManagedLandsGary,lyr_PublicLandParksDepartment,lyr_PublicLandGUEA,lyr_PublicLandDeptofRedevelopment,lyr_PublicLandCityofGary,lyr_HHParcels216,lyr_HHParcels215,lyr_HHParcels214,lyr_GARYTIFDISTRICTSany,lyr_GaryNeighborhoods,lyr_GaryBoundaries];
