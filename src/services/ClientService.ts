import api from '../http/api';
import Client from '../models/Client';

type RequestCreateClient = Omit<Client, 'id' | 'photo'>;
type RequestUpdateClient = Omit<Client, 'photo'>;

type RequestUpdatePhoto = {
  file: any;
};

export const getAllClients = async (name: string): Promise<Client[]> => {
  const { data } = await api.get<Client[]>('/clients', {
    params: {
      name,
    },
  });

  return data;
};

export const createClient = async (client: RequestCreateClient): Promise<Client> => {
  const { data } = await api.post<Client>('/clients', client);
  return data;
};

export const updateClient = async (client: RequestUpdateClient): Promise<RequestUpdateClient> => {
  const { data } = await api.put<RequestUpdateClient>(`/clients/${client.id}`, client);

  return data;
};

export const updatePhotoClient = async ({ file }: RequestUpdatePhoto): Promise<any> => {
  const { data } = await api.patch<Client>(
    `/clients/profilePhoto/acd7f502-88d6-429b-af28-c781dc355bbd`,
    file,
    {
      headers: {
        'content-type': 'multipart/form-data; boundary=9000',
      },
    },
  );

  return data;
};

export const deleteClient = async (idClient: string): Promise<void> => {
  await api.delete<string>(`/clients/${idClient}`);
};
