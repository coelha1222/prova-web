import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);
export const currentUser = writable(null);
export const products = writable([]);

users.subscribe(v => {
    const user = v.at(-1);
    
    if (!user) return;

    const formData = new FormData();
    formData.append('nome', user.nome);
    formData.append('email', user.email);
    formData.append('senha', user.pw);

    fetch('http://localhost:8000/add-user.php', {
        method: 'post',
        body: formData
    }); // non blocking
    console.log('oi');
})

export function addProduct(nome,id) {
    const formData = new FormData();
    formData.append('name', nome);
    formData.append('id',id);

    fetch('http://localhost:8000/add-product.php', {
        method: 'post',
        body: formData
    });

    loadProducts(id)
}

export async function removeProduct(id,user_id) {
    await fetch('http://localhost:8000/remove-product.php?id=' + id, {
        method: 'get'
    });
    loadProducts(id)
}

async function loadProducts(user_id) {
    // console.log('deve carregar os produtos do usuário ' + user_id)
    const response = await fetch('http://localhost:8000/get-products.php?user_id=' + user_id, {
        method: 'get'
    });
    const data = await response.json();
    products.set(data);
}

export const login = async (nome, pw) => {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('senha', pw);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'post',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    currentUser.set(data);
    loadProducts(data.id)
}