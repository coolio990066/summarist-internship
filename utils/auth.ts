import { signOut, auth } from '../firebase'

export const handleLogout = async (router: any) => {
  try {
    await signOut(auth)
    router.push('/')
  } catch (error: any) {
    alert('Failed to log out: ' + error.message)
  }
}
