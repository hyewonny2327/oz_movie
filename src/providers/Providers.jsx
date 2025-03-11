import { SupabaseProvider } from '../supabase';
import { UserProvider } from './userProvider';

function Providers({ children }) {
  return (
    <SupabaseProvider>
      <UserProvider>{children}</UserProvider>
    </SupabaseProvider>
  );
}

export default Providers;
