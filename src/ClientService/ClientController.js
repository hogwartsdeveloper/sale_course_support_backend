import ClientService from "./ClientService.js"

class ClientController {
    async create(req, res) {
        try {
            const client = await ClientService.create(req.body)
            res.status(200).json(client)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const clients = await ClientService.getAll()
            res.status(200).json(clients)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const client = await ClientService.getOne(req.params.id)
            res.status(200).json(client)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updateClient = await ClientService.update(req.body)
            res.status(200).json(updateClient)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const deleteClient = await ClientService.delete(req.params.id)
            res.status(200).json(deleteClient)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ClientController();