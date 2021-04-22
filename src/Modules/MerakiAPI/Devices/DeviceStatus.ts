import React from "react";

class DeviceStatus extends React.Component<any>{
  name!: string;
  serial!: string;
  mac!: string;
  publicIp!: string;
  networkId!: string;
  status!: string;
  lastReportedAt!: string;
  lanIp!: string;
  gateway!: string;
  ipType!: string;
  primaryDns!: string;
  secondaryDns!: string;
  usingCellularFailover!: boolean;
  wan1Ip!: string;
  wan1Gateway!: string;
  wan1IpType!: string;
  wan1PrimaryDns!: string;
  wan1SecondaryDns!: string;
  wan2Ip!: string;
  wan2Gateway!: string;
  wan2IpType!: string;
  wan2PrimaryDns!: string;
  wan2SecondaryDns!: string;
}

export default DeviceStatus
