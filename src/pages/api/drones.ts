import { dronesUseCases } from '@/src/server/use-cases/drones'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    try {
        const { method } = req

        if (method === 'GET') {
            if (req.query?.id) {
                return res.status(503).json({ message: "Method not allowed." })
            } else {
                const response = await dronesUseCases.getAllDrones()
                return res.status(200).json(response)
            }

        }

        return res.status(503).json({ message: "Method not allowed." })
    } catch (e: any) {
        return res.status(500).json({ message: "Server Error." })
    }
}