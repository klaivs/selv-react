import { msgConstants } from "./actionConstants";
 
export const msgActions = {
    success,
    error,
    clear
};

const test = {};
 
function success(message) {
    return { type: msgConstants.SUCCESS, message };
}
 
function error(message) {
    return { type: msgConstants.ERROR, message };
}
 
function clear() {
    return { type: msgConstants.CLEAR };
}