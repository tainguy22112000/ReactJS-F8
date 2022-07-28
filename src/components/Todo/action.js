import { SET_JOB, ADD_JOB, DEL_JOB } from "./constant"

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}
