export interface user{
    address: {
        geolocation: {
          lat: number,
          long: number
        },
        city: string,
        street: string,
        number: number,
        zipcode: any
      },
      id: number,
      email: string,
      username: string,
      password: string,
      cart:any
      orders:any
      name: {
        firstname: string,
        lastname: string
      },
      phone: any,
      __v: number
}