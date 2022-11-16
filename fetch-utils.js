// Enter Supabase Information
const SUPABASE_URL = 'https://uqwstvnsesaenalrdjyp.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxd3N0dm5zZXNhZW5hbHJkanlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMjYsImV4cCI6MTk4MzY4NDAyNn0.bZ660DcBSXEiAg5PHlsCACk9kEfmD8_HYAnhjOB69Vo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.error) {
        return response.error;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    console.log(response.user, 'user');
    return response.user;
}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
