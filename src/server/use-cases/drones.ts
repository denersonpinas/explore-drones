import { IDrones } from "../entities/drones"
import axios from "axios"

const getAllDrones = async (): Promise<IDrones[]> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN_API}?endpoint=drones`)

    const brands: IDrones[] = response.data

    return brands
}

export const dronesUseCases = {
    getAllDrones
}