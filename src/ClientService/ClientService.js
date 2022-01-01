import Client from "./Client.js";

class ClientService {
    async create(client) {
        const createdClient = await Client.create(client)
        return createdClient;
    }
    async getAll() {
        const clients = await Client.find()
        return clients
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const client = await Client.findById(id);
        return client;
    }
    async update(client) {
        if (!client._id) {
            throw new Error('Не указан ID')
        }
        const updateClient = await Client.findByIdAndUpdate(client._id, client, {new: true})
        return updateClient
    }
    async delete(id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const deleteClient = await Client.findByIdAndDelete(id);
        return deleteClient
    }
}

export default new ClientService()