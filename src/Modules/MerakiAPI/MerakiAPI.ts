import DeviceStatus from './Devices/DeviceStatus'

class MerakiAPI{
  readonly API_ADDRESS:string = "http://localhost:10000/api/";

  async fetchMerakiEndpoint<Type>(endpoint:string): Promise<Type>{
    var headers:Headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    var requestInit:RequestInit = {
      method: 'GET',
      headers: headers,
    }

    const response = await fetch(this.API_ADDRESS + endpoint, requestInit);
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return response.json();
    }
  }

  async getDeviceStatusOrgWide(): Promise<DeviceStatus[]>{
    var devices:DeviceStatus[];

    devices = await this.fetchMerakiEndpoint<DeviceStatus[]>('deviceStatusOrgWide');
    console.log(devices);

    return devices;
  }
}

export default MerakiAPI
