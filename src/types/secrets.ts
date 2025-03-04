export interface EventAccess {
  _id: string;
  name: string;
  key: string;
  namespace: string;
  platform: string;
  type: string;
  group: string;
  ownership: {
    buildableId: string;
    clientId: string;
    organizationId: string;
    projectId: string;
    userId: string;
  };
  paths: {
    id: null;
    event: null;
    payload: null;
    timestamp: null;
    secret: null;
    signature: null;
    cursor: null;
  };
  accessKey: string;
  environment: string;
  createdAt: number;
  updatedAt: number;
  updated: boolean;
  version: string;
  lastModifiedBy: string;
  deleted: boolean;
  changeLog: object;
  tags: string[];
  active: boolean;
  deprecated: boolean;
}

export interface EventAccessList {
  rows: EventAccess[];
  total: number;
  skip: number;
  limit: number;
}
