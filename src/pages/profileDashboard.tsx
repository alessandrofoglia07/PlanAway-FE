import { useAuthUser, useSignOut } from 'react-auth-kit';

export const ProfileDashboardPage = () => {

    const auth = useAuthUser();
    const signOut = useSignOut();

    const handleSignOut = () => {
        signOut();
    }

    return (
        <div>
            <h1>Hello {auth()!.username}</h1>
            <h2>Your email is {auth()!.email}</h2>
            <h2>Not gonna show your password :D</h2>
            <button onClick={() => {handleSignOut()}}>Sign Out</button>
        </div>
    )
}
