import AuthGuard from "../../Utils/auth/auth-guard";
import Transactions from "./Transactions";

function IBanking() {
  return (
    <AuthGuard>
      <Transactions />
    </AuthGuard>
  );
}

export { IBanking };
