export const setToken = (value: string) => {
    localStorage.setItem('token', value);
}

export const getToken = (): string => {
    const token = localStorage.getItem('token') ?? "";
    return token
}
export const removeItem = (key: string) => {
    localStorage.removeItem(key)
}

export const clearToken = () => {
    localStorage.clear()
}