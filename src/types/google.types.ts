type AddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

type Coords = {
  lat: number;
  lng: number;
};

type NESW = {
  northeast: Coords;
  southwest: Coords;
};

type Geometry = {
  bounds: NESW;
  location: Coords;
  location_type: string;
  viewport: NESW;
};

type TValidatePostCodeResponseResults = {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  postcode_localities: string[];
  types: string[];
};

type TSearchAddressResponseResults = TValidatePostCodeResponseResults;

export type TValidatePostCodeResponse = {
  results: TValidatePostCodeResponseResults[];
  status: string;
};

export type TSearchAddressResponse = {
  results: TSearchAddressResponseResults[];
  status: string;
};
