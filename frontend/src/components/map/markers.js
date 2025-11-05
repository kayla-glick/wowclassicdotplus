import L from "leaflet";

// Marker icons
const markerIcons = {
  Lore: new L.Icon({
    iconUrl: "/map/lore_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  Raid: new L.Icon({
    iconUrl: "/map/raid_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  Quest: new L.Icon({
    iconUrl: "/map/quest_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  Dungeon: new L.Icon({
    iconUrl: "/map/dungeon_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  "Flight Path": new L.Icon({
    iconUrl: "/map/flight_path_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  Zone: new L.Icon({
    iconUrl: "/map/zone_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  PvP: new L.Icon({
    iconUrl: "/map/pvp_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  "World Boss": new L.Icon({
    iconUrl: "/map/world_boss_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
  "World Event": new L.Icon({
    iconUrl: "/map/world_event_marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0],
  }),
};

export function getMarkerIconUrl(category) {
  return markerIcons[category]?.options.iconUrl
}

export default markerIcons;
