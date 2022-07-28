import { SET_JOB, ADD_JOB, DEL_JOB } from "./constant"

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case SET_JOB:
            return {
                ...state,
                job: payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload]
            }
        case DEL_JOB:
            const newJob = [...state.jobs]
            newJob.splice(payload, 1)
            return {
                ...state,
                jobs: newJob
            }
        default:
            throw new Error('Invalid action')
    }
}

export default reducer
