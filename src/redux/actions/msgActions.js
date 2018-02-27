import { msgConstants } from "./actionConstants";
 
export const msgActions = {
    success,
    error,
    clear
};
 
function success(message) {
    return { type: msgConstants.SUCCESS, message: message };
}
 
function error(message) {
    return { type: msgConstants.ERROR, message };
}
 
function clear() {
    return { type: msgConstants.CLEAR };
}