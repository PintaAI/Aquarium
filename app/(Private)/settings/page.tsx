"use client";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { UseCurrentUser } from "@/hooks/use-current-user";

const settings = () => {
  const session = UseCurrentUser();

  const onClickLogout = () => {
    logout();
  };

  const onClickNavigate = () => {
    window.location.href = "/community";
  };

  return (
    <div className="text-white">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Button variant="outline" onClick={onClickLogout}>
        Sign Out
      </Button>
      <Button variant="outline" onClick={onClickNavigate}>
        Go to Community
      </Button>
    </div>
  );
};

export default settings;
