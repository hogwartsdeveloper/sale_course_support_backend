import GreetServise from './GreetServise.js';

class GreetController {
    async create(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        
        try {
            const greet = await GreetServise.create(req.body, req.files.picture);
            res.status(200).json(greet)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        try {
            const greets = await GreetServise.getAll();
            res.status(200).json(greets)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        res.set('Content-Security-Policy', '*')
        try {
            const greet = await GreetServise.getOne(req.params.id)
            res.status(200).json(greet)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        try {
            const updateGreet = await GreetServise.update(req.body)
            res.status(200).json(updateGreet)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        try {
            const greet = await GreetServise.delete(req.params.id)
            res.status(200).json(greet)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new GreetController();