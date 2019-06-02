import * as ReportAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveProjects = (projects) => {
    return {
        type: RECEIVE_PROJECTS,
        projects,
    };
};

const receiveProject = (project) => {
    return {
        type: RECEIVE_PROJECT,
        project,
    };
};

const removeProject = (projectId) => {
    return {
        type: REMOVE_PROJECT,
        reportId,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestProjects = () => {
    return (dispatch) => {
        return ReportAPIUtil.fetchProjects().then(
            (projects) => dispatch(receiveProjects(projects)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const requestProject = (projectId) => {
    return (dispatch) => {
        return ReportAPIUtil.fetchProject(projectId).then(
            (project) => dispatch(receiveProject(project)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const createProject = (project) => {
    return (dispatch) => {
        return ReportAPIUtil.fetchProject(project).then(
            (newProject) => dispatch(receiveProject(newProject)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const updateProject = (project) => {
    return (dispatch) => {
        return ReportAPIUtil.updateProject(project).then(
            (updatedProject) => dispatch(receiveProject(updatedProject)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const deleteProject = (projectId) => {
    return (dispatch) => {
        return ReportAPIUtil.Project(project).then(
            (removedProject) => dispatch(removeProject(removedProject))
        );
    };
};
