import React from "react";
import {
  GoogleMap,
  //useLoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import Select from "react-select";
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
} from "devextreme-react/pie-chart";
import "./App.css";
const mapContainerStyle = {
  height: "60vh",
  width: "80vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
};
const center = { lat: 30.033333, lng: 31.233334 };
//const apiKey = "AIzaSyB_y1V08dj1ruvJ7Su9y3aPfKEBvd7lJzY";
//const libraries= ['places'];
const App = () => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: apiKey,
  //   libraries,
  // });
  const [availableCountries, setAvailableCountries] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const [mapRef, setMapRef] = React.useState(null);
  const onMapClick = React.useCallback(
    (e) => {
    },
    [mapRef]
  );
  const getAvailableCountries = async (name) => {
    //Apply search when user enter more than two characters
    if (name && name.trim().length > 2) {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const data = await response.json();
      // Endpoint response check
      if (Array.isArray(data)) {
        // Creating New Array to be used in ReactSelect & GoogleMaps
        let countryNames = data.map((country) => {
          return {
            label: country.name,
            country: country.name,
            value: country.numericCode,
            latlng: country.latlng,
            area: country.population,
          };
        });
        setAvailableCountries(countryNames);
      }
    } else {
      setAvailableCountries([]);
    }
  };
  return (
    <div className="App">
      <div className="search-bar">
        <div className="label-name">
          <label>Please enter country name :</label>
        </div>
        <Select
          isClearable
          onSelectResetsInput={true}
          onChange={(country) => setSelectedCountry(country)}
          value={selectedCountry ? selectedCountry : ""}
          onInputChange={(event) => {
            getAvailableCountries(event);
          }}
          options={availableCountries}
        />
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={2.5}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={(mapRef) => setMapRef(mapRef)}
      >
        {availableCountries.map((country) => (
          <Marker
            key={`${country.latlng[0]}-${country.latlng[1]}`}
            position={{ lat: country.latlng[0], lng: country.latlng[1] }}
            label={{
              text: country.label,
              color: "#222222",
              fontSize: "12px",
            }}
          />
        ))}
        {selectedCountry ? (
          <InfoWindow
            position={{
              lat: selectedCountry.latlng[0],
              lng: selectedCountry.latlng[1],
            }}
          >
            <div>
              <h2>{selectedCountry.label}</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <div className="pie-chart">
        <PieChart
          id="pie"
          dataSource={selectedCountry ? [selectedCountry] : availableCountries}
          palette="Bright"
          title="Population of Countries"
        >
          <Series argumentField="country" valueField="area">
            <Label visible={true}>
              <Connector visible={true} width={6} />
            </Label>
          </Series>
          <Size width={600} />
        </PieChart>
      </div>
    </div>
  );
};

export default App;
