
export type geoLocationType = {
  lat: string;
  lng: string;
};

export type userDetailsAddressType = {
  city: string;
  geo: geoLocationType;
  street: string;
  suite: string;
  zipcode: string;
};

export type userDetailsCompanyType = {
  bs: string;
  catchPhrase: string;
  name: string;
}

export type userDetailsType = {
  address: userDetailsAddressType;
  company: userDetailsCompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}