export const getOneUser = async (id) => {
    if(!id) return null;
    const response = await fetch(`http://127.0.0.1:1337/api/users/${id}?populate=profileImage`);
    const result = await response.json();
    if(!result) return null;
    return result;
}